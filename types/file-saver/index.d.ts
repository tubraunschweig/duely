/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

declare module 'file-saver' {
  const FileSaver: FileSaverJS.FileSaver;
  namespace FileSaverJS {
    class FileSaver {
      constructor();
      /**
       * Promts the specified file or blob for download
       * @param data The blob or file to save
       * @param filename The name to store the file with
       * @param disableAutoBOM Set to true to prevent the byte order mark to be attached
       */
      saveAs(data: Blob | File, filename?: string, disableAutoBOM?: boolean): void;
    }
  }
  export = FileSaver;
}
