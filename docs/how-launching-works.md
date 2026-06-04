# How Launching Works

When you run `java -jar YggUtils.jar`, several things happen in order before your Minecraft server starts.

## Startup Sequence

### 1. Meta directory

YggUtils ensures a `meta/` directory exists in the working directory. This is where it stores `authlibinjector.jar`.

### 2. Authlib-injector check

If `meta/authlibinjector.jar` is not present, YggUtils downloads it automatically from the official GitHub release. If the download fails, YggUtils exits with code `1` and prints an error.

### 3. Config validation

YggUtils reads `YggUtils.yml` and checks:

- The file exists
- Both `authserver` and `serverfile` are non-empty
- The file named in `serverfile` actually exists on disk

If the config file is missing, it is generated with empty values and YggUtils exits with code `0`, prompting you to fill it in. If values are empty, YggUtils warns you and exits with code `0` without starting the server.

### 4. Server launch

Once config is valid, YggUtils launches your server using `ProcessBuilder` with the following effective command:

```bash
java -javaagent:meta/authlibinjector.jar=<authserver> -jar <serverfile> nogui
```

The `nogui` flag is always appended. stderr is merged into stdout so all output goes through a single stream.

### 5. Console forwarding

A background thread reads from your stdin and writes each line directly to the server process's stdin. This means any command you type in the terminal is forwarded to the running server as-is.

### 6. Output piping

A second background thread reads the server's stdout line by line, prints each line to your console, and appends it to `YggUtils-server.log`.

## The Restart Loop

After launching, YggUtils waits for the server process to exit. The exit code determines what happens next:

| Exit Code | Meaning | Action |
|---|---|---|
| `0` | Clean shutdown (e.g. `/stop`) | YggUtils exits normally |
| Non-zero | Crash or unexpected exit | Wait 3 seconds, then relaunch |

This loop continues until either a clean shutdown occurs or YggUtils itself is terminated.

## Effective JVM Command

The exact command YggUtils runs is always:

```
java -javaagent:meta/authlibinjector.jar=<authserver> -jar <serverfile> nogui
```

YggUtils does not pass any additional JVM flags. If you need custom flags (heap size, GC tuning, etc.), you should configure those at the hosting level or through a startup script that invokes YggUtils with those flags applied to it — note that flags on the YggUtils invocation itself do not pass through to the server process.
