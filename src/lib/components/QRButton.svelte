<button aria-label="code" class="btn" on:click>
    <img src="/icons/qr-code.svg" alt="qr-code">
    <span>Get QR Code</span>
</button>

<style>
    .btn {
        display: flex;
        gap: .5rem;
        padding: 1rem;
        min-width: 10rem;
        width: max-content;
        border-radius: 5rem;
        justify-content: center;
        border: 1px solid transparent;
        background: var(--clr-primary-300);
    }
    .btn:hover {
        border-color: var(--clr-neutral-300);
    }
    .btn img {
        width: 1.5rem;
        transition: .3s ease-in;
    }
    .btn:hover img {
        transform: rotate(180deg);
    }
</style>