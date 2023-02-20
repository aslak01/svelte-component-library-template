<script lang="ts">
    import type { Theme } from '@lib/example-library/tokens/color/Themes.types'

    export let theme: Theme = 'default'
</script>

<section class={`theme-${theme}`}>
    <h1>Hello world</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quaerat quod nemo exercitationem vel quibusdam rerum illo doloribus architecto dolores!</p>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        min-height: 20rem;
        justify-content: center;
        padding-inline: var(--padding-inline-6);
    }
</style>