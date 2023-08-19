<script lang="ts">
    import type { BlockType } from "../types"

    export let content: BlockType
    const { header, body, src } = content
</script>

<article class="block">
    <div class="head">
        <h3>{header}</h3>
        <div class="wrap">
            <img 
                src={src} 
                alt={header}
            >
        </div>
    </div>
    <p class="body">{body}</p>
</article>

<style>
    .block {
        padding: 1.5rem;
        border-radius: 1rem;
        background: var(--clr-primary-500);
        border: 1px solid var(--clr-primary-100);

        display: grid;
        gap: 1rem;
        align-items: center;
    }
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .head h3 {
        font-weight: 500;
        font-size: 1.2rem;
    }
    .wrap {
        padding: .7rem;
        border-radius: 100%;
        background: var(--clr-primary);
        border: 1px solid var(--clr-primary-100);
    }
    .wrap img {
        width: 1.5rem;
    }
    .block:hover {
        cursor: pointer;
        background: linear-gradient(45deg, var(--clr-primary-100), var(--clr-primary-500));
    }
    .block:hover .wrap {
        border-color: var(--clr-neutral-200);
    }
</style>