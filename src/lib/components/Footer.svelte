<footer>
    <img 
        src="/Logo.svg" 
        alt="Logo"
    >

    <span>Copyright © {new Date().getFullYear()} Cactus. All rights reserved.</span>
</footer>

<style>
    footer {
        width: 95%;
        padding: 2rem;
        margin-top: 7rem;
        margin-inline: auto;
        border-top: 1px solid var(--clr-primary-100);

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    footer img {
        width: 8rem;
        user-select: none;
    }
</style>