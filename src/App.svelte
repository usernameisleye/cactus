<script lang="ts">
  import { QRUrl, generateQR } from "./lib/utils"
  import { GitFork } from "lucide-svelte"
  import { cases, options } from "./lib/constants"
  import { Block, Footer, Navbar, QRButton, QrCode, SideBar } from "./lib/components"

  const getQR = async (e: CustomEvent) => {
    const url = await QRUrl(e.detail)
    return generateQR(url)
  }
</script>

<Navbar />
<main id="main-content">
    <header>
        <h1>Create and Share QR Codes Easily</h1>
        <p>Transform any data into a scannable QR code. Generate QR codes for websites, texts, emails, and more. Enhance your sharing experience effortlessly.</p>

        <div class="buttons">
            <a href="#qr-code">
                <QRButton />
            </a>
            <a href="https://github.com/usernameisleye/cactus" target="_blank" rel="noreferrer noopener">
                <button class="btn">
                    <GitFork />
                    <span>GitHub</span>
                </button>
            </a>
        </div>
    </header>

    <section id="use-cases" class="space">
        <h2 class="head">Use Cases</h2>
        <p class="sub-head">Explore the Versatility of QR Codes</p>

        <div class="grid">
            {#each cases as content (content.id)}
                <Block {content} />
            {/each}
        </div>
    </section>

    <section id="customization" class="space">
        <h2 class="head">Customization Options</h2>
        <p class="sub-head">Personalize your QR codes to make them stand out and match your need</p>

        <div class="grid">
            {#each options as content (content.id)}
                <Block {content} invert={true} />
            {/each}
        </div>
    </section>

    <section id="qr-code">
        <h2 class="head">Get QR Code</h2>
        <p class="sub-head">Generate your QR code here</p>

        <div class="generate">
            <SideBar on:generate={getQR} />
            <QrCode />
        </div>
    </section>

    <p class="ps">PS: "QR" in QR Code means Quick Response😉</p>
</main>
<Footer />


<style>
    :global(input, button, select) {
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
    .space {
        margin-block: 7rem;
    }
    main {
        padding-inline: 2rem;
    }
    header {
        margin-inline: auto;
        text-align: center;
        margin-top: 4rem;
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
        flex-wrap: wrap;
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

    .head,
    .sub-head {
        text-align: center;
    }
    .head {
        font-size: 2.5rem;
        margin-bottom: .7rem;
    }
    .grid {
        display: grid;
        gap: 1rem;
        margin-top: 2rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .generate {
        position: relative;
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
    }
    .ps {
        font-size: .9rem;
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        header {
            width: 100%;
        }
        header h1 {
            font-size: 2rem;
        }
        .grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .generate {
            flex-direction: column;
        }
    }
</style>