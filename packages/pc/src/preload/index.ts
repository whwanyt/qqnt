import { clipboard, contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { PreloadSizeOptions, PreloadStatusOptions, PreloadOptions, sourcesOption } from './type'
import { MultiNewOptions } from '@qqnt/tookit'
// Custom APIs for renderer
export const api = {
  openWin: (option: MultiNewOptions) => ipcRenderer.send('openWin', option),
  changWindowSize: (option: PreloadSizeOptions) => ipcRenderer.send('changWindowSize', option),
  WindowSizeAlter: (option: PreloadStatusOptions) => {
    ipcRenderer.send('WindowSizeAlter', option)
  },
  WindowMinimize: (option: PreloadOptions) => ipcRenderer.send('windowMinimize', option),
  WindowMaximize: (option: PreloadOptions) => ipcRenderer.send('windowMaximize', option),
  WindowRestoreSize: (option: PreloadOptions) => ipcRenderer.send('windowRestoreSize', option),
  WindowMinSize: (option: PreloadSizeOptions) => ipcRenderer.send('windowMinSize', option),
  CenterWindow: (option: PreloadOptions) => ipcRenderer.send('centerWindow', option),
  WindowQuit: (option: PreloadOptions) => ipcRenderer.send('windowQuit', option),
  AppQuit: () => ipcRenderer.send('appQuit'),
  onCapturer: ():Promise<sourcesOption[]> => ipcRenderer.invoke('onCapturer'),
  clipboardWriteText: (text: string) => clipboard.writeText(text)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('nativeApi', { ...api, ...electronAPI })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.nativeApi = { ...api, ...electronAPI }
}
