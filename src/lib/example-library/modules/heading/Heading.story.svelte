<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    import type { Theme } from '@lib/example-library/tokens/color/Themes.types'

    import Heading from './Heading.svelte';
    export let Hst: Hst

    let theme: Theme = 'default'
</script>

<Hst.Story
    title="Example Library/Modules/Heading"
    layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant>
        <Heading theme="default" />
    </Hst.Variant>

    <svelte:fragment slot="controls">
        <form>
            <label>
                Theme
                <select bind:value={theme}>
                    <option value="default">Default</option>
                    <option value="danger">Danger</option>
                    <option value="info">Info</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                </select>
            </label>
        </form>
    </svelte:fragment>
</Hst.Story>
