declare module 'react-katex'
declare module 'react-helmet'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.mp4'

declare global {
  // 扩展
  interface Navigator {
    standalone?: boolean
  }
}

export {}
