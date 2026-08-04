import { getIframeScale } from '@vitest/browser/locators'

function getIframe() {
  // https://github.com/vitest-dev/vitest/blob/v5.0.0-beta.7/packages/browser/src/client/tester/tester-utils.ts#L258
  {
    const iframe = window.frameElement
    if (iframe) return iframe
  }

  // https://github.com/vitest-dev/vitest/blob/v4.1.10/packages/browser/src/client/tester/tester-utils.ts#L227
  {
    const iframe = window.parent.document.querySelector(`iframe[data-vitest]`)
    if (iframe) return iframe
  }

  throw new Error(
    `Cannot find iframe element. This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`,
  )
}

/**
 * A helper class to transform positions between the page and the iframe.
 */
export class IframeTransform {
  private iframeX: number
  private iframeY: number
  private iframeScale: number

  constructor() {
    const iframe = getIframe()

    const rect = iframe.getBoundingClientRect()

    this.iframeX = rect.x
    this.iframeY = rect.y
    this.iframeScale = getIframeScale()
  }

  /**
   * Given a position on the page, return the position on the iframe.
   */
  fromPageToIframe(x: number, y: number): [x: number, y: number] {
    return [
      (x - this.iframeX) / this.iframeScale,
      (y - this.iframeY) / this.iframeScale,
    ]
  }

  /**
   * Given a position on the iframe, return the position on the page.
   */
  fromIframeToPage(x: number, y: number): [x: number, y: number] {
    return [
      x * this.iframeScale + this.iframeX,
      y * this.iframeScale + this.iframeY,
    ]
  }
}
