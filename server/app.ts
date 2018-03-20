/**
 * This files creates a minimalistic Express server that
 * server the static Angular files to the client
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as os from 'os';

/**
 * retrieves network ip addresses to show to the administrator
 * @return An array of the used network addresses
 */
function getIPAddresses(): string[] {
  const network = os.networkInterfaces();
  const addresses: string[] = [];
  Object.keys(network).forEach((name) => {
    network[name].forEach((iface) => {
      if (iface.internal !== false || iface.family !== 'IPv4') {
        return;
      } else {
        addresses.push(iface.address);
      }
    });
  });
  return addresses;
}

/**
 * The Express application that creates the server
 */
const app: express.Application = express();

/**
 * The port the app should listen to
 * Can be entered via node environments,
 * defaults to port 8000
 */
const port: number = process.env.PORT || 8000;
/**
 * The mode used by the server
 * "production" enables compression
 */
const mode = process.env.NODE_ENV || 'development';

/**
 * Computed directory of static files independent of operating system
 */
const files: string = path.resolve(__dirname, 'static');

if (mode === 'production') {
  app.use(compression());
}

app.use(express.static(files));

/**
 * Let the angular router handle everything else
 */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

/**
 * Start the server and catch messages on the specified port
 */
app.listen(port, () => {
  console.info('Server running in %s mode', mode);
  const addresses = getIPAddresses();
  addresses.forEach((address) => {
    console.info('Access server on http://%s:%d', address, port);
  });
});
