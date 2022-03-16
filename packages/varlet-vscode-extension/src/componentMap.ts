export interface ComponentDescriptor {
  site: string
  attrs?: string[]
  characterDelta?: number
  closeSelf?: boolean
}

export const componentMap: Record<string, ComponentDescriptor> = {
  button: {
    site: '/button',
    attrs: ['type="primary"', 'size="normal"'],
  },
  // cell: {
  //   site: '/cell',
  // },
  // icon: '/icon',
  // image: '/image',
  // 'back-top': '/back-top',
  // 'app-bar': '/app-bar',
  // loading: '/loading',
  // chip: '/chip',
  // badge: '/badge',
  // skeleton: '/skeleton',
  // collapse: '/collapse',
  // 'collapse-item': '/collapse',
  // row: '/row',
  // col: '/row',
  // sticky: '/sticky',
  // progress: '/progress',
  // list: '/list',
  // swipe: '/swipe',
  // 'swipe-item': '/swipe',
  // steps: '/steps',
  // step: '/steps',
  // tabs: '/tabs',
  // tab: '/tabs',
  // 'tabs-items': '/tabs',
  // 'tab-item': '/tabs',
  // counter: '/counter',
  // countdown: '/countdown',
  // 'date-picker': '/date-picker',
  // 'time-picker': '/time-picker',
  // dialog: '/dialog',
  // form: '/form',
  // 'index-anchor': '/index-bar',
  // 'index-bar': '/index-bar',
  input: {
    site: '/input',
    closeSelf: true,
    attrs: ['v-model=""'],
    characterDelta: -3,
  },
  // select: '/select',
  // option: '/select',
  // menu: '/menu',
  // 'action-sheet': '/action-sheet',
  // picker: '/picker',
  // popup: '/popup',
  // 'pull-refresh': '/pull-refresh',
  // radio: '/radio-group',
  // 'radio-group': '/radio-group',
  // checkbox: '/checkbox-group',
  // 'checkbox-group': '/checkbox-group',
  // switch: '/switch',
  // rate: '/rate',
  // slider: '/slider',
  // snackbar: '/snackbar',
  // uploader: '/uploader',
  // card: '/card',
  // divider: '/divider',
  // 'style-provider': '/style-provider',
  // table: '/table',
  // pagination: '/pagination',
  // 'image-preview': '/image-preview',
  // space: '/space',
}