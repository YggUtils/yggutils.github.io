# Configuration

YggUtils is configured through a single YAML file: `YggUtils.yml`, located in the same directory you run the JAR from.

## Generating the Config

If `YggUtils.yml` does not exist, YggUtils will create it automatically on first run and exit. The generated file contains empty placeholder values:

```yaml
authserver: https://auth.example.com
serverfile: example.jar
```

## Fields

### `authserver`

**Type:** `string`  
**Required:** Yes

The root URL of your Yggdrasil-compatible authentication server. This value is passed directly to authlib-injector as the agent argument.

```yaml
authserver: https://littleskin.cn
```

authlib-injector will query this URL for API metadata and use it to redirect all of Minecraft's authentication traffic.

### `serverfile`

**Type:** `string`  
**Required:** Yes

The filename of the Minecraft server JAR to launch, relative to the working directory.

```yaml
serverfile: server.jar
```

YggUtils checks that this file exists before starting. If it does not exist, YggUtils will print an error and exit with code `1`.

## Example Config

```yaml
authserver: https://littleskin.cn
serverfile: server.jar
```

## Validation Rules

| Condition | Behaviour |
|---|---|
| File does not exist | Config generated, YggUtils exits with code `0` |
| `authserver` is empty | Warning printed, YggUtils exits with code `0` |
| `serverfile` is empty | Warning printed, YggUtils exits with code `0` |
| `serverfile` points to a missing file | Error printed, YggUtils exits with code `1` |

## Reconfiguring

To change your auth server or server JAR, edit `YggUtils.yml` directly and restart YggUtils. To reset to defaults, delete the file and run YggUtils once to regenerate it.
