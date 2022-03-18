<script>
  import Image from 'svelte-i-pack';
  export let text;
</script>
<div>
  <button class="back" tabindex="-1" aria-hidden="true">
    <slot></slot>
    <span>{ text }</span>
    <Image
      src="pc/2x/callout.button.png"
      width="98*2"
      alt=""
      class="btn-cto"
      no-inline
    ></Image>
  </button>
  <button class="front" tabindex="-1">
    <slot></slot>
    <span>{ text }</span>
    <Image
      src="pc/2x/callout.button.png"
      width="98*2"
      alt=""
      class="btn-cto"
      no-inline
    ></Image>
  </button>
  <Image
    src="pc/2x/line.button.png"
    width="142*2"
    alt=""
    class="btn-deco"
  ></Image>
</div>

<style>
  div {
    position: relative;
    perspective: 800px;
  }
  div:hover .front {
    transform: rotateX(180deg);
    box-shadow: none;
  }
  div:hover .back {
    transform: rotateX(0deg) translateX(-50%);
    box-shadow: 5px 5px 6px var(--shadow);
  }
  button {
    background-color: var(--wine);
    margin: 0 auto;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 0 1rem 0 2rem;
    cursor: pointer;
    backface-visibility: hidden;
    transition: transform 0.5s;
    outline: solid var(--hoveredCol, transparent) 3px;
    outline-offset: 10px;
  }
  .front {
    position: relative;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .back {
    position: absolute;
    top: 0;
    left: 50%;
    transform: rotateX(-180deg) translateX(-50%);
  }
  span {
    color: #fff;
    font-size: 1.88rem;
    font-weight: 700;
    padding: 1.23rem 0;
    white-space: nowrap;
  }
  :global(.btn-cto) {
    width: 98px;
    position: relative;
    top: -0.9rem;
  }
  .btn-deco {
    position: absolute;
    right: 13%;
    top: -34%;
    width: 142px;
  }

  @media (max-width: 1150px) {
    .btn-deco {
      right: 10%;
    }
  }
  @media (max-width: 1000px) {
    span {
      font-size: 1.7rem;
    }
    .btn-deco {
      right: 7%;
    }
  }
  @media (max-width: 890px) {
    span {
      font-size: 1.5rem;
      padding: 0;
    }
    :global(.btn-cto) {
      width: 85px;
    }
    .btn-deco {
      display: none;
    }
  }
  @media (max-width: 720px) {
    button {
      padding: 0 0.4rem 0px 1rem;
    }
    span {
      font-size: 1.3rem;
    }
    :global(.btn-cto) {
      width: 73px;
      top: -0.6rem;
    }
  }
  @media (max-width: 580px) {
    span {
      font-size: 1.2rem;
    }
    :global(.btn-cto) {
      top: -0.5rem;
    }
  }
  @media (max-width: 460px) {
    span {
      padding: 0.9rem 0;
    }
  }
</style>
