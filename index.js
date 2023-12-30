const { app, BrowserWindow, protocol } = require("electron");

const url = require("url");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    title: "Dress",
    width: 1440,
    height: 1024,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });
  win.loadURL("http://localhost:3000/");
  win.setMenu(null);
};

app.whenReady().then(() => {
  createWindow();
});
