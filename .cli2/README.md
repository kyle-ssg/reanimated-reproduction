oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ssg
$ ssg COMMAND
running command...
$ ssg (--version)
ssg/0.0.0 darwin-x64 node-v16.13.2
$ ssg --help [COMMAND]
USAGE
  $ ssg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ssg hello PERSON`](#ssg-hello-person)
* [`ssg hello world`](#ssg-hello-world)
* [`ssg help [COMMAND]`](#ssg-help-command)
* [`ssg plugins`](#ssg-plugins)
* [`ssg plugins:inspect PLUGIN...`](#ssg-pluginsinspect-plugin)
* [`ssg plugins:install PLUGIN...`](#ssg-pluginsinstall-plugin)
* [`ssg plugins:link PLUGIN`](#ssg-pluginslink-plugin)
* [`ssg plugins:uninstall PLUGIN...`](#ssg-pluginsuninstall-plugin)
* [`ssg plugins update`](#ssg-plugins-update)

## `ssg hello PERSON`

Say hello

```
USAGE
  $ ssg hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/kyle-ssg/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `ssg hello world`

Say hello world

```
USAGE
  $ ssg hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

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
<!-- commandsstop -->
