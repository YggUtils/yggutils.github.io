# File Structure

This page describes all files and directories that YggUtils creates or uses during operation.

## Overview

```
/your-server-directory
├── YggUtils.jar                 ← the wrapper you run
├── YggUtils.yml                 ← configuration file
├── YggUtils-server.log          ← appended server output log
├── server.jar                   ← your Minecraft server JAR
├── meta/
│   └── authlibinjector.jar      ← auto-downloaded on first run
├── server.properties
├── world/
└── ...
```

## Files

### `YggUtils.yml`

The configuration file. Generated automatically on first run if missing. Contains `authserver` and `serverfile`.

See [Configuration](./configuration.md) for full details.

### `YggUtils-server.log`

A plain-text log of all server output. YggUtils appends to this file across sessions — it is never cleared automatically.

Each line is written exactly as the server produced it, with no additional prefix or timestamp added by the wrapper.

If you want per-session logs, manually clear or rename this file before starting.

### `meta/authlibinjector.jar`

The authlib-injector Java agent. YggUtils downloads this automatically from the official GitHub release if it is not present.

If you want to use a specific version, place the JAR here manually before running YggUtils — it will skip the download if the file already exists.

## What YggUtils Does Not Create

YggUtils does not create or modify any Minecraft server files. It does not touch `server.properties`, `ops.json`, `whitelist.json`, world data, or any plugin/mod files. All of those remain entirely under the server JAR's control.
