const { app, BrowserWindow, ipcMain } = require('electron');
const steamworks = require('steamworks.js');
const steam = steamworks.init(3397600);


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      //enableRemoteModule: true,
    },
  });

  win.loadFile('jeu/index.html');
  console.log(steam.localplayer.getName());
    // // Ouvre les DevTools automatiquement
    // win.webContents.openDevTools();

  // Écouter l'événement "close-app" pour fermer l'application
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

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
require('steamworks.js').electronEnableSteamOverlay()