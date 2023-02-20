<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
	title="Example Library/Design tokens/Font sizes"
	layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="Small text">
        <div class="fs-0">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
    <Hst.Variant title="Default text">
        <div class="fs-1">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
    <Hst.Variant title="Subheader text">
        <div class="fs-2">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
    <Hst.Variant title="Small header text">
        <div class="fs-3">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
    <Hst.Variant title="Large header text">
        <div class="fs-4">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
    <Hst.Variant title="Extra large header text">
        <div class="fs-5">The quick brown fox jumped over the lazy dog.</div>
    </Hst.Variant>
</Hst.Story>

<style>
    @import 'FontSizes.css';

    .fs-0 { font-size: var(--fs-0); }
    .fs-1 { font-size: var(--fs-1); }
    .fs-2 { font-size: var(--fs-2); }
    .fs-3 { font-size: var(--fs-3); }
    .fs-4 { font-size: var(--fs-4); }
    .fs-5 { font-size: var(--fs-5); }
</style>