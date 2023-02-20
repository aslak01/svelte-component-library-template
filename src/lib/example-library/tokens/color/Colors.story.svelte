<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
    title="Example Library/Design tokens/Colors"
    layout={{ type: 'grid' }}
>
    <Hst.Variant title="Grey">
        <section>
            <div class="grey-1"></div>
            <div class="grey-2"></div>
            <div class="grey-3"></div>
            <div class="grey-4"></div>
            <div class="grey-5"></div>
            <div class="grey-6"></div>
            <div class="grey-7"></div>
            <div class="grey-8"></div>
            <div class="grey-9"></div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Blue">
        <section>
            <div class="blue-1"></div>
            <div class="blue-2"></div>
            <div class="blue-3"></div>
            <div class="blue-4"></div>
            <div class="blue-5"></div>
            <div class="blue-6"></div>
            <div class="blue-7"></div>
            <div class="blue-8"></div>
            <div class="blue-9"></div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Green">
        <section>
            <div class="green-1"></div>
            <div class="green-2"></div>
            <div class="green-3"></div>
            <div class="green-4"></div>
            <div class="green-5"></div>
            <div class="green-6"></div>
            <div class="green-7"></div>
            <div class="green-8"></div>
            <div class="green-9"></div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Red">
        <section>
            <div class="red-1"></div>
            <div class="red-2"></div>
            <div class="red-3"></div>
            <div class="red-4"></div>
            <div class="red-5"></div>
            <div class="red-6"></div>
            <div class="red-7"></div>
            <div class="red-8"></div>
            <div class="red-9"></div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Yellow">
        <section>
            <div class="yellow-1"></div>
            <div class="yellow-2"></div>
            <div class="yellow-3"></div>
            <div class="yellow-4"></div>
            <div class="yellow-5"></div>
            <div class="yellow-6"></div>
            <div class="yellow-7"></div>
            <div class="yellow-8"></div>
            <div class="yellow-9"></div>
        </section>
    </Hst.Variant>
</Hst.Story>

<style>
    @import 'Colors.css';
    section {
        display: grid;
        gap: 1rem;
    }
    div {
        height: 3rem;
    }
    .grey-1 { background-color: var(--grey-1); }
    .grey-2 { background-color: var(--grey-2); }
    .grey-3 { background-color: var(--grey-3); }
    .grey-4 { background-color: var(--grey-4); }
    .grey-5 { background-color: var(--grey-5); }
    .grey-6 { background-color: var(--grey-6); }
    .grey-7 { background-color: var(--grey-7); }
    .grey-8 { background-color: var(--grey-8); }
    .grey-9 { background-color: var(--grey-9); }

    .blue-1 { background-color: var(--blue-1); }
    .blue-2 { background-color: var(--blue-2); }
    .blue-3 { background-color: var(--blue-3); }
    .blue-4 { background-color: var(--blue-4); }
    .blue-5 { background-color: var(--blue-5); }
    .blue-6 { background-color: var(--blue-6); }
    .blue-7 { background-color: var(--blue-7); }
    .blue-8 { background-color: var(--blue-8); }
    .blue-9 { background-color: var(--blue-9); }

    .green-1 { background-color: var(--green-1); }
    .green-2 { background-color: var(--green-2); }
    .green-3 { background-color: var(--green-3); }
    .green-4 { background-color: var(--green-4); }
    .green-5 { background-color: var(--green-5); }
    .green-6 { background-color: var(--green-6); }
    .green-7 { background-color: var(--green-7); }
    .green-8 { background-color: var(--green-8); }
    .green-9 { background-color: var(--green-9); }

    .red-1 { background-color: var(--red-1); }
    .red-2 { background-color: var(--red-2); }
    .red-3 { background-color: var(--red-3); }
    .red-4 { background-color: var(--red-4); }
    .red-5 { background-color: var(--red-5); }
    .red-6 { background-color: var(--red-6); }
    .red-7 { background-color: var(--red-7); }
    .red-8 { background-color: var(--red-8); }
    .red-9 { background-color: var(--red-9); }

    .yellow-1 { background-color: var(--yellow-1); }
    .yellow-2 { background-color: var(--yellow-2); }
    .yellow-3 { background-color: var(--yellow-3); }
    .yellow-4 { background-color: var(--yellow-4); }
    .yellow-5 { background-color: var(--yellow-5); }
    .yellow-6 { background-color: var(--yellow-6); }
    .yellow-7 { background-color: var(--yellow-7); }
    .yellow-8 { background-color: var(--yellow-8); }
    .yellow-9 { background-color: var(--yellow-9); }
</style>