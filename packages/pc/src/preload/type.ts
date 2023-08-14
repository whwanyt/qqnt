export interface PreloadOptions {
  winViewId: number
}

export interface PreloadSizeOptions extends PreloadOptions {
  width: number
  height: number
}

export interface PreloadStatusOptions extends PreloadOptions {
  status: boolean
}

export interface CapturerOptions extends PreloadOptions {}

export interface sourcesOption {
  id: string
  name: string
  thumbnail: string
}
