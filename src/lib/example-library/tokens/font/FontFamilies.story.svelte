<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
    title="Example Library/Design tokens/Font families"
    layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="Default">
        <div class="default">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
    <Hst.Variant title="Monospace">
        <div class="monospace">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
</Hst.Story>

<style>
    @import 'FontFamilies.css';

    .default {
        font-family: var(--font);
    }
    .monospace {
        font-family: var(--font-monospace);
    }
</style>