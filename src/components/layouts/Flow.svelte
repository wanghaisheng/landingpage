<script>
  import { onMount } from 'svelte';
  import list from '../../data/flowList.js';
  import Image from 'svelte-i-pack';

  export let inview;
  let viewed = false;
  const offset = 700;
  let flow,
    leaf,
    top = 0,
    opacity = 0,
    ry = 0,
    rz = 0,
    deg = 0,
    lastPos = -999;

  const leafScroll = () => {
    let scrollPos = window.scrollY - flow.offsetTop + offset;

    if (lastPos > scrollPos) {
      const lists = document.getElementsByClassName('list-container');
      leaf.style.willChange = 'auto';
      for (const el of lists) {
        el.style.willChange = 'auto';
      }
      return;
    }
    deg = scrollPos / 3.6;
    top = Math.max(0, scrollPos / 1.4);
    let left;
    if (top <= 400) {
      left = -(top / 1.5);
    } else if (top > 400 && top <= 900) {
      left = -267 + (top - 400) / 1.1;
    } else if (top > 900) {
      left = 188 - (top - 900) / 1.4;
    }
    ry = Math.max(0, scrollPos / 700);
    rz = Math.max(0, scrollPos / 500);
    if (opacity < 1) {
      opacity = Math.min(1, (top - 100) / 800);
      leaf.style.opacity = opacity;
    }
    leaf.style.transform = `translate(${left}px, ${top}px) rotate3d(0, ${ry}, ${rz}, ${deg}deg)`;

    deg < 390 ? (lastPos = scrollPos) : (lastPos = 3000);
  };
  $: {
    if (inview && process.browser) {
      viewed = true;
      if (window.innerWidth > 890 && top < 1000) {
        window.addEventListener('scroll', leafScroll);
      }
    } else if (!inview && process.browser) {
      window.removeEventListener('scroll', leafScroll);
    }
  }

  onMount(() => {
    leaf = document.querySelector('.flow-leaf3');
  });
</script>

