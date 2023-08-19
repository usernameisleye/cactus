<script lang="ts">
    export let size: string = ""
    export let actv: number = 0
    export let indx: number = 0
</script>

<button id="" title={size} value={size} on:click class={actv === indx && "actv"}>
    {size}
</button>

<style>
    button {
        padding: .5rem 1rem;
        border-radius: .4rem;
        background: var(--clr-primary);
        border: 1px solid var(--clr-primary-100);
    }
    button:hover {
        background: var(--clr-primary-300);
    }
    .actv {
        border-color: var(--clr-neutral);
    }
</style>