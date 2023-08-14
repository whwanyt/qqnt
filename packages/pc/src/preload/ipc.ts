import { ipcMain, desktopCapturer, BrowserView, app } from 'electron';
import { MultiNewOptions, Multiwindow } from '@qqnt/tookit';
import { PreloadOptions, PreloadSizeOptions, PreloadStatusOptions, sourcesOption } from './type';
export default function ipc() {
  changWindowSize();
  WindowSizeAlter();
  WindowMinimize();
  WindowMaximize();
  WindowRestoreSize();
  WindowMinSize();
  CenterWindow();
  WindowQuit();
  AppQuit();
  // setBackgroundColor()
  openWin();
  onUpdateTheme();
  onLogout();
  onCapturer();
}

function onCapturer() {
  ipcMain.handle('onCapturer', async (_event) => {
    const sources = await desktopCapturer.getSources({ types: ['window', 'screen'] });
    let list: sourcesOption[] = [];
    for (const item of sources) {
      list.push({
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail.toDataURL()
      });
    }
    return list;
  });
}

function onUpdateTheme() {
  ipcMain.on('updateTheme', (_event, data) => {
    const win = Multiwindow.getInstance();
    for (const [_key, item] of win.getWinds()) {
      item.webContents.send('setTheme', data);
    }
  });
}
function onLogout() {
  ipcMain.on('onLogout', (_event) => {
    const win = Multiwindow.getInstance();
    const winView = win.newWindow({ moduleName: 'app' });
    for (const [_key, item] of win.getWinds()) {
      if (winView?.id === item.id) {
        item.webContents.send('onLogout');
      } else {
        win.removeWin(item.id);
      }
    }
  });
}

function changWindowSize() {
  ipcMain.on('changWindowSize', (_event, data: PreloadSizeOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && win.setSize(data.width, data.height);
  });
}
function WindowSizeAlter() {
  ipcMain.on('WindowSizeAlter', (_event, data: PreloadStatusOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && (win.resizable = data.status);
  });
}

function WindowMinimize() {
  ipcMain.on('windowMinimize', (_event, data: PreloadOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && win.minimize();
  });
}

function WindowMaximize() {
  ipcMain.on('windowMaximize', (_event, data: PreloadOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && win.maximize();
  });
}

function WindowRestoreSize() {
  ipcMain.on('windowRestoreSize', (_event, data: PreloadOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && win.restore();
  });
}
function WindowQuit() {
  ipcMain.on('windowQuit', (_event, data: PreloadOptions) => {
    Multiwindow.getInstance().removeWin(data.winViewId);
  });
}
function AppQuit() {
  ipcMain.on('appQuit', (_event) => {
    app.quit();
  });
}
function WindowMinSize() {
  ipcMain.on('windowMinSize', (_event, data: PreloadSizeOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && win.setMinimumSize(data.width, data.height);
  });
}

function CenterWindow() {
  ipcMain.on('centerWindow', (_event, data: PreloadOptions) => {
    const win = Multiwindow.getInstance().getIdWin(data.winViewId);
    win && win.center();
  });
}

// function setBackgroundColor() {
//   ipcMain.on('setBackgroundColor', (_event, data: PreloadBackColorOptions) => {
//     const win = Multiwindow.getInstance().getIdWin(data.winViewId)
//     win && win.setBackgroundColor(data.color)
//   })
// }

function openWin() {
  ipcMain.on('openWin', (_event, data: MultiNewOptions) => {
    Multiwindow.getInstance().newWindow(data);
  });
}
