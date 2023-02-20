<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
    title="Example Library/Design tokens/Paddings (block)"
    layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="No padding">
        <div class="container">
        	<div class="m padding-block-0">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Tiny padding">
		<div class="container">
        	<div class="m padding-block-1">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Very small padding">
        <div class="container">
        	<div class="m padding-block-2">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Small padding">
        <div class="container">
        	<div class="m padding-block-3">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Default padding">
        <div class="container">
        	<div class="m padding-block-4">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Medium padding">
        <div class="container">
        	<div class="m padding-block-5">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Large padding">
        <div class="container">
        	<div class="m padding-block-6">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Very large padding">
        <div class="container">
        	<div class="m padding-block-7">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Gigantic padding">
        <div class="container">
        	<div class="m padding-block-8">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
</Hst.Story>

<style>
	@import 'Sizes.css';

	.container {
		display: grid;
		place-items: center;
		width: fit-content;
	}
	.m {
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 0%);
	}

	.padding-block-0 { padding-block: var(--size-block-0); }
	.padding-block-1 { padding-block: var(--size-block-1); }
	.padding-block-2 { padding-block: var(--size-block-2); }
	.padding-block-3 { padding-block: var(--size-block-3); }
	.padding-block-4 { padding-block: var(--size-block-4); }
	.padding-block-5 { padding-block: var(--size-block-5); }
	.padding-block-6 { padding-block: var(--size-block-6); }
	.padding-block-7 { padding-block: var(--size-block-7); }
	.padding-block-8 { padding-block: var(--size-block-8); }
</style>