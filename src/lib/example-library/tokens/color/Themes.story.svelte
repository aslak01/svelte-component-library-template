<script lang="ts">
    import type { Hst } from '@histoire/plugin-svelte'
    export let Hst: Hst
</script>

<Hst.Story
    title="Example Library/Design tokens/Themes"
    layout={{ type: 'grid', width: '100%' }}
>
    <Hst.Variant title="Default theme">
        <section class="theme-default">
            <div class="colors">
                <div class="color primary"></div>
                <div class="color neutral"></div>
                <div class="color accent"></div>
            </div>
            <div class="example">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum distinctio accusantium, possimus dolores vitae ipsa impedit quaerat. Earum, sit?</p>
                <label>
                    Checkbox
                    <input type="checkbox" checked>
                </label>
                <button>Submit</button>
            </div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Danger theme">
        <section class="theme-danger">
            <div class="colors">
                <div class="color primary"></div>
                <div class="color neutral"></div>
                <div class="color accent"></div>
            </div>
            <div class="example">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum distinctio accusantium, possimus dolores vitae ipsa impedit quaerat. Earum, sit?</p>
                <label>
                    Checkbox
                    <input type="checkbox" checked>
                </label>
                <button>Submit</button>
            </div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Success theme">
        <section class="theme-success">
            <div class="colors">
                <div class="color primary"></div>
                <div class="color neutral"></div>
                <div class="color accent"></div>
            </div>
            <div class="example">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum distinctio accusantium, possimus dolores vitae ipsa impedit quaerat. Earum, sit?</p>
                <label>
                    Checkbox
                    <input type="checkbox" checked>
                </label>
                <button>Submit</button>
            </div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Info theme">
        <section class="theme-info">
            <div class="colors">
                <div class="color primary"></div>
                <div class="color neutral"></div>
                <div class="color accent"></div>
            </div>
            <div class="example">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum distinctio accusantium, possimus dolores vitae ipsa impedit quaerat. Earum, sit?</p>
                <label>
                    Checkbox
                    <input type="checkbox" checked>
                </label>
                <button>Submit</button>
            </div>
        </section>
    </Hst.Variant>
    <Hst.Variant title="Warning theme">
        <section class="theme-warning">
            <div class="colors">
                <div class="color primary"></div>
                <div class="color neutral"></div>
                <div class="color accent"></div>
            </div>
            <div class="example">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum distinctio accusantium, possimus dolores vitae ipsa impedit quaerat. Earum, sit?</p>
                <label>
                    Checkbox
                    <input type="checkbox" checked>
                </label>
                <button>Submit</button>
            </div>
        </section>
    </Hst.Variant>
</Hst.Story>



<style>
    @import 'Themes.css';

    section {
        background-color: transparent;
        display: flex;
        gap: 1rem;
    }

    .colors {
        display: grid;
        gap: 1rem;
    }

    .example {
        display: grid;
        place-items: start;
        padding: 2rem;
        background-color: var(--color-neutral);
        color: var(--color-primary);
        accent-color: var(--color-accent);
        border-radius: 0.25rem;
        border: 0.125rem solid var(--color-accent);
    }

    .color {
        width: 100px;
        height: 100px;
        border-radius: 0.25rem;
        display: grid;
        place-items: center;
    }
    .primary { background-color: var(--color-primary); }
    .neutral { background-color: var(--color-neutral); }
    .accent { background-color: var(--color-accent); }
</style>