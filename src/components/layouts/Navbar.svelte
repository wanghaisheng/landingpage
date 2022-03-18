<script>
  import { slide } from 'svelte/transition';
  import Image from 'svelte-i-pack';
  import Hamburger from '../materials/Hamburger.svelte';

  export let inView, showNav, scroller;

  const list = [
    {
      id: 'features',
      name: '特徴',
    },
    {
      id: 'comparison',
      name: '大手サービスとの比較',
    },
    {
      id: 'flow',
      name: '納品までの流れ',
    },
    {
      id: 'price',
      name: 'お値段',
    },
    {
      id: 'qa',
      name: 'よくある質問',
    },
  ];
  let nav,
    expanded = false;

  const jumpToHash = id => () => {
    const target = document.getElementById(id);
    const offset = parseInt(window.getComputedStyle(nav).height) + 10;
    scroller({ target, offset, cb: target.focus({ preventScroll: true }) });
  };
</script>

<svelte:body on:click="{() => expanded = false}"></svelte:body>

{#if showNav}
<nav
  class:noshadow="{expanded}"
  in:slide="{{delay: 300}}"
  bind:this="{nav}"
  id="nav"
>
  <div class="wrap">
    <a href="#hero" on:click|preventDefault="{jumpToHash('hero')}">
      <h1 class="skl">OliAncho</h1></a
    >
    <div class="sp-menu">
      <a
        href="#contact"
        data-testid="navContactS"
        on:click|preventDefault="{jumpToHash('contact')}"
        ><Image
          src="sp/3x/mail.png"
          width="60*3"
          alt="Contact us"
          class="nav-sp-mail skl"
        ></Image
      ></a>
      <Hamburger {expanded} on:click="{() => expanded = !expanded}"></Hamburger>
    </div>
  </div>
  <div class="sp-list" class:expanded>
    <ul class="ul-main">
      {#each list as item}
      <li class="li-main">
        <a
          href="#{item.id}"
          class="nav-link"
          on:click|preventDefault="{jumpToHash(item.id)}"
          ><span class="back">{item.name}</span
          ><span class="front">{item.name}</span>
          <span class="underbar" class:active="{inView === item.id}"></span>
        </a>
      </li>
      {/each}
    </ul>
    <ul class="ul-sp">
      <li class="li-sp">
        <a
          href="https://www.instagram.com/oliancho/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="sp/3x/instagram.menu.png"
            class="nav-sp-link d-shadow skl"
            alt="Instagramへ"
          ></Image>
        </a>
      </li>
      <li class="li-sp">
        <a
          href="https://oliancho.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="sp/3x/portfolio.menu.png"
            class="nav-sp-link d-shadow skl"
            alt="ポートフォリオへ"
          ></Image>
        </a>
      </li>
      <!-- <li>
        <a
          href="https://www.youtube.com/channel/UCzTW_KyoA5BrI53ikFUdMGA"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="sp/3x/youtube.menu.png"
            class="nav-sp-link d-shadow"
            alt="Youtubeチャンネルへ"
          ></Image>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/DOKs62"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="sp/3x/twitter.menu.png"
            class="nav-sp-link d-shadow"
            alt="Twitterへ"
          ></Image>
        </a>
      </li> -->
    </ul>
  </div>
  <a
    href="#contact"
    class="contact-link skl"
    data-testid="navContactL"
    on:click|preventDefault="{jumpToHash('contact')}"
  >
    <Image
      src="pc/2x/callout.header.png"
      width="83*2"
      alt="FREE"
      class="nav-callout"
      style="width: 83px;"
    ></Image>
    <Image
      src="pc/2x/mail.png"
      width="62*2"
      alt="ご依頼・ご相談"
      style="width: 62px;"
      class:contact="{inView === 'contact'}"
    ></Image>
  </a>
</nav>
{/if}

<style>
  nav {
    height: 3.625rem;
    background-color: rgba(130, 38, 18, 0.9);
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 5px 6px var(--shadow);
    z-index: 100;
    transition: transform 0.3s;
  }
  a {
    color: white;
    font-weight: 600;
  }
  h1 {
    font-family: var(--times);
    font-size: 2.6rem;
    margin-left: 1.5rem;
  }
  .sp-list {
    height: 100%;
    margin-top: var(--h);
  }
  ul {
    padding: 0;
  }
  .ul-main {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0.3rem 0 0 4%;
  }
  .li-main {
    height: 100%;
    margin-right: 3%;
    white-space: nowrap;
  }
  .nav-link {
    position: relative;
    font-size: 1.125rem;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    perspective: 100rem;
  }
  .nav-link:hover .front {
    transform: rotateX(180deg);
  }
  .nav-link:hover .back {
    transform: translate(-50%, -50%) rotateX(0deg);
  }
  span {
    backface-visibility: hidden;
    transition: transform 0.6s;
  }
  .back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(-180deg);
  }
  .underbar {
    height: 2px;
    background-color: currentColor;
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  .active {
    transform: scaleX(1);
  }
  .contact {
    filter: drop-shadow(0 0 5px white);
  }
  .contact-link {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 1.5rem;
  }
  :global(.nav-callout) {
    margin-right: 0.5rem;
    margin-top: 1.25rem;
  }
  .nav-sp-mail {
    display: block;
    height: 39px;
  }
  .sp-menu {
    display: none;
  }
  .ul-sp {
    display: none;
  }

  @media (max-width: 1160px) {
    h1 {
      font-size: 2.2rem;
      margin-left: 1rem;
    }
    .li-main {
      margin: 0;
    }
    .ul-main {
      margin-left: 2%;
    }
    .nav-link {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 1.9rem;
    }
    .nav-link {
      padding: 0 0.8rem;
    }
    :global(.nav-callout) {
      display: none;
    }
  }

  @media (max-width: 890px) {
    nav {
      --h: 3.75rem;
      flex-direction: column;
      height: var(--h);
    }
    .noshadow {
      box-shadow: none;
    }
    .wrap {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h1 {
      font-size: 1.7rem;
    }
    .contact-link {
      display: none;
    }
    .sp-menu {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .sp-list {
      background-color: rgba(130, 38, 18, 0.9);
      width: 100%;
      height: auto;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s;
      box-shadow: 0 5px 6px var(--shadow);
    }
    ul {
      margin: 0;
    }
    .ul-main {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 auto;
      width: 80%;
      height: auto;
    }
    .expanded {
      transform: scaleY(1);
    }
    .li-main {
      width: 100%;
      border-bottom: solid 1px #fff;
    }
    .nav-link {
      font-size: 1.45rem;
      font-weight: normal;
      padding: 3rem 1rem 5px;
    }
    .back {
      position: absolute;
      top: unset;
      left: unset;
      transform: rotateX(-180deg);
    }
    .nav-link:hover .back {
      transform: rotateX(0deg);
    }
    .ul-sp {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-sp-link {
      display: block;
      width: 55px;
      margin: 50px 30px;
    }
    .underbar {
      display: none;
    }
  }
  @media (max-width: 580px) {
    nav {
      --h: 2.75rem;
    }
    .nav-sp-mail {
      height: 30px;
    }
    .nav-link {
      font-size: 1.2rem;
      padding-top: 2rem;
    }
    .nav-sp-link {
      width: 45px;
      margin: 40px 20px;
    }
  }
</style>
