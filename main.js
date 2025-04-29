const { app, BrowserWindow, ipcMain } = require('electron');
const steamworks = require('steamworks.js');
const steam = steamworks.init(3397600);
const path = require('path');
require('steamworks.js').electronEnableSteamOverlay();

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: path.join(__dirname, 'jeu/images/Icone.ico'),
    fullscreen: false,
    resizable: true,
    frame: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('jeu/index.html').then(() => {
    console.log(steam.localplayer.getName());
  }).catch((error) => {
    console.error('Failed to load the file:', error);
  });

  win.once('ready-to-show', () => {
    if (win.isFullScreen()) {
      win.setFullScreen(false);
    }
    win.show();
  });

  ipcMain.on("close-app", () => {
    win.close();
  });
}

ipcMain.on('unlock-achievement', (event, achievementId) => {
  try {
    steam.achievement.activate(achievementId);
    console.log(`Succès déverrouillé : ${achievementId}`);
  } catch (error) {
    console.error(`Erreur lors du déverrouillage du succès : ${achievementId}`, error);
  }
});

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
