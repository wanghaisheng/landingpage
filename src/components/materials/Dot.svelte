<script>
  import { onMount } from 'svelte'
  export let color = '#842612',
    sentence,
    tall = false,
    mid = false,
    bold = false
</script>

{#each sentence as text}
<span style="--color: {color};" class:bold class:tall class:mid>{text}</span>
{/each}

<style>
  span {
    position: relative;
    --top: -3px;
  }
  .bold {
    font-weight: 700;
  }
  .tall {
    --top: -8px;
  }
  .mid {
    --top: -5px;
  }
  span:after {
    content: '・';
    color: var(--color);
    font-size: 2.2rem;
    position: absolute;
    top: var(--top);
    width: 100%;
    left: 0;
    line-height: 0;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 720px) {
    span:after {
      font-size: 2rem;
    }
  }
  @media (max-width: 580px) {
    .mid {
      --top: -4px;
    }
    .tall {
      --top: -5px;
    }
    span:after {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 460px) {
    span {
      --top: -2px;
    }
    span:after {
      font-size: 1.3rem;
    }
  }
</style>
