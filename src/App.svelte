<script lang="ts">
  import { GitFork } from "lucide-svelte"
  import { Navbar, QRButton } from "./lib/components"
</script>

<main id="main-content">
    <Navbar />
    <header>
        <h1>Create and Share QR Code Easily</h1>
        <p>Transform any data into a scannable QR code. Generate QR codes for websites, texts, emails, and more. Enhance your sharing experience effortlessly.</p>

        <div class="buttons">
            <QRButton />
            <a href="https://github.com/usernameisleye/cactus" target="_blank" rel="noreferrer noopener">
                <button class="btn">
                    <GitFork />
                    <span>GitHub</span>
                </button>
            </a>
        </div>
    </header>

    <section class="use-cases">
        <h2>Use Cases</h2>
        <p>Explore the Versatility of QR Codes</p>
    </section>
</main>

<style>
    :global(input, button) {
        border: none;
        outline: none;
        background: none;
    }
    :global(h1, h2, h3) {
        font-weight: 700;
        line-height: normal;

        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(to right, var(--clr-neutral), var(--clr-neutral-100));
    }
    :global(p) {
        color: var(--clr-neutral-200);
    }
    main {
        padding-inline: 2rem;
    }
    header {
        margin-bottom: 8rem;
        margin-top: 4rem;
        margin-inline: auto;
        text-align: center;
        width: 70%;
    }
    header h1 {
        font-size: 3.5rem;
        font-weight: 700;
    }
    header p {
        margin-block: 1.5rem;
    }
    .buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    .btn {
        display: flex;
        gap: .5rem;
        padding: 1rem;
        min-width: 10rem;
        border-radius: 5rem;
        justify-content: center;
        border: 1px solid transparent;
        background: var(--clr-primary-300);
    }
    .btn:hover {
        border-color: var(--clr-neutral-300);
    }

    .use-cases {
        text-align: center;
    }
    .use-cases h2 {
        font-size: 2.5rem;
        margin-bottom: .7rem;
    }
</style>