<section id="flow" tabindex="-1" bind:this="{flow}">
  <!-- Deco -->
  <div class="deco-box">
    <Image
      src="pc/2x/olivetree.png"
      width="1670*2"
      sizes="(max-width:580px) 1190px, 1670px"
      alt=""
      class="flow-tree abs"
    ></Image>
    <Image
      src="pc/2x/leaf3.png"
      width="501*2"
      alt=""
      class="flow-leaf1 abs"
    ></Image>
    <Image
      src="pc/2x/leaf3.png"
      width="501*2"
      alt=""
      class="flow-leaf2 abs"
    ></Image>
    <Image
      src="pc/2x/leaf3.png"
      width="501*2"
      alt=""
      class="flow-leaf3 abs"
    ></Image>
  </div>
  <!-- /Deco -->

  <div class="container">
    <h1>
      ご納品までの流れ
      <Image
        src="pc/2x/line.flow.png"
        width="376*2"
        alt=""
        class="flow-line abs d-shadow-light"
      ></Image>
    </h1>

    <dl>
      {#each list as item, i}
      <div
        class="list-container"
        class:viewed
        style="transition: all 0.5s ease-out {(i + 1) * 0.2}s"
      >
        <div class="step-box">
          <span class="step-span step-step">STEP</span>
          <div class="step-span step-num">{i+1}</div>
        </div>
        <dt>{item.heading}</dt>
        <dd>{item.content}</dd>
      </div>
      {/each}
    </dl>
  </div>
</section>

<style>
  section {
    margin-top: 20rem;
    position: relative;
    padding-bottom: 6rem;
  }
  .container {
    width: 68%;
    margin-left: auto;
  }
  h1 {
    position: relative;
    display: inline-block;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 700;
  }
  :global(.flow-line) {
    position: absolute;
    bottom: -204%;
    right: 7.5%;
    width: 9.4em;
  }
  dl {
    margin-top: 5em;
    font-size: 1rem;
    transition: transform 0.7s 0.1s ease-out, opacity 0.7s 0.1s ease-out;
  }
  .list-container {
    background-color: rgba(245, 244, 242, 0.8);
    box-shadow: 5px 5px 6px var(--shadow);
    padding: 1.7rem 0 1rem 5.4rem;
    position: relative;
    margin-bottom: 2.8rem;
    transform: translate3d(200px, 0, 0);
    opacity: 0;
    will-change: transform, opacity;
  }
  .viewed {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  .list-container:last-child > div {
    background-color: var(--ocher);
    color: #000;
  }
  .list-container:last-child > dt {
    border-bottom: 3px solid var(--ocher);
  }
  .step-box {
    width: 7.6rem;
    height: 7.6rem;
    border-radius: 50%;
    background-color: var(--wine);
    color: #fff;
    font-family: var(--times);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0.9;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 6px var(--shadow);
    font-weight: 700;
  }
  .step-step {
    font-size: 1.8em;
  }
  .step-num {
    font-size: 3.7em;
  }
  dt {
    font-weight: 700;
    font-size: 1.875em;
    border-bottom: 3px solid var(--wine);
    display: inline-block;
    padding: 0 1em 0 4rem;
    margin-left: -4rem;
  }
  dd {
    font-size: 1.25em;
    margin: 0.5rem 0 0;
    white-space: pre-wrap;
    line-height: 1.9;
  }

  .deco-box {
    font-size: 100px;
  }
  :global(.flow-tree) {
    left: 0;
    bottom: 0;
    transform: translateX(-45%);
    width: 16.7em;
  }
  :global(.flow-leaf1) {
    width: 4.7em;
    top: -25%;
    right: -5%;
    transform: rotate(-48deg);
    filter: drop-shadow(-1px 5px 3px var(--shadow));
  }
  :global(.flow-leaf2) {
    width: 4.4em;
    top: 63%;
    right: -3%;
    filter: drop-shadow(11px 5px 3px var(--shadow));
  }
  :global(.flow-leaf3) {
    width: 4em;
    top: 0;
    left: 6rem;
    filter: drop-shadow(2px -5px 3px var(--shadow));
    opacity: 0;
    will-change: opacity, transform;
  }

  @media (max-width: 1000px) {
    .container {
      width: 75%;
    }
    .deco-box {
      font-size: 87px;
    }
  }
  @media (max-width: 890px) {
    section {
      margin-top: 5rem;
    }
    .container {
      width: 86%;
    }
    h1 {
      margin-left: 8rem;
      font-size: 2.2rem;
    }
    dl {
      font-size: 0.92rem;
    }
    .list-container {
      padding-left: 4.5rem;
    }
    .deco-box {
      font-size: 78px;
    }
    :global(.flow-leaf1) {
      top: 4%;
      right: -3%;
      transform: rotate(-38deg);
    }
    :global(.flow-leaf2) {
      top: 83%;
      right: 3%;
    }
    :global(.flow-leaf3) {
      top: 36%;
      left: -10%;
      transform: rotate(-155deg);
      opacity: 1;
      will-change: auto;
    }
  }
  @media (max-width: 720px) {
    section {
      margin-top: 3rem;
    }
    .container {
      width: 100%;
    }
    h1 {
      font-size: 1.9rem;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    dl {
      font-size: 0.9rem;
    }
    .list-container {
      padding: 1rem 16px 1rem 90px;
    }
    .step-box {
      width: 9.8rem;
      height: 10.1rem;
      align-items: flex-start;
    }
    .step-span {
      margin-left: 53%;
    }
    .step-num {
      font-weight: 500;
    }
    .step-step {
      font-size: 1.6em;
    }
    .list-container:nth-child(4) > dd {
      white-space: normal;
    }
    .deco-box {
      font-size: 70px;
    }
  }
  @media (max-width: 580px) {
    section {
      margin-top: 1rem;
    }
    h1 {
      font-size: 1.6rem;
    }
    dl {
      font-size: 0.83rem;
    }
    .list-container:last-child > dd {
      white-space: normal;
    }
    dt {
      font-size: 1.7em;
      line-height: 1.5;
    }
    .deco-box {
      font-size: 65px;
    }
    :global(.flow-tree) {
      bottom: 10%;
      width: 18.3em;
      transform: translateX(-52%);
    }
  }
  @media (max-width: 460px) {
    h1 {
      font-size: 1.5rem;
      white-space: nowrap;
    }
    dl {
      font-size: 0.71rem;
      margin-top: 6em;
    }
    dd {
      font-size: 1.35em;
    }
    .step-box {
      left: -15px;
      line-height: 1;
    }
    .step-span {
      margin-left: 62%;
    }
    .step-num {
      padding-left: 2px;
    }
    .list-container {
      padding-left: 78px;
    }
  }
</style>
