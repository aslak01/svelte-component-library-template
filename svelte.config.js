import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const removeMatchingFilesFromPackage = (filepath) => {
  const invalidFileEndings = [
    '.story.svelte',
    '.story.md',
    '.test.ts',
  ]

  invalidFileEndings.forEach((invalidFileEnding) => {
    if (filepath.endsWith(invalidFileEnding)) {
      return false
    }
  })
  return true
}

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  package: {
    source: 'src/lib',
    files: (filepath) => removeMatchingFilesFromPackage(filepath)
  },
}
