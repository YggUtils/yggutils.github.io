# Exit Codes

YggUtils uses exit codes to communicate the reason it stopped. This is useful for hosting panels or scripts that monitor the wrapper process.

## YggUtils Exit Codes

These are exit codes produced by the **YggUtils wrapper itself**, not the Minecraft server.

| Code | Reason |
|---|---|
| `0` | Config file was missing and has been generated — fill it in and re-run |
| `0` | Config values are empty — fill in `authserver` and `serverfile` |
| `0` | Server exited cleanly (exit code `0` from the server process) |
| `1` | `serverfile` path does not exist on disk |
| `1` | authlib-injector download failed |
| `1` | authlib-injector file missing after attempted download |

## Server Exit Codes

These are exit codes produced by the **Minecraft server process** itself, which YggUtils observes:

| Code | Meaning | YggUtils Action |
|---|---|---|
| `0` | Clean shutdown via `/stop` or equivalent | Wrapper exits with code `0` |
| Non-zero | Crash, OOM kill, or unexpected termination | Restart after 3 seconds |

## Notes

- YggUtils does not remap or translate server exit codes. The restart decision is based purely on whether the code is `0` or not.
- If your hosting panel monitors the wrapper process exit code, a `0` always means either a clean stop or a setup step (config generated/incomplete). A `1` means something is misconfigured or a download failed.
