<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst

    let theme = 'default'
    let disabled = false
</script>

<Hst.Story
    title="Example Library/Components/Button"
    layout={{ type: 'grid' }}
>
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
            <label>
                Disabled
                <input type="checkbox" bind:checked={disabled} />
            </label>
        </form>
    </svelte:fragment>

    <Hst.Variant title="Button">
        <button class={`theme-${theme}`} {disabled}>
            Click me!
        </button>
    </Hst.Variant>
    <Hst.Variant title="Link button">
        <a href="/" class={`button theme-${theme}`} class:disabled >
            Click me!
        </a>
    </Hst.Variant>
</Hst.Story>

<style>
    @import 'Button.css';

    form {
        display: grid;
        padding: 2rem;
        gap: 1rem;
    }
    label {
        display: grid;
        grid-template-columns: 1fr auto;
    }
</style>