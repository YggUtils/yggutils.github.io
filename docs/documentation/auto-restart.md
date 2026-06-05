# Auto-Restart

YggUtils automatically restarts your Minecraft server if it exits unexpectedly, without any extra configuration.

## How It Works

After the server process exits, YggUtils checks the exit code:

- **Exit code `0`** — the server shut down cleanly (e.g. someone ran `/stop`). YggUtils exits too.
- **Any other exit code** — the server crashed or was killed unexpectedly. YggUtils waits **3 seconds** and relaunches it.

This restart loop runs indefinitely until a clean shutdown happens.

## Clean Shutdown

To stop both the server and YggUtils together, shut down the server normally from within Minecraft:

```
/stop
```

Or type `stop` directly in the console. YggUtils forwards this to the server, the server exits with code `0`, and the wrapper exits as well.

## Crash Scenario

If the server crashes (OutOfMemoryError, plugin exception that kills the JVM, etc.), YggUtils will:

1. Detect the non-zero exit
2. Wait 3 seconds
3. Re-run the same launch command
4. Resume piping output and forwarding console input

## Killing YggUtils Directly

If you kill the YggUtils process (e.g. `Ctrl+C`, `SIGTERM`, or a hosting panel "stop" that targets the wrapper), the child server process may continue running as an orphan depending on your OS and how the signal is handled.

For clean shutdown in production environments, always use `/stop` from within the server rather than terminating the wrapper process externally.
