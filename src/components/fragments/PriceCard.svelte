<script>
  import Image from 'svelte-i-pack'
  import Before from '../fragments/Before.svelte'

  export let card
</script>

<div class="card">
  <h2 class="name" class:crown="{card.crown}">
    {card.name}
  </h2>
  {#if card.campaign}
  <p class="campaign">キャンペーン中！</p>
  {/if}
  <h2 class="num">
    <Before>{card.before}</Before>
    {card.price}
  </h2>
  <p class="desc">{ card.description }</p>
  <hr />
  <dl>
    <dt>内訳</dt>
    {#each card.breakdown as item}
    <dd>
      <span class="b-title">{item.title}</span
      ><span class="b-price">{item.price}</span>
    </dd>
    {/each}
    <dt></dt>
  </dl>
  <Image
    src="pc/2x/spider.thread.price.png"
    width="1303*2"
    alt=""
    class="price-spider abs d-shadow"
    no-inline
  ></Image>
</div>

<style>
  .card {
    margin: 8rem 10% 0 auto;
    --pd: 2em;
    padding: var(--pd);
    position: relative;
    font-size: 1rem;
    width: 30.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 5px 5px 6px var(--shadow);
    cursor: default;
    z-index: 10;
    transition: transform 0.3s ease-in-out;
  }
  :global(.card + .card) {
    margin: 5rem 10% 0 auto;
  }
  .card:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    box-shadow: 6px 8px 8px var(--shadow);
    z-index: -1;
  }
  .card:hover {
    transform: translate3d(-3px, -5px, 0);
  }
  .card:hover:after {
    opacity: 1;
  }
  .campaign {
    position: absolute;
    top: -1rem;
    left: 0;
    padding: 0.375rem 0.75rem;
    background-color: var(--wine);
    color: #fff;
    font-size: 1.5em;
    font-weight: 700;
  }
  .name {
    font-size: 2em;
    position: absolute;
    top: 2.2rem;
    right: 103%;
    white-space: nowrap;
    text-shadow: 5px 5px 6px var(--shadow);
    letter-spacing: 3px;
  }
  @media (min-width: 1151px) {
    .crown:before {
      content: url('/svg/crown.svg');
      width: 1.5em;
      display: inline-block;
      position: relative;
      bottom: -3px;
      right: 7px;
      filter: drop-shadow(5px 5px 3px var(--shadow));
    }
  }
  .num {
    display: flex;
    align-items: center;
    font-size: 3.25em;
    line-height: 1;
  }
  .desc {
    font-size: 1.56em;
    padding: 1rem 0 1.5rem;
    line-height: 1.5;
    white-space: pre;
    letter-spacing: 1.2px;
  }

  hr {
    border: none;
    border-bottom: 1px solid var(--ocher);
    width: calc(100% + var(--pd) * 2);
    margin: 0 0 0 calc(-1 * (var(--pd)));
    margin-inline-start: 0;
  }
  dl {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 1.7rem 1rem 0 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1em;
  }
  dt {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    font-size: 1.25em;
  }
  dd {
    width: 100%;
    font-size: 1.16em;
    line-height: 1.4;
    display: flex;
    justify-content: space-between;
  }
  dd:not(:first-of-type) {
    margin-top: 0.7rem;
  }
  .b-title {
    letter-spacing: 1px;
  }
  :global(.price-spider) {
    top: 2.2rem;
    right: 95%;
    width: 1303px;
    transform: translateY(40%);
  }

  @media (min-width: 1600px) {
    .card {
      margin: 8rem auto 0 !important;
    }
  }
  @media (max-width: 1150px) {
    .card {
      --br: 3px;
      margin-right: 6% !important;
      padding-top: 1.75em;
      border-radius: var(--br);
    }
    :global(.card + .card) {
      margin-top: 6rem;
    }
    .name {
      text-shadow: none;
      color: #fff;
      padding: 0.2rem 0.8rem;
      top: -2rem;
      left: 0;
      right: 0;
      background-color: var(--wine);
      border-top-left-radius: var(--br);
      border-top-right-radius: var(--br);
    }
    .crown:after {
      content: url('/svg/crown.svg');
      width: 1.2em;
      display: inline-block;
      position: relative;
      bottom: -1px;
      left: 4px;
      filter: drop-shadow(5px 5px 3px var(--shadow));
    }
    .campaign {
      position: static;
      color: var(--wine);
      background-color: #fff;
      padding: 0;
      font-size: 1.1em;
      letter-spacing: 1px;
      align-self: flex-start;
      margin-left: 0.5rem;
      margin-bottom: -5px;
    }
  }
  @media (max-width: 890px) {
    .card {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 720px) {
    .card {
      font-size: 0.8rem;
    }
    .desc {
      padding-bottom: 0;
    }
    hr {
      display: none;
    }
    dl {
      display: none;
    }
    :global(.price-spider) {
      width: 1100px;
      top: 0.9rem;
    }
  }
  @media (max-width: 580px) {
    .card {
      margin-right: 0 !important;
      width: auto;
      max-width: 340px;
      align-items: flex-start;
      font-size: 0.7rem;
    }
    .name {
      top: -1.8rem;
    }
    .campaign {
      margin-left: 0.5rem;
    }
    .num {
      font-size: 3em;
      padding-left: 0.3rem;
    }
    .desc {
      font-size: 1.4em;
      padding-top: 0.8rem;
      padding-left: 1.2rem;
    }
    :global(.card + .card) {
      margin-top: 5rem;
    }
    :global(.price-spider) {
      width: 970px;
      top: 0.6rem;
    }
  }
  @media (max-width: 460px) {
    .card {
      max-width: 310px;
    }
    .num {
      font-size: 2.8em;
    }
    :global(.price-spider) {
      width: 750px;
      top: 1.2rem;
    }
  }
</style>
