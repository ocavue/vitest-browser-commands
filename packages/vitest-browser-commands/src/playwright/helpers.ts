/**
 * A helper class to transform positions between the page and the iframe.
 */
export class IframeTransform {
  private iframeX: number
  private iframeY: number
  private iframeScale: number

  constructor() {
    // The following code is based on https://github.com/vitest-dev/vitest/blob/v4.0.3/packages/browser/src/client/tester/tester-utils.ts#L170
    const iframe = window.parent.document.querySelector(`iframe[data-vitest]`)
    if (!iframe) {
      throw new Error(
        `Cannot find iframe element. This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`,
      )
    }

    const testerUi = iframe.parentElement
    if (!testerUi) {
      throw new Error(
        `Cannot find Tester element. This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`,
      )
    }

    const scaleAttribute = testerUi.getAttribute('data-scale')
    const scale = Number(scaleAttribute)
    if (Number.isNaN(scale)) {
      throw new TypeError(
        `Cannot parse scale value from Tester element (${scaleAttribute}). This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`,
      )
    }

    const rect = iframe.getBoundingClientRect()

    this.iframeX = rect.x
    this.iframeY = rect.y
    this.iframeScale = scale
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
