<script>
  import { fly } from 'svelte/transition';
  import { quintIn, quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let text, success;

  const exit = (e = true) => {
    e && dispatch('exit');
  };

  let r;
  $: l = -1 * r;
  const divOp = { duration: 500, easing: quintIn };
</script>

<svelte:window
  on:keypress="{e => exit(e.key === 'Enter')}"
  bind:innerWidth="{r}"
></svelte:window>

<div in:fly="{{...divOp, x: r}}" out:fly="{{...divOp, x: l}}" on:click="{exit}">
  <p class:success class:fail="{!success}" data-testid="thanksRunner">
    {text}
  </p>
</div>

<style>
  div {
    position: fixed;
    bottom: 35%;
    top: 35%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    padding: 2rem 3rem;
    font-size: 1.6rem;
    white-space: pre;
    text-align: center;
    line-height: 1.6;
  }
  p:before {
    display: inline-block;
    width: 3rem;
    position: relative;
  }
  .success:before {
    content: url('/svg/checkbox.svg');
    left: -0.4rem;
    bottom: -0.6rem;
  }
  .fail:before {
    content: url('/svg/nope.svg');
    left: -0.5rem;
    bottom: -3rem;
  }
  @media (max-width: 580px) {
    p {
      font-size: 1.2rem;
    }
    .fail:before {
      left: -0.1rem;
    }
  }
</style>
