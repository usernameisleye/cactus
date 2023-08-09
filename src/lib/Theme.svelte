<script lang="ts">
    import { onMount } from "svelte"
    import { Zap, ZapOff } from "lucide-svelte"

    let theme: string
    let currentTheme: string
    let userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

    const setTheme = (t: string) => document.documentElement.setAttribute("data-theme", t)

    onMount(() => {
        userTheme ? theme = "dark" : theme = "light"
        setTheme(theme)
    })
    
    const toggle = () => {
        currentTheme = document.documentElement.getAttribute("data-theme")
        theme = currentTheme === "dark" ? "light" : "dark"
        setTheme(theme)
    }
</script>

<button 
    class="theme"
    on:click={toggle}
    id="toggle-theme"
    aria-label="toggle"
    title="Phasing..."
>
    {#if theme === "dark"}
        <Zap class="zap" />
    {:else}
        <ZapOff />
    {/if}
</button>

<style>
    .theme {
        position: fixed;
        top: 2rem;
        left: 2rem;

        padding: 1rem;
        border-radius: 100%;
        color: var(--clr-warning);
        background: var(--clr-main-dim);
        border: 1px solid var(--clr-warning);
    }
    
    .theme:hover {
        animation: phase 0.3s infinite;
    }

    @keyframes phase {
        0%, 100% {
            transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-4px);
        }
        20%, 40%, 60%, 80% {
            transform: translateX(4px);
        }
    }
</style>