<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
    title="Example Library/Design tokens/Paddings (inline)"
    layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="No padding">
        <div class="container">
        	<div class="m padding-inline-0">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Tiny padding">
		<div class="container">
        	<div class="m padding-inline-1">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Very small padding">
        <div class="container">
        	<div class="m padding-inline-2">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Small padding">
        <div class="container">
        	<div class="m padding-inline-3">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Default padding">
        <div class="container">
        	<div class="m padding-inline-4">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Medium padding">
        <div class="container">
        	<div class="m padding-inline-5">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Large padding">
        <div class="container">
        	<div class="m padding-inline-6">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Very large padding">
        <div class="container">
        	<div class="m padding-inline-7">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Gigantic padding">
        <div class="container">
        	<div class="m padding-inline-8">Lorem ibsum.</div>
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

	.padding-inline-0 { padding-inline: var(--size-inline-0); }
	.padding-inline-1 { padding-inline: var(--size-inline-1); }
	.padding-inline-2 { padding-inline: var(--size-inline-2); }
	.padding-inline-3 { padding-inline: var(--size-inline-3); }
	.padding-inline-4 { padding-inline: var(--size-inline-4); }
	.padding-inline-5 { padding-inline: var(--size-inline-5); }
	.padding-inline-6 { padding-inline: var(--size-inline-6); }
	.padding-inline-7 { padding-inline: var(--size-inline-7); }
	.padding-inline-8 { padding-inline: var(--size-inline-8); }
</style>