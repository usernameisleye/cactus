<script>
  import QrButton from "./QRButton.svelte"
</script>
<nav>
    <img 
        src="/Logo.svg" 
        alt="Logo"
    >

    <ul role="list">
        <li>
            <a href=" ">
                Features
            </a>
        </li>
        <li>
            <QrButton />
        </li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding-block: 2rem;
    }
    nav img {
        width: 8rem;
        user-select: none;
    }
    nav ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    nav a {
        position: relative;
        color: var(--clr-neutral-300);
    }
    nav a::after {
        content: "";
        position: absolute;
        width: 0;
        left: 0;
        bottom: 0;
        height: 1px;
        transition: .25s ease-in-out;
        background: var(--clr-neutral-300);
    }
    nav a:hover::after {
        width: 100%;
    }
</style>