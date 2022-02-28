# SSG cli

```
npm i ssgrtk -g
```

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ssgrtk
$ ssg COMMAND
running command...
$ ssg (--version)
ssgrtk/0.0.5 darwin-x64 node-v16.13.2
$ ssg --help [COMMAND]
USAGE
  $ ssg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ssg collection`](#ssg-collection)
* [`ssg create`](#ssg-create)
* [`ssg crud`](#ssg-crud)
* [`ssg delete`](#ssg-delete)
* [`ssg get`](#ssg-get)
* [`ssg help [COMMAND]`](#ssg-help-command)
* [`ssg patch`](#ssg-patch)
* [`ssg plugins`](#ssg-plugins)
* [`ssg plugins:inspect PLUGIN...`](#ssg-pluginsinspect-plugin)
* [`ssg plugins:install PLUGIN...`](#ssg-pluginsinstall-plugin)
* [`ssg plugins:link PLUGIN`](#ssg-pluginslink-plugin)
* [`ssg plugins:uninstall PLUGIN...`](#ssg-pluginsuninstall-plugin)
* [`ssg plugins update`](#ssg-plugins-update)
* [`ssg update`](#ssg-update)

## `ssg collection`

```
USAGE
  $ ssg collection
```

_See code: [dist/commands/collection.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/collection.ts)_

## `ssg create`

```
USAGE
  $ ssg create
```

_See code: [dist/commands/create.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/create.ts)_

## `ssg crud`

```
USAGE
  $ ssg crud
```

_See code: [dist/commands/crud.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/crud.ts)_

## `ssg delete`

```
USAGE
  $ ssg delete
```

_See code: [dist/commands/delete.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/delete.ts)_

## `ssg get`

```
USAGE
  $ ssg get
```

_See code: [dist/commands/get.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/get.ts)_

## `ssg help [COMMAND]`

Display help for ssg.

```
USAGE
  $ ssg help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ssg.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `ssg patch`

```
USAGE
  $ ssg patch
```

_See code: [dist/commands/patch.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/patch.ts)_

## `ssg plugins`

List installed plugins.

```
USAGE
  $ ssg plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ssg plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `ssg plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ssg plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ssg plugins:inspect myplugin
```

## `ssg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ssg plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ssg plugins add

EXAMPLES
  $ ssg plugins:install myplugin 

  $ ssg plugins:install https://github.com/someuser/someplugin

  $ ssg plugins:install someuser/someplugin
```

## `ssg plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ssg plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ssg plugins:link myplugin
```

## `ssg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ssg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ssg plugins unlink
  $ ssg plugins remove
```

## `ssg plugins update`

Update installed plugins.

```
USAGE
  $ ssg plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `ssg update`

```
USAGE
  $ ssg update
```

_See code: [dist/commands/update.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.5/dist/commands/update.ts)_
<!-- commandsstop -->
