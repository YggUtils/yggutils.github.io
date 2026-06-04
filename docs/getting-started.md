# Getting Started

This page walks you through setting up and running YggUtils for the first time.

## Prerequisites

- **Java** installed (use the same version your Minecraft server JAR requires)
- Your Minecraft server `.jar` file present in the directory where you'll run YggUtils
- A Yggdrasil-compatible authentication server URL

## Installation

Download the latest `YggUtils.jar` from the [GitHub releases page](https://github.com/yggutils/yggutils/releases) and place it in the same directory as your server JAR.

Your folder should look something like this:

```
/server
├── YggUtils.jar
├── server.jar          ← your Minecraft server
├── server.properties
└── ...
```

## First Run

Run YggUtils once to generate the default config:

```bash
java -jar YggUtils.jar
```

Because no config file exists yet, YggUtils will create `YggUtils.yml` with empty values and exit:

```
[YggUtils] No configuration found. A default config has been generated: YggUtils.yml
[YggUtils] Please fill in 'authserver' and 'serverfile' before running again.
```

## Configure

Open `YggUtils.yml` and fill in both values:

```yaml
authserver: https://your.auth.server
serverfile: server.jar
```

| Field | Description |
|---|---|
| `authserver` | The root URL of your Yggdrasil-compatible authentication server |
| `serverfile` | The filename of your Minecraft server JAR (relative to the working directory) |

## Start the Server

Run YggUtils again:

```bash
java -jar YggUtils.jar
```

YggUtils will silently launch your server with authlib-injector attached. All server output passes through to your console as normal.

## Next Steps

- Learn about [configuration options](../reference/configuration.md)
- Understand the [launch process](../guide/how-launching-works.md)
- See what happens on [crashes and restarts](../guide/auto-restart.md)
