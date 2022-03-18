<script>
  import Image from 'svelte-i-pack'
  export let text,
    id = '',
    disabled = false,
    loading = false

  let d = '0.2s'
  $: loading ? (d = '0.4s') : setTimeout(() => (d = '0.2s'), 400)
</script>
<div>
  {#if loading} {#await import('../materials/Loader.svelte') then c}
  <svelte:component this="{c.default}"></svelte:component>
  {/await} {/if}
  <button
    class="front"
    type="submit"
    {disabled}
    {id}
    style="--d: {d}"
    class:loading
  >
    <span>{ text }</span>
    <Image
      src="pc/2x/callout.button.png"
      width="98*2"
      alt=""
      class="btn-cto"
    ></Image>
  </button>
</div>

<style>
  button {
    background-color: var(--wine);
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 0 1rem 0 2rem;
    cursor: pointer;
    transform-origin: center;
    transition: transform var(--d);
    box-shadow: 5px 5px 6px var(--shadow);
  }
  button:focus,
  button:hover {
    outline: none;
    transform: scale(1.05);
  }
  .loading {
    transform: perspective(800px) rotateX(90deg) !important;
    box-shadow: none;
  }
  span {
    color: #fff;
    font-size: 1.88rem;
    font-weight: 700;
    padding: 1.23rem 0;
  }
  [disabled] {
    background-color: #968b88;
    cursor: initial;
  }
  [disabled]:hover {
    transform: none;
  }

  @media (max-width: 1000px) {
    span {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 890px) {
    button {
      padding: 0 1.4rem 0 3.2rem;
    }
    span {
      padding: 0.9rem 0;
    }
  }
  @media (max-width: 720px) {
    button {
      padding: 0 0.8rem 0 2.5rem;
    }
  }
  @media (max-width: 580px) {
    span {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
  }
  @media (max-width: 460px) {
    span {
      font-size: 1.4rem;
      padding: 0.6rem 0;
    }
  }
</style>
