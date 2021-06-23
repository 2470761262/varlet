import VarImagePreview from './ImagePreview.vue'
import { App, nextTick, reactive } from 'vue'
import { inBrowser, isArray } from '../utils/shared'
import { mountInstance } from '../utils/components'

interface ImagePreviewOptions {
  show?: boolean
  current?: string
  images?: string[]
  zoom?: string | number
  lockScroll?: boolean
  indicator?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (index: number) => void
}

let singletonOptions: ImagePreviewOptions | null

function ImagePreview(options: ImagePreviewOptions | string[]) {
  if (!inBrowser) {
    return
  }

  ImagePreview.close()

  const imagePreviewOptions: ImagePreviewOptions = isArray(options) ? { images: options } : options
  const reactiveImagePreviewOptions: ImagePreviewOptions = reactive(imagePreviewOptions)
  singletonOptions = reactiveImagePreviewOptions

  const { unmountInstance } = mountInstance(VarImagePreview, reactiveImagePreviewOptions, {
    onClose: () => reactiveImagePreviewOptions.onClose?.(),
    onClosed: () => {
      reactiveImagePreviewOptions.onClosed?.()
      unmountInstance()
      singletonOptions === reactiveImagePreviewOptions && (singletonOptions = null)
    },
    onRouteChange: () => {
      unmountInstance()
      singletonOptions === reactiveImagePreviewOptions && (singletonOptions = null)
    },
    'onUpdate:show': (value: boolean) => {
      reactiveImagePreviewOptions.show = value
    },
  })

  reactiveImagePreviewOptions.show = true
}

ImagePreview.close = () => {
  if (singletonOptions != null) {
    const prevSingletonOptions = singletonOptions
    singletonOptions = null

    nextTick().then(() => {
      prevSingletonOptions.show = false
    })
  }
}

VarImagePreview.install = function (app: App) {
  app.component(VarImagePreview.name, VarImagePreview)
}

ImagePreview.install = function (app: App) {
  app.component(VarImagePreview.name, VarImagePreview)
}

ImagePreview.Component = VarImagePreview

export default ImagePreview