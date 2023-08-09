<script lang="ts">
    import { Smile, Frown, Angry, Meh, Annoyed, Ban } from "lucide-svelte"

    export let type: string

    let warn: boolean
    let info: boolean
    let wait: boolean
    let error: boolean
    let success: boolean

    switch (type) {
        case "error":
            error = true
            break
        case "warn":
            warn = true
            break
        case "info":
            info = true
            break
        case "wait":
            wait = true
            break
        case "success":
            success = true
            break
        default:
            break
    }   
</script>

<button 
    class="button" 
    class:warn
    class:info
    class:wait
    class:error
    class:success
>
    {#if success}
        <Smile />
    {:else if error}
        <Frown />
    {:else if warn}
        <Angry />
    {:else if info}
        <Meh />
    {:else if wait}
        <Annoyed />
    {:else}
        <Ban />
    {/if}
</button>

<style>
    .button {
        padding: 1rem;
        border-radius: 100%;
        border: 1px solid transparent;

        color: var(--clr-text);
        background: var(--clr-main-dim);
        transition: .25s ease-in-out;
    }
    .button:hover {
        transform: translateY(-.5rem);
    }

    /* Generics */
    .success {
        color: var(--clr-success);
        border-color: var(--clr-success);
        background: var(--clr-success-dim);
    }
    .error {
        color: var(--clr-error);
        border-color: var(--clr-error);
        background: var(--clr-error-dim);
    }
    .warn {
        color: var(--clr-warning);
        border-color: var(--clr-warning);
        background: var(--clr-warning-dim);
    }
    .info {
        color: var(--clr-info);
        border-color: var(--clr-info);
        background: var(--clr-info-dim);
    }
    .wait {
        color: var(--clr-pending);
        border-color: var(--clr-pending);
        background: var(--clr-pending-dim);
    }
</style>