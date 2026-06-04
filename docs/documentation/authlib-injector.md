# Authlib Injector

YggUtils uses [authlib-injector](https://github.com/yushijinhun/authlib-injector) to redirect Minecraft's authentication calls from Mojang's servers to your custom Yggdrasil backend.

## What Is authlib-injector?

authlib-injector is a Java agent that patches Minecraft's bundled `authlib` at runtime using bytecode manipulation. When attached to the JVM via `-javaagent`, it intercepts all outgoing authentication requests and rewrites the target URL to point at your specified server instead of `sessionserver.mojang.com` and `authserver.mojang.com`.

## Automatic Download

YggUtils downloads authlib-injector automatically on first run if it isn't already present. It is saved to:

```
meta/authlibinjector.jar
```

The version bundled is fixed in YggUtils's source. If you need a specific version, you can manually place the correct JAR at `meta/authlibinjector.jar` before running — YggUtils will skip the download if the file already exists.

## How It Is Attached

YggUtils passes authlib-injector to the server JVM using the standard Java agent flag:

```
-javaagent:meta/authlibinjector.jar=<authserver>
```

The value after `=` is your `authserver` URL from `YggUtils.yml`. authlib-injector fetches the API metadata from this URL at server startup to configure itself.

## Auth Server Requirements

Your authentication server must implement the Yggdrasil API and expose an API root that authlib-injector can query. Most self-hosted solutions (such as [blessing-skin-server](https://github.com/bs-community/blessing-skin-server) or similar) support this out of the box.

The `authserver` value in your config should be the root URL — for example:

```yaml
authserver: https://auth.example.com
```

authlib-injector will append the necessary API paths itself.

## Updating authlib-injector

To update to a newer version of authlib-injector, delete `meta/authlibinjector.jar` and update the download URL in YggUtils's source, then rebuild — or manually place the new JAR at that path.
