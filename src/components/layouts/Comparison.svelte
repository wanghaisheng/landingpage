<script>
  import Image from 'svelte-i-pack'
  import CompTable from '../fragments/ComparisonTable.svelte'
  import YellowCircle from '../materials/YellowCircle.svelte'
  import SimpleLine from '../materials/SimpleLine.svelte'
  import Dot from '../materials/Dot.svelte'

  export let comp = '',
    inview
  let viewed = false
  $: {
    if (inview) viewed = true
  }
</script>

<section id="comparison" tabindex="-1" bind:this="{comp}">
  <YellowCircle comp></YellowCircle>
  <Image
    src="pc/2x/leaf.man.png"
    width="614*2"
    media="(max-width: 720px)"
    aSrc="sp/3x/leaf.man.png"
    aWidth="177*3"
    alt=""
    class="comp-leafman"
  ></Image>

  <div class="container">
    <div class="h-container">
      <SimpleLine x="52" y="55" color="var(--wine)" rotate></SimpleLine>
      <h1>大手サービスとの違い！</h1>
      <SimpleLine x="52" y="55" color="var(--wine)"></SimpleLine>
      <div class="h2-box" class:viewed>
        <h2>OliAnchoは<br /><Dot sentence="ここ"></Dot>がちがう！</h2>
        <Image
          src="pc/2x/gunya.white.png"
          width="316*2"
          alt=""
          class="comp-gunya"
          no-inline
        ></Image>
      </div>
    </div>

    <CompTable></CompTable>

    <div class="p-container">
      <p class="p1">
        大手企業は作業をマニュアル化しているため、<br />作業は早いが、ありきたりなWEBサイトばかり…
      </p>

      <div class="p2-box">
        <p class="p2">
          わたしたち<span class="p-span">OliAncho</span
          >は<br />みなさま1人1人と<span class="underline p-span"
            >ステキな関係</span
          >を築き、<br />他にはない<span class="underline p-span"
            >あなたにぴったり</span
          >の<br class="sm-br" />WEBサイトをご提案します:)
        </p>
        <Image
          src="pc/2x/line.difference.png"
          width="702*2"
          alt=""
          class="comp-line"
        ></Image>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    margin-top: 304px;
    padding-bottom: 11rem;
  }
  .container {
    position: relative;
    width: 75%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .h-container {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 3rem;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    margin: 0;
    white-space: nowrap;
  }
  .h2-box {
    position: relative;
    margin-right: 3rem;
    margin-top: -2rem;
    transform: translate3d(-400px, 0, 0);
    transition: transform 0.4s ease-out;
  }
  .viewed {
    transform: translate3d(0, 0, 0) rotate(-16deg);
  }
  h2 {
    position: relative;
    font-size: 2.2rem;
    margin: 0;
    line-height: 1.3;
    z-index: 20;
  }
  :global(.comp-gunya) {
    position: absolute;
    top: 51%;
    left: 45%;
    width: 316px;
    transform: translate(-50%, -50%) rotate(16deg);
    z-index: 10;
  }
  .p-container {
    margin-top: 5rem;
    width: 83.5%;
    line-height: 1.8rem;
    position: relative;
    font-size: 1rem;
  }
  .p1 {
    font-size: 1.44em;
  }
  .p2-box {
    margin-top: 4em;
  }
  .p2 {
    font-size: 1.56em;
    font-weight: 700;
    line-height: 3.4rem;
  }
  .p-span {
    font-size: 1.28em;
    color: var(--wine);
  }
  .sm-br {
    display: none;
  }
  .underline {
    text-decoration: #fff underline;
  }
  :global(.comp-line) {
    position: absolute;
    top: 45%;
    right: 28%;
    filter: drop-shadow(3px 3px 6px var(--shadow));
  }
  :global(.comp-leafman) {
    position: absolute;
    bottom: 0;
    left: 63%;
  }

  @media (max-width: 1150px) {
    :global(.comp-leafman) {
      width: 550px;
    }
    .container {
      width: 80%;
    }
    .h-container {
      margin-right: 0;
    }
    h2 {
      font-size: 2rem;
    }
    :global(.comp-line) {
      width: 650px;
      top: 48%;
      right: 30%;
    }
  }
  @media (max-width: 1000px) {
    :global(.comp-leafman) {
      width: 510px;
    }
    .container {
      width: 86%;
    }
    .h-container {
      margin-right: -3rem;
    }
    .h2-box {
      margin-right: 4rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 890px) {
    :global(.comp-leafman) {
      width: 460px;
      left: 62%;
    }
    .container {
      width: 100%;
      align-items: center;
    }
    .h-container {
      margin-right: 0;
    }
    h1 {
      font-size: 2.2rem;
    }
    .h2-box {
      position: absolute;
      top: -11%;
      left: 9%;
      margin-right: 0;
    }
    :global(.comp-gunya) {
      width: 270px;
    }
    .p-container {
      margin-top: 3rem;
      padding-left: 30px;
      font-size: 0.9rem;
      align-self: flex-start;
    }
    .p2-box {
      margin-top: 3em;
    }
    .sm-br {
      display: inline;
    }
    :global(.comp-line) {
      display: none;
    }
  }
  @media (max-width: 720px) {
    section {
      margin-top: 264px;
    }
    :global(.comp-leafman) {
      width: 177px;
      bottom: 13%;
      left: auto;
      right: -1%;
    }
    h1 {
      font-size: 1.9rem;
    }
    .h2-box {
      top: -13%;
      left: 11%;
    }
    h2 {
      font-size: 1.4rem;
    }
    :global(.comp-gunya) {
      width: 220px;
    }
    .p-container {
      font-size: 0.85rem;
      margin-top: 2.6rem;
    }
    .p2 {
      font-size: 1.44em;
      line-height: 2.8rem;
    }
  }
  @media (max-width: 580px) {
    section {
      margin-top: 224px;
    }
    h1 {
      font-size: 1.5rem;
    }
    .h2-box {
      top: -10%;
    }
    h2 {
      font-size: 1.1rem;
      line-height: 1.4;
    }
    :global(.comp-gunya) {
      width: 170px;
    }
    .p-container {
      font-size: 0.7rem;
      padding-left: 20px;
    }
    .p-span {
      font-size: 1.2em;
    }
    .p2 {
      line-height: 2.3rem;
    }
    :global(.comp-leafman) {
      right: -7%;
    }
  }
  @media (max-width: 460px) {
    :global(.comp-leafman) {
      bottom: 7%;
      right: -10%;
    }
    .p-container {
      width: 100%;
      padding-left: 16px;
      letter-spacing: -0.4px;
    }
  }
</style>
