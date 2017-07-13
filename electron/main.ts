/**
 * This file handles the Electron code and manages the windows
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This file contains modified code based on the Electron Quick Start guide.
 * For reference see https://github.com/electron/electron-quick-start/blob/master/main.js
 */

import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

/**
 * Keep a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 */
let mainWindow: Electron.BrowserWindow = null;

/**
 * Computed directory of static files independent of operating system
 */
const clientFolder: string = path.resolve(__dirname, 'static');

/**
 * Create a new main browser window
 */
function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Duely',
    show: false,
    webPreferences: {
      // sandbox: true
    }
  });
  mainWindow.loadURL(`file://${clientFolder}/index.html`);
  mainWindow.setMenu(null);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Open window on startup
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  /* On OS X it is common for applications and their menu bar
   * to stay active until the user quits explicitly with Cmd + Q
   */
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  /*
   * On OS X it's common to re-create a window in the app when the
   * dock icon is clicked and there are no other windows open.
   */
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('openSaveDialog', (event) => {
  console.log('ping');  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong');
});
