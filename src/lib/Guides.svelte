<script lang="ts">
  import { Info } from "lucide-svelte"
</script>

<ul class="guides">
    <li>
        Submit email to get <span class="success">success</span> toast
    </li>
    <li>
        Submit !email to get <span class="error">error</span> toast
    </li>
    <li>
        Click <Info size={20} /> to get <span class="info">info</span> toast
    </li>
    <li>
        Double click to get <span class="pending">pending</span> toast
    </li>
    <li>
        Submit short mail (e.g a@mail.com) to get <span class="warning">warning</span> toast
    </li>
</ul>

<style>
    .guides {
        display: grid;
        gap: .5rem;
        user-select: none;
        color: var(--clr-main-dim);
    }
    .guides li {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    .guides li span {
        text-decoration: underline;
    }
    /* Generics */
    .success {
        color: var(--clr-success);
    }
    .error {
        color: var(--clr-error);
    }
    .info {
        color: var(--clr-info);
    }
    .pending {
        color: var(--clr-pending);
    }
    .warning {
        color: var(--clr-warning);
    }
</style>