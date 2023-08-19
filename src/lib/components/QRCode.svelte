<script>
  import { Download, Share } from "lucide-svelte"
  let opaque = true
</script>

<div class="qr-sect" class:opaque>
    <span class="wrap">
        <img 
            src="/Logo.svg" 
            alt="code"
        >
    </span>

    <div class="opts">
        <button class="opt" title="Download">
            <Download />
        </button>
        <button class="opt" title="Share">
            <Share />
        </button>
    </div>
</div>

<style>
    .qr-sect {
        background: url("/icons/qr-code.svg") no-repeat center/20%;
        opacity: 30%;
        flex-grow: 1;
        min-height: 30rem;
        position: relative;
        border-radius: 1rem;
        border: 1px solid var(--clr-primary-100);
        
        padding: 1rem;
        display: grid;
        place-items: center;
    }
    .opaque {
        opacity: 100%;
        background: none;
    }
    .opts {
        display: flex;
        gap: 1rem;

        position: absolute;
        top: 5%;
        right: 5%;
    }
    .opts .opt {
        padding: 1rem;
        border-radius: 100%;
        background: var(--clr-primary-500);
        border: 1px solid var(--clr-primary-100);
    }
    .opts .opt:hover {
        border-color: var(--clr-neutral-100);
    }
</style>