<script lang="ts">
    export let title: string
    export let disabled: boolean
    export let click: () => void
    export let target: string = ""
</script>

<button class="opt {target}" {title} {disabled} on:click={click}>
    <slot></slot>
</button>

<style>
    .opt {
        padding: 1rem;
        border-radius: 100%;
        background: var(--clr-primary-500);
        border: 1px solid var(--clr-primary-100);
    }
    .opt:hover {
        border-color: var(--clr-neutral-100);
    }
    .opt:disabled {
        pointer-events: none;
    }
    .close {
        position: absolute;
        top: 5%;
        left: 5%;
    }
</style>