<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
    title="Example Library/Design tokens/Margins (inline)"
    layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="No margin">
        <div class="container">
        	<div class="m margin-inline-0">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Tiny margin">
		<div class="container">
        	<div class="m margin-inline-1">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Very small margin">
        <div class="container">
        	<div class="m margin-inline-2">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Small margin">
        <div class="container">
        	<div class="m margin-inline-3">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Default margin">
        <div class="container">
        	<div class="m margin-inline-4">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Medium margin">
        <div class="container">
        	<div class="m margin-inline-5">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Large margin">
        <div class="container">
        	<div class="m margin-inline-6">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Very large margin">
        <div class="container">
        	<div class="m margin-inline-7">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
    <Hst.Variant title="Gigantic margin">
        <div class="container">
        	<div class="m margin-inline-8">Lorem ibsum.</div>
        </div>
    </Hst.Variant>
</Hst.Story>

<style>
	@import 'Sizes.css';

	.container {
		display: grid;
		place-items: center;
		width: fit-content;
        border: 1px solid hsl(0, 0%, 100%);
	}
	.m {
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 0%);
	}

	.margin-inline-0 { margin-inline: var(--size-inline-0); }
	.margin-inline-1 { margin-inline: var(--size-inline-1); }
	.margin-inline-2 { margin-inline: var(--size-inline-2); }
	.margin-inline-3 { margin-inline: var(--size-inline-3); }
	.margin-inline-4 { margin-inline: var(--size-inline-4); }
	.margin-inline-5 { margin-inline: var(--size-inline-5); }
	.margin-inline-6 { margin-inline: var(--size-inline-6); }
	.margin-inline-7 { margin-inline: var(--size-inline-7); }
	.margin-inline-8 { margin-inline: var(--size-inline-8); }
</style>