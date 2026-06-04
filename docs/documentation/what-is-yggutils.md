# What is YggUtils?

YggUtils is a lightweight Java server wrapper that injects [authlib-injector](https://github.com/yushijinhun/authlib-injector) into any Minecraft server's JVM at launch — enabling custom Yggdrasil authentication on hosting environments where you cannot set JVM arguments directly.

<div class="tip custom-block" style="padding-top: 8px">

**Just want to get running?** Head to the [Getting Started](./getting-started.md) page.

</div>

## The Problem It Solves

Most Minecraft hosting panels don't let you modify JVM startup flags. Running a private network with a custom auth server (like [LittleSkin](https://littleskin.cn) or a self-hosted backend) normally requires adding a `-javaagent` flag to the JVM — something many shared hosts simply don't expose.

YggUtils wraps your server JAR and handles the agent injection itself, so you only need to run one JAR.

## How It Works

When you run YggUtils, it:

1. Ensures `authlib-injector` is downloaded and available locally
2. Reads your configuration to get the auth server URL and server JAR name
3. Launches your server JAR with the `-javaagent` flag injected automatically
4. Forwards your console input to the server and streams its output back to you
5. Restarts the server automatically if it crashes

From the outside, it behaves exactly like running the server directly.

## Key Features

- **Authlib Injector Fetching** — downloads and manages `authlib-injector.jar` automatically; no manual installation needed
- **Dynamic Launch Configuration** — a simple YAML config file controls which auth server and JAR to use
- **Native Console Interface** — full two-way console forwarding; commands you type go straight to the server
- **Auto-Restart** — on a non-zero exit (crash), YggUtils waits 3 seconds and relaunches the server
- **Silent Operation** — no wrapper noise in your console; output is passed through exactly as the server produces it

## What YggUtils Is Not

YggUtils is not an authentication server — it doesn't implement the Yggdrasil API itself. It simply redirects your Minecraft server's auth calls to whichever server you configure. You'll need a separately hosted Yggdrasil-compatible auth backend.
