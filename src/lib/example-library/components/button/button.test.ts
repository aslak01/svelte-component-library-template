import { test, expect } from 'vitest'

// This test is completely useless,
// as we're literally testing the Document Object Model,
// but it's a good example of how to use Vitest
test('button', async () => {
    const button = document.createElement('button')
    button.innerHTML = 'Click me'
    button.setAttribute('aria-selected', 'false')

    expect(button.outerHTML)
        .equals('<button aria-selected="false">Click me</button>')

    button.addEventListener('click', () => {
        button.setAttribute('aria-selected', 'true')
        button.innerHTML = 'Clicked'
    })
    button.click()

    expect(button.outerHTML)
        .equals('<button aria-selected="true">Clicked</button>')
})