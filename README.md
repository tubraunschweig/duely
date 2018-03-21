# Duely

Duely is a small powerful tool to generate multiple recurring appointments and filter national holidays. Because no one needs a business meeting on an national holiday. The Duely will give a out a [iCalendar](https://www.npmjs.com/package/ical-generator) standardized files, which will be compatible with all general used calender programs.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0. We created the server based Duely for mobile devices and desktop PC. The design is responsive and easy to use. For Desktop PC we also make a Program available, which is run with [electron](https://electron.atom.io/). Duely uses the [iCal-Standard](https://www.npmjs.com/package/ical-generator) to secure the same options as Outlook.

## How to get started

For Duely to be able to be build on your device you need the following steps :

### Prerequisites
These are the necessary steps to start the application for the first time
Before the install these programs are required :
  * [Nodejs](https://nodejs.org/en/) (min. v8.10.0) - make sure npm(v5.7.1) does install with it
  * Python (min v2.7)
All other libraries are automatically downloaded and installed from the package manager.

For the electron application the following OS are supported:
   * Windows 7
   * Windows 10
   * macOS Sierra
   * Ubuntu (16.04.2 )
   * Linux Mint (18.1 )
   * Scientific Linux (7.3)

For the server application the following browser are supported:
    * Chrome (LTS)
    * Firefox (LTS)
    * Opera (LTS)
    * Safari (LTS)
    * iOS Safari (LTS)
    * Android Chrome (LTS)
    * Android Firefox (LTS)

### Installing
    1. Download the application
    2. Execute `npm install` to install dependencies
    3. Execute `npm run build` to compile source code
    4. Start the application via `npm run start:server` to view the webapplcation or `npm run start:electron` to run the electron app
    5. if you started the server application type `http://localhost:8000`in your browser window.


### Commands Overview
|Command | Action|
| ------------- | --------------------- |
|`build`| Compile the source code for Electron and web use`|
|`build:prod`| Build the source code in production mode|
|`build:watch`| Build the source code and watch for changes|
|`build:electron`| Build the Electron code only|
|`build:electron:prod`| Build the Electron code in production mode|
|`build:server`| Build the server code only|
|`build:server:prod`| Build the server code in production mode|
|`clean`| Remove local files and unneeded dependencies|
|`doc`| Generate documentation from comments|
|`e2e`| Run end to end tests|
|`lint`	| Check format of source code|
|`package`| Package the Electron app for working system|
|`package:linux`| Package the Electron app for Linux x64|
|`package:linux:32`| Package the Electron app for Linux x32|
|`package:mac`| Package the Electron app for Mac OS x64|
|`package:mac:32`| Package the Electron app for Mac OS x32|
|`package:win`| Package the Electron app for Windows x64|
|`package:win:32`| Package the Electron app for Windows x32|
|`package:all`| Package the Electron app for all x64 systems|
|`package:all:32`| Package the Electron app for all x32 systems|
|`selenium`| Boot a selenium server for e2e tests|
|`start:server`	| Start the Node.js server|
|`start:electron`| Start the Electron app|

## Build

When making changes to the source code make sure to run `npm run build` afterwards
in order to apply the changes to your local copy.
You can execute `npm run build:watch` instead. This will not only apply previous edits
but also watch for file changes. Do not close the terminal until you are done. You can cancel the
command by pressing Ctrl + C twice.
If you run into problems with files that should have updated, try running npm run clean and then
npm run build to remove outdated files and start on a fresh base.

## Running unit tests

Command | Action
| ------------- | --------------------- |
| `test`  | Run unit tests using PhantomJS |
| `test:chrome` | Run unit tests using Chrome |
| `test:chrome:dev` | Run unit tests using Chrome Canary |
| `test:firefox` | Run unit tests using Firefox |
| `test:firefox:dev` | Run unit tests using Firefox Developer Edition |
| `test:opera` | Run unit tests using Opera |
| `test:safari` | Run unit tests using Safari |
| `verify` | Run `test`, `lint` and `e2e` for validation |


## Deployment

Before you can deploy the application you will need to build it for production mode.
Use `npm run build:prod` to do so. The :prod appendix will enable truncating and bundling the code
to minimize the file size.
The Electron app will need to be packaged into an executable file as well.
Utilize `npm run package:all` to create binaries for all supported operating systems
with x64 architecture. For x32 architecture `run npm run package:all:32`. You can also target
individual systems by writing `npm run package:linux`. Replace linux with win or mac
appropriately. For x32 architectures append :32 to the command.

You can also use `npm run package` without any parameters to build binaries for your own operating
system. This should only be used for testing as the files will not be bundled and will not come
with an installer.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.
## Versioning

We use Git for versioning. For the versions available, see the tags on this repository.

Packages that are to stay on this versions:

    "bootstrap": "^3.3.7",
    "@types/jasmine": "2.5.38",
    "@types/node": "^6.0.80",
    "awesome-typescript-loader": "^3.2.1",
    "extract-text-webpack-plugin": "^2.1.2",
    "postcss-loader": "^0.13.0",
    "postcss-url": "^5.1.2",
    "typescript": "^2.4.0",
    "webpack": "^2.6.1",
    "webpack-dev-server": "~2.3.0"

## Authors
   Till Affeldt
   Marlen Bernier
   Mike Kenneth Braun
   Jan Haberlag
   Frederik Kammer
   Lars Richard

## Notice about standard conformity
The implementation of timezones is not conform to the iCal standard specified in "RFC 5545 3.2.19. Time Zone Identifier"
as the utilized library "ical-generator" makes use of the non-standard `Timezone-ID` instead of `VTIMEZONE` in order
to support older versions of Microsoft Outlook.

## License

[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)

## Acknowledgments

Many thanks for H. Eggers for kicking our buts when we where to slow.
