<script lang="ts">
  import { QRButton } from "."
</script>
<nav>
    <img 
        src="/Logo.svg" 
        alt="Logo"
    >

    <ul role="list">
        <li>
            <a href="#use-cases" class="link">
                Use cases
            </a>
        </li>
        <li>
            <a href="#customization" class="link">
                Customization
            </a>
        </li>
        <li>
            <a href="#qr-code">
                <QRButton />
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
    }
    nav img {
        width: 8rem;
        user-select: none;
    }
    nav ul {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    nav .link {
        position: relative;
        color: var(--clr-neutral-300);
    }
    nav .link::after {
        content: "";
        position: absolute;
        width: 0;
        left: 0;
        bottom: 0;
        height: 1px;
        transition: .25s ease-in-out;
        background: var(--clr-neutral-300);
    }
    nav .link:hover::after {
        width: 100%;
    }
    @media (max-width: 768px) {
        .link {
            display: none;
        }
    }
</style>