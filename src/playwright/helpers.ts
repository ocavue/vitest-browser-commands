/**
 * Given a position relative to the page, return the position relative to the iframe.
 *
 * @internal
 */
export function processPlaywrightPosition(
  x: number,
  y: number,
): [x: number, y: number] {
  const scale = getIframeScale()
  const [iframeX, iframeY] = getIframePosition()
  console.debug('scale', scale)
  console.debug('iframeX', iframeX)
  console.debug('iframeY', iframeY)
  return [x * scale + iframeX, y * scale + iframeY]
}

/**
 * Based on https://github.com/vitest-dev/vitest/blob/v4.0.3/packages/browser/src/client/tester/tester-utils.ts#L170
 *
 * @internal
 */
function getIframeScale() {
  const testerUi =
    window.parent.document.querySelector(`iframe[data-vitest]`)?.parentElement
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
  return scale
}

/**
 * Based on https://github.com/vitest-dev/vitest/blob/v4.0.3/packages/browser/src/client/tester/tester-utils.ts#L170
 *
 * @internal
 */
function getIframePosition() {
  const iframe = window.parent.document.querySelector(`iframe[data-vitest]`)
  if (!iframe) {
    throw new Error(
      `Cannot find iframe element. This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`,
    )
  }
  const { x, y } = iframe.getBoundingClientRect()
  return [x, y]
}
