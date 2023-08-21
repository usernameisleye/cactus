<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import { QRButton, Size } from "."

    const options: string[] = ["png", "jpg", "jpeg", "eps", "svg"]   
    const sizes: string[] = ["100 x 100", "150 x 150", "200 x 200", "250 x 250", "300 x 300", "400 x 400"] 
    let actv = 0 

    let size: string
    let data: string
    let format: string
    let bg = "#FFFFFF"
    let fore = "#000000"

    const select = (indx: number, sz: string) => {
        actv = indx
        size = sz
    }

    const dispatch = createEventDispatcher()
    const generate = () => {
        if(data === undefined || format === "") return
        if(size === undefined) size = "100 x 100"
        bg = bg.substring(1)
        fore = fore.substring(1)

        const all = { data, format, bg, fore, size }
        dispatch("generate", all)

        actv = 0
        data = ""
        format = ""
        bg = "#FFFFFF"
        fore = "#000000"
    }
</script>

<div class="side-bar">
    <label for="data">Enter Data</label>
    <input 
        id="data" 
        type="text"
        bind:value={data}
        placeholder="Enter data to encode in the QR code🔥"
    >

    <label for="fore">Pattern Color</label>
    <input id="fore" type="color" bind:value={fore}>

    <label for="bg">Background Color</label>
    <input id="bg" type="color" bind:value={bg}>

    <p>Size(in px)</p>
    <div class="sizes">
        {#each sizes as size, indx}
            <Size {indx} {actv} {size} on:click={() => select(indx, size)}/>
        {/each}
    </div>

    <label for="format">Image Format</label>
    <span class="select">
        <select id="format" bind:value={format}>
            <option value="" selected disabled>Select QR image format</option>
            {#each options as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
    </span>

    <div class="submit">
        <QRButton on:click={generate} />
    </div>
</div>

<style>
    .side-bar {
        display: grid;
        gap: 1rem;
        width: 35%;
        padding: 2rem;
        border-radius: 1rem;
        background: var(--clr-primary-500);
        border: 1px solid var(--clr-primary-100);
    }
    input[type="text"] {
        padding: 1rem;
        border-radius: .5rem;
        width: 100%;
        color: var(--clr-neutral);
        border: 1px solid transparent;
        background: var(--clr-primary-100);
    }
    input[type="color"] {
        width: 100%;
        height: 3rem;
    }
    .sizes {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    select {
        width: 100%;
        padding: 1rem;
        border-radius: .5rem;
        color: var(--clr-neutral-100);
        border: 1px solid transparent;
        background: var(--clr-primary-100);

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    .select {
        position: relative;
    }
    .select::after {
        content: "";
        background: url("/icons/down.svg") no-repeat right center var(--clr-primary-100);
        background-size: contain;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        right: 3%;
        top: 50%;
        transform: translateY(-50%);
    }
    .submit {
        margin-top: 1rem;
    }

    input[type="text"]:focus-within,
    select:focus-within {
        border-color: var(--clr-neutral-300);
    }
    input[type="color"],
    select {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .side-bar {
            width: 100%;
        }
    }
</style>