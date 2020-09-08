const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: 'SysTop',
      width: isDev ? 800 : 355,
      height: 500,
      icon: './assets/icons/icon.png',
      resizable: isDev ? true : false,
      backgroundColor: 'white',
      show: false,
      opacity: 0.9,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    if (isDev) {
      this.webContents.openDevTools();
    }

    this.loadFile(file);
  }
}

module.exports = MainWindow;
