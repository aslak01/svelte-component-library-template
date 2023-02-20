<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
	title="Example Library/Design tokens/Margins (block)"
	layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="No margin">
		<div class="container">
			<div class="m margin-block-0">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Tiny margin">
		<div class="container">
			<div class="m margin-block-1">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Very small margin">
		<div class="container">
			<div class="m margin-block-2">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Small margin">
		<div class="container">
			<div class="m margin-block-3">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Default margin">
		<div class="container">
			<div class="m margin-block-4">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Medium margin">
		<div class="container">
			<div class="m margin-block-5">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Large margin">
		<div class="container">
			<div class="m margin-block-6">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Very large margin">
		<div class="container">
			<div class="m margin-block-7">Lorem ibsum.</div>
		</div>
    </Hst.Variant>
    <Hst.Variant title="Gigantic margin">
		<div class="container">
			<div class="m margin-block-8">Lorem ibsum.</div>
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
		outline-offset: -1px;
	}

	.m {
		display: grid;
		place-items: center;
		background-color: hsl(0, 0%, 100%);
		color: hsl(0, 0%, 0%);
	}

	.margin-block-0 { margin-block: var(--size-block-0); }
	.margin-block-1 { margin-block: var(--size-block-1); }
	.margin-block-2 { margin-block: var(--size-block-2); }
	.margin-block-3 { margin-block: var(--size-block-3); }
	.margin-block-4 { margin-block: var(--size-block-4); }
	.margin-block-5 { margin-block: var(--size-block-5); }
	.margin-block-6 { margin-block: var(--size-block-6); }
	.margin-block-7 { margin-block: var(--size-block-7); }
	.margin-block-8 { margin-block: var(--size-block-8); }
</style>