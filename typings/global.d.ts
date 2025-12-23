/* prettier-ignore */
declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ElCard: typeof import('element-plus')['ElCard']
    ElConfigProvider: typeof import('element-plus')['ElConfigProvider']
  }
}

export {}
