# Console Forwarding

YggUtils provides a transparent console interface — anything you type is sent directly to the running server, and everything the server outputs is printed back to you.

## Input Forwarding

A dedicated background thread reads lines from your terminal's stdin and writes them to the server process's stdin. This means all standard server commands work as expected:

```
say Hello, world!
op PlayerName
whitelist add PlayerName
stop
```

Input is forwarded after you press Enter. Empty lines are ignored.

## Output Streaming

The server's stdout and stderr are merged into a single stream. YggUtils reads this stream line by line and:

- Prints each line to your console immediately
- Appends each line to `YggUtils-server.log` in the working directory

There is no prefix or wrapper label added to server output — what the server prints is exactly what you see.

## Log File

All server output is appended to `YggUtils-server.log`. The file grows across restarts, giving you a continuous history of the server's output.

If you want per-session logs, clear or rotate this file manually before starting the server.

## Limitations

YggUtils does not intercept or parse server output. It has no awareness of server events, player activity, or log levels. If you need structured log handling, RCON integration, or remote console access, those should be managed at the Minecraft server or plugin level.
