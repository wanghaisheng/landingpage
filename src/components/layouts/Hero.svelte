<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import { fly } from 'svelte/transition'
  import Image from 'svelte-i-pack'
  import Wine from '../materials/Wine.svelte'
  import DownArrow from '../materials/DownArrow.svelte'
  import spiders from '../../data/heroSpiders.js'

  const dispatch = createEventDispatcher()

  let loaded,
    hero,
    leftBox,
    leafBox,
    rightTitle,
    spiderBox,
    pour = false,
    slideLeft = false,
    slideDown = false

  const backEase = t => {
    const s = 0.85
    return --t * t * ((s + 1) * t + s) + 1
  }

  const getRdmNo = num => Math.ceil(Math.random() * num)

  const done = () => {
    leftBox.style.willChange = 'auto'
    leafBox.style.willChange = 'auto'
    rightTitle.style.willChange = 'auto'
    spiderBox.style.willChange = 'auto'
    dispatch('done')
  }

  if (!process.browser) {
    loaded = true
    slideLeft = true
    slideDown = true
  }
  onMount(() => {
    hero.style.opacity = 1
    loaded = true
  })
</script>

<header
  id="hero"
  tabindex="-1"
  bind:this="{hero}"
  on:load="{() => loaded = true}"
>
  {#if loaded }
  <div
    class="left-box"
    in:fly="{{ y: -1000, opacity: 1, duration: 400, easing: backEase }}"
    on:introend="{() => pour = true}"
    bind:this="{leftBox}"
    class:to-place="{slideLeft}"
  >
    <div class="wine-box">
      <Wine {pour} on:poured="{() => slideLeft = true}"></Wine>
      {#if slideDown}
      <div
        class="leaf-box"
        in:fly="{{y: -700, opacity: 1, duration: 600, easing: backEase}}"
        on:introend="{done}"
        bind:this="{leafBox}"
      >
        <Image
          src="pc/2x/leaf3.png"
          width="501*2"
          sizes="160px"
          alt=""
          class="hero-leaf"
          no-inline
        ></Image>
      </div>
      {/if}
      <h2 class="left-title">WEBサイト制作<br />承ります</h2>
    </div>
  </div>
  {/if}
  <div class="right-box">
    {#if slideLeft}
    <h2
      class="right-title"
      in:fly="{{x: 1000, opacity: 1, duration: 800, easing: backEase}}"
      on:introend="{() => slideDown = true}"
      bind:this="{rightTitle}"
    >
      個人だからこそできる<span class="strong"
        >あなたにぴったりの<br />WEBサイトを！</span
      >
    </h2>
    {/if}
    <div class="spider-container">
      {#if slideDown} {#each spiders as spider (spider.text)}
      <div
        class="spider-box skr"
        transition:fly="{{y: -900, opacity: 1, duration: 600, delay: getRdmNo(400), easing: backEase}}"
        bind:this="{spiderBox}"
      >
        <p class="spider-text">{spider.text}</p>
        <Image
          src="pc/2x/spider.thread.top.png"
          width="54*2"
          class="hero-spider"
          alt=""
          no-inline
        ></Image>
      </div>
      {/each}{/if}
    </div>
  </div>
  <DownArrow></DownArrow>
</header>

<style>
  header {
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 10;
    min-height: 780px;
    height: 100vh;
    width: 100%;
    box-shadow: 0 5px 6px var(--shadow);
    opacity: 0;
  }
  header:focus {
    outline: none;
  }
  .left-box {
    width: 40%;
    transition: transform 0.9s;
    transform: translate3d(calc(50% + 80px), 0, 0);
    will-change: transform;
  }
  .to-place {
    transform: translate3d(0, 0, 0);
  }
  .wine-box {
    max-width: 400px;
    margin-left: auto;
    position: relative;
    padding-bottom: 1rem;
  }
  h2 {
    font-family: var(--noto);
  }
  .leaf-box {
    top: 8%;
    left: 19%;
    transform: rotate(22deg);
    position: absolute;
    will-change: transform;
  }
  :global(.hero-leaf) {
    width: 160px;
  }
  .left-title {
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    color: white;
    font-size: 2.5rem;
    font-weight: 900;
    white-space: nowrap;
    text-align: center;
  }
  .right-box {
    padding-bottom: 5rem;
    width: 58%;
    max-width: 830px;
    min-width: 740px;
    margin-left: 2.3rem;
  }
  .right-title {
    color: var(--wine);
    font-size: 1.875rem;
    line-height: 1.4;
    padding-left: 5rem;
    position: relative;
    z-index: 10;
    will-change: transform;
  }
  .strong {
    display: block;
    font-size: 3.75rem;
    margin-top: 0.6rem;
  }

  .spider-container {
    display: flex;
    flex-wrap: wrap;
    height: 13.8rem;
    margin-top: 5rem;
    position: relative;
    z-index: 0;
  }
  .spider-box {
    position: relative;
    background-color: #d6c66e;
    width: 19rem;
    height: 4.8rem;
    margin-right: 1.7rem;
    margin-bottom: 2.1rem;
    text-align: center;
    box-shadow: 4px 4px 7px var(--shadow);
    z-index: 10;
    will-change: transform;
  }
  .spider-box:nth-child(3) {
    margin-left: 4rem;
  }
  .spider-box:last-child,
  .spider-box:nth-child(3) {
    z-index: 0;
    box-shadow: 3px 3px 6px var(--shadow);
  }
  .spider-text {
    font-size: 1.875rem;
    margin: 0;
    line-height: 5rem;
  }
  :global(.hero-spider) {
    position: absolute;
    bottom: 72%;
    left: 50%;
    width: 54px;
    transform: translateX(-50%);
    z-index: 1;
    transition: transform 0.4s;
  }
  :global(.skr:hover .hero-spider) {
    transform: translateX(-134%) skew(4deg);
  }

  @media (max-width: 1150px) {
    .right-box {
      margin-left: 0;
      min-width: 640px;
    }
    .strong {
      font-size: 3.25rem;
    }
    .spider-box {
      width: 16rem;
      margin-right: 1.4rem;
    }
    .spider-text {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 1000px) {
    .left-box {
      width: 60%;
      margin-left: -2rem;
    }
    .right-box {
      min-width: 570px;
    }
    .right-title {
      font-size: 1.7rem;
    }
    .strong {
      font-size: 2.9rem;
    }
    .spider-container {
      margin-left: -7vw;
    }
  }
  @media (max-width: 890px) {
    header {
      align-items: flex-start;
      min-height: auto;
      height: auto;
      padding-top: 24rem;
    }
    .left-box {
      width: auto;
      margin-left: 1.5rem;
    }
    .wine-box {
      padding-bottom: 0.5rem;
      margin: 0;
    }
    :global(.hero-leaf) {
      width: 140px;
    }
    .right-box {
      max-width: auto;
      min-width: auto;
      width: auto;
      flex: 1 1 auto;
      padding: 0;
    }
    .right-title {
      position: absolute;
      top: 8rem;
      left: 0;
      right: 0;
      text-align: center;
      padding: 0;
    }
    .spider-container {
      display: block;
      margin: 120px 0;
    }
    .spider-box {
      margin-bottom: 2.5rem;
    }
    .spider-box:nth-child(1) {
      margin-left: 9%;
      margin-right: auto;
      z-index: 3;
    }
    .spider-box:nth-child(2) {
      margin-right: 4%;
      margin-left: auto;
      z-index: 2;
    }
    .spider-box:nth-child(3) {
      margin-right: auto;
      margin-left: -4%;
      z-index: 1;
    }
    .spider-box:nth-child(4) {
      margin-right: 18%;
      margin-left: auto;
      z-index: 0;
    }
  }
  @media (max-width: 720px) {
    header {
      padding-top: 19rem;
    }
    .left-box {
      margin-left: -2rem;
    }
    .right-box {
      margin-left: -2rem;
    }
    .right-title {
      font-size: 1.7rem;
    }
    .strong {
      font-size: 2.7rem;
    }
    .spider-box {
      width: 14rem;
      height: 3.6rem;
    }
    .spider-text {
      font-size: 1.5rem;
      line-height: 3.8rem;
    }
    :global(.hero-spider) {
      width: 38px;
    }
  }
  @media (max-width: 580px) {
    .left-title {
      font-size: 1.75rem;
      text-align-last: left;
      line-height: 1.4;
      margin-left: 0.2rem;
    }
    .right-title {
      font-size: 1.25rem;
    }
    .strong {
      font-size: 2.5rem;
    }
    .left-box {
      margin-left: -2.4rem;
    }
    .wine-box {
      padding-bottom: 0.2rem;
    }
    :global(.hero-leaf) {
      width: 120px;
    }
    .spider-container {
      margin: 115px 0 0;
    }
    .spider-box {
      width: 10.9rem;
      height: 2.75rem;
      margin-bottom: 2.3rem;
    }
    .spider-text {
      font-size: 1.19rem;
      line-height: 2.7rem;
    }
    @media (max-width: 460px) {
      header {
        padding-top: 14rem;
      }
      .right-title {
        font-size: 1.2rem;
        top: 70px;
      }
      .strong {
        font-size: 2rem;
      }
      .left-title {
        font-size: 1.4rem;
        top: 29%;
      }
      :global(.hero-leaf) {
        width: 90px;
      }
      .spider-container {
        margin: 70px 0 0 -10px;
      }
    }
  }
</style>
