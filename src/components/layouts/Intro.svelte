<script>
  import Image from 'svelte-i-pack'
  import DownArrow from '../materials/DownArrow.svelte'
  import SimpleLine from '../materials/SimpleLine.svelte'

  export let inview
  let viewed = false
  $: {
    if (inview) viewed = true
  }

  const list = [
    { text: '誰に何を頼めばいいか', strong: '分からない' },
    { text: 'WEBに疎いから', strong: '不安でいっぱい' },
    { text: '納品後もサポートしてくれなきゃ', strong: '困る' },
  ]
</script>

<section id="intro">
  <div class="title-box">
    <SimpleLine></SimpleLine>
    <h1>
      WEBサイトを作りたい！<br />
      <span class="title-span">でもこんなお悩みはありませんか？</span>
    </h1>
    <SimpleLine rotate></SimpleLine>
  </div>

  <div class="content-box">
    {#each list as item}
    <p class="demand">
      { item.text }<strong>{ item.strong }</strong
      ><span style="font-weight: 900;">！</span>
    </p>
    {/each}
    <DownArrow color="var(--ocher)"></DownArrow>
    <div class="deco-box" class:viewed>
      <span class="q1">?</span><span class="q2">?</span
      ><span class="q3">?</span>
      <Image
        src="pc/2x/gentleman.black.png"
        width="836*2"
        alt=""
        class="intro-man"
        media="(max-width: 890px)"
        aSrc="sp/3x/gentleman.black.png"
        aWidth="466*2"
      ></Image>
    </div>
  </div>
  <div class="footer-box">
    <p class="footer-p">もう大丈夫！</p>
    <p class="footer-p">
      わたしたち
      <span class="footer-span1"
        >OliAncho<span class="footer-span2">(おりあんちょ)</span></span
      >に<br class="footer-br" />お任せください！
    </p>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }
  .title-box {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 1.7rem;
    color: var(--wine);
    text-align: center;
    line-height: 1.4;
    font-weight: 600;
    margin: 0 1.6rem;
  }
  .title-span {
    font-size: 2.5rem;
    color: #000;
    white-space: nowrap;
  }
  .content-box {
    background-color: var(--ocher);
    width: 100%;
    height: 660px;
    margin-top: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .demand {
    font-family: var(--noto);
    font-size: 2.2rem;
    background-color: #fff;
    width: 70%;
    height: 110px;
    padding: 0 8% 0 0;
    line-height: 110px;
    transform: rotate(-10deg);
    text-align: right;
    margin-bottom: 2rem;
    margin-left: -1.5rem;
    box-shadow: 5px 5px 6px var(--shadow);
  }
  .demand:first-child {
    margin-top: -2rem;
  }
  strong {
    color: var(--wine);
    font-size: 2.8rem;
    font-weight: 900;
  }
  .deco-box {
    position: absolute;
    right: -12rem;
    bottom: -7rem;
    height: 100%;
    width: 836px;
    font-family: var(--times);
    font-size: 1rem;
    transform: translate3d(400px, 0, 0);
    transition: transform 1.4s ease-out;
  }
  .viewed {
    transform: translate3d(0, 0, 0);
  }
  .q1 {
    position: absolute;
    font-size: 8.6em;
    top: 2%;
    left: 31%;
    transform: rotate(4deg);
  }
  .q2 {
    position: absolute;
    font-size: 10.3em;
    top: -11%;
    left: 42%;
    transform: rotate(-14deg);
  }
  .q3 {
    position: absolute;
    font-size: 7.1em;
    top: -5%;
    left: 58%;
    transform: rotate(15deg);
  }
  :global(.intro-man) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .footer-box {
    margin-top: 5rem;
    text-align: center;
    font-weight: 600;
  }
  .footer-p {
    --fz: 2.2rem;
    font-size: var(--fz);
    margin: 0;
    line-height: 1.3;
  }
  .footer-span1 {
    font-size: 1.25em;
    color: var(--wine);
  }
  .footer-span2 {
    font-size: var(--fz);
  }
  .footer-br {
    display: none;
  }

  @media (max-width: 1150px) {
    .demand {
      font-size: 2rem;
      width: 75%;
    }
    strong {
      font-size: 2.6rem;
    }
    .deco-box {
      width: 740px;
      right: -13rem;
      bottom: -9rem;
    }
  }
  @media (max-width: 1000px) {
    .demand {
      font-size: 1.9rem;
    }
    .deco-box {
      width: 700px;
    }
    .footer-p {
      --fz: 2rem;
    }
  }
  @media (max-width: 890px) {
    h1 {
      font-size: 1.6rem;
      margin: 0 0.5rem;
    }
    .title-span {
      font-size: 2.1rem;
    }
    .content-box {
      justify-content: flex-start;
      height: 610px;
    }
    .demand {
      font-size: 1.7rem;
      height: 88px;
      line-height: 88px;
      width: 80%;
      padding-right: 5%;
    }
    strong {
      font-size: 2rem;
    }
    .demand:first-child {
      margin-top: 2.2rem;
    }
    .deco-box {
      font-size: 0.9rem;
    }
    .q1 {
      top: 51%;
      left: -9%;
      transform: rotate(-30deg);
    }
    .q2 {
      top: 34%;
      left: 3%;
      transform: rotate(26deg);
    }
    .q3 {
      top: 5%;
      left: 57%;
      transform: rotate(15deg);
    }
    .footer-p {
      --fz: 1.65rem;
    }
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 1.4rem;
      margin-left: -16px;
      margin-right: -16px;
    }
    .title-span {
      font-size: 1.8rem;
    }
    .content-box {
      margin-top: 50px;
    }
    .demand {
      font-size: 1.5rem;
      width: 85%;
    }
    strong {
      font-size: 1.7rem;
    }
    .deco-box {
      width: 670px;
      right: -12rem;
    }
    .footer-br {
      display: inline;
    }
  }
  @media (max-width: 580px) {
    h1 {
      font-size: 1.1rem;
    }
    .title-span {
      font-size: 1.5rem;
    }
    .content-box {
      height: 480px;
      margin-top: 38px;
    }
    .demand {
      font-size: 1.2rem;
      width: 88%;
      height: 60px;
      line-height: 60px;
    }
    strong {
      font-size: 1.4rem;
    }
    .deco-box {
      width: 520px;
      font-size: 0.7rem;
      bottom: -7.5rem;
      right: -9rem;
    }
    .q3 {
      left: 58%;
      top: 7%;
    }
    .footer-box {
      margin-top: 4rem;
    }
    .footer-p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 460px) {
    h1 {
      font-size: 1.1rem;
      margin-right: -20px;
      margin-left: -20px;
    }
    .title-span {
      font-size: 1.3rem;
    }
    .content-box {
      height: 441px;
      margin-top: 28px;
    }
    .demand {
      font-size: 1rem;
      width: 92%;
      height: 55px;
      line-height: 55px;
      margin-bottom: 1.4rem;
      padding-right: 3%;
    }
    .demand:first-child {
      margin-top: 1.5rem;
    }
    strong {
      font-size: 1.3rem;
    }
    .deco-box {
      width: 470px;
      bottom: -6rem;
      right: -9rem;
      font-size: 0.6rem;
    }
    .q1 {
      left: -4%;
    }
    .q2 {
      left: 8%;
    }
    .footer-p {
      --fz: 1rem;
    }
    .footer-span1 {
      font-size: 1.1em;
    }
  }
</style>
