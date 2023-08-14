import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    winViewId: number
    winViewModule: string
    nativeApi: typeof import('./index').api & ElectronAPI
  }
}
