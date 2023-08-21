<script lang="ts">
  import { Download, Share, X } from "lucide-svelte"
  import { OptButton } from "."

  export let src: string = ""

  const downloadImage = (blob: Blob) => {
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "qr-code"
    link.click()

    return URL.revokeObjectURL(url)
  }

  // Download QR code function
  const downloadQR = (src: string) => {
    fetch(src)
    .then(res => res.blob())
    .then(blob => {
        downloadImage(blob)
    })
    .catch(error => {
        console.error(error.message)
    })
  }

   // Share QR code function
  const share = (src: string) => {
    const data = {
      src,
      title: "Here's the QR code",
      text: "Scan this QR code to access content"
    }

    navigator
    .share(data)
    .catch(error => {
        console.error(error.message)
    })
  }
</script>

<div class="qr-sect">
    <span class="wrap">
        {#if src !== ""}  
            <img 
                src={src} 
                alt="code"
            >
        {:else}
            <div class="overlay" />
        {/if}
    </span>

    <OptButton target="close" disabled={src == ""} title="Close" click={() => src = ""}>
        <X />
    </OptButton>
    <div class="opts">
        <OptButton disabled={src == ""} title="Download" click={() => downloadQR(src)}>
            <Download />
        </OptButton>
        <OptButton disabled={src == ""} title="Share" click={() => share(src)}>
            <Share />
        </OptButton>
    </div>
</div>

<style>
    .qr-sect {
        flex-grow: 1;
        min-height: 30rem;
        position: relative;
        border-radius: 1rem;
        border: 1px solid var(--clr-primary-100);
        
        padding: 1rem;
        display: grid;
        place-items: center;
    }
    .overlay {
        position: absolute;
        inset: 0;
        opacity: 20%;
        background: url("/Logo.svg") no-repeat center/60%;
    }
    .opts {
        display: flex;
        gap: 1rem;

        position: absolute;
        top: 5%;
        right: 5%;
    }
</style>