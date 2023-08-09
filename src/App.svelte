<script lang="ts">
    import { Button, Guides, Theme } from "./lib"
    import { Info, MailQuestion } from "lucide-svelte"

    let email: string
    const types = ["success", "error", "wait", "info", "warn"]
</script>

<main id="main-content">
    <Theme />
    <div class="toasts"></div>

    <section class="body">
        <div class="btns">
            {#each types as type, i}  
                <Button {type} />
            {/each}
        </div>

        <div class="tests">
            <h2>Use Case</h2>

            <div class="input">
                <input 
                    type="email"
                    class="shared"
                    bind:value={email}
                    placeholder="Input test mail"
                >
                <button class="add-mail shared">
                    <MailQuestion />
                </button>
                <button class="add-mail shared">
                    <Info />
                </button>
            </div>

            <Guides />
        </div>
    </section>
</main>

<style>
    :global(input, button) {
        border: none;
        outline: none;
        background: none;
    }
    main {
        display: flex;
        min-height: 100svh;
        align-items: center;
        justify-content: center;
    }
    .btns {
        display: flex;
        gap: 3rem;
        margin-bottom: 2rem;
    }
    .input {
        --radius: .5rem;
        --padding: .75rem 1rem;
        --background: rgb(251, 152, 82);
        --background-dim: rgb(251, 152, 82, .3);

        display: flex;
        gap: .5rem;
        width: 100%;
        align-items: center;
    }
    .shared {
        color: var(--clr-text);
        padding: var(--padding);
        border-radius: var(--radius);
    }
    .input input {
        flex-grow: 1;
        margin-block: .5rem;
        border: 1px solid transparent;
        background: var(--clr-main-dim);
    }
    .input input:focus-within {
        border-color: var(--background);
    }
    .input button {
        background: var(--background-dim);
        border: 1px solid var(--background);
    }
    .input button:hover {
        background: var(--background);
    }
    .tests h2 {
        font-size: 1.5rem;
        text-decoration: underline;
    }
</style>