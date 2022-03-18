<script>
  import Image from 'svelte-i-pack'
  import Btn from '../fragments/Btn.svelte'

  export let inview, scroller
  let section,
    viewed = false
  $: {
    if (inview) {
      viewed = true
      setTimeout(() => (section.style.willChange = 'auto'), 600)
    }
  }

  const jumpToContact = () => {
    const target = document.getElementById('contact')
    const nav = document.getElementById('nav')
    const offset = parseInt(window.getComputedStyle(nav).height) + 10
    scroller({ target, offset, cb: target.focus({ preventScroll: true }) })
  }
</script>

<section id="features" tabindex="-1" bind:this="{section}" class:viewed>
  <div class="container">
    <Image
      src="pc/2x/leaf2.png"
      width="303*2"
      alt=""
      class="feat-leaf1"
    ></Image>
    <Image
      src="pc/2x/leaf4.png"
      width="521*2"
      sizes="(max-width: 890px) 250px, 521px"
      alt=""
      class="feat-leaf2"
    ></Image>
    <div class="fairy-box">
      <Image
        src="pc/2x/leaves.man.png"
        width="751*2"
        media="(max-width: 720px)"
        sizes="(max-width: 890px) 400px, 751px"
        aSrc="sp/3x/leaves.man.png"
        aWidth="278*3"
        alt=""
        class="feat-fairy-man"
      ></Image>
      <Image
        src="pc/2x/words.red.png"
        width="420*2"
        media="(max-width: 890px)"
        aSrc="sp/3x/words.red.png"
        aWidth="144*3"
        alt=""
        no-inline
        class="feat-fairy-words"
      ></Image>
    </div>

    <h1>OliAncho<span class="title-span">あんしんの理由</span></h1>
    <div class="title-box">
      <Image
        src="pc/2x/words.redblack.png"
        width="393*2"
        alt=""
        class="feat-title"
      ></Image>
      <Image
        src="pc/2x/line.reason.png"
        width="488*2"
        alt=""
        class="feat-line"
      ></Image>
    </div>
    <dl>
      <div class="caption-box caption-box1">
        <span class="deco-num deco-num1">1</span>
        <dt>
          <h2>
            <span class="dt-span dt1-1">1人1人に合わせた</span><br /><span
              class="dt-span dt1-2"
              >デザインをご提案！</span
            >
          </h2>
        </dt>
        <dd>
          わたしたちは既存のテンプレートに頼りません！みなさまのご状況やご要望をしっかりと伺い、あなたにピッタリの、世界に1つだけのWEBサイトをご提案します。<br />一緒にステキなWEBサイトを作りましょう！
        </dd>
      </div>
      <div class="caption-box caption-box2">
        <span class="deco-num deco-num2">2</span>
        <dt>
          <h2 class="sec-h2">
            <span class="dt-span dt2-1">WEB初心者さんにも</span><br /><span
              class="dt-span dt2-2"
              >わかりやすい説明を！</span
            >
          </h2>
        </dt>
        <dd>
          WEBの専門用語って、難しくて分かりづらいですよね…でも大丈夫！私たちは分かりやすい言葉でしっかり説明することを心掛けています。<br />みなさま1人1人とステキな関係を築きたいと思っていますので、わからないことがあればお気軽にお尋ねください♪
        </dd>
      </div>
      <div class="caption-box caption-box3">
        <span class="deco-num deco-num3">3</span>
        <dt>
          <h2 class="last-h2">
            <span class="dt-span dt3-1">納品後1ヶ月の</span><br /><span
              class="dt-span dt3-2"
              >うれしい保証付き！</span
            >
          </h2>
        </dt>
        <dd>
          「納品したら、さようなら〜」そんなことでは困りますよね。わたしたちは納品後1ヶ月、無償でサポートをさせていただきます。<br />使用方法についてのアドバイスやフォローはもちろんのこと、納品後の配置変更や調整も小規模であれば喜んで対応させていただきます！
        </dd>
      </div>
    </dl>
  </div>
  <p>
    わたしたちは<br class="sm-br" />WEBクリエイターとして夫婦で活動しています。
  </p>
  <p>いつでもお気軽にお問い合わせください :)</p>
  <a href="#contact" class="feat-btn" on:click|preventDefault="{jumpToContact}">
    <Btn text="ご依頼・ご相談はこちらから">
      <Image
        src="pc/2x/davigobu.small.png"
        width="74*2"
        alt=""
        class="feat-davigobu"
      ></Image>
    </Btn>
  </a>
</section>

<style>
  section {
    width: 100%;
    padding-top: 4.4rem;
    position: relative;
    opacity: 0;
    transform: translate3d(0, 200px, 0);
    transition: transform 0.5s ease-out, opacity 0.5s ease-in-out;
    will-change: transform, opacity;
  }
  .viewed {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .container {
    position: relative;
    background-color: var(--cream);
    min-height: 1470px;
    width: 94%;
    margin-left: auto;
    box-shadow: 10px 10px 6px var(--shadow);
    padding-top: 0.1rem;
    padding-bottom: 1rem;
    --tml: 67px;
  }
  h1 {
    font-family: var(--times);
    font-size: 2.2rem;
    font-weight: 500;
    margin: 0.4rem var(--tml);
    line-height: 1.4;
  }
  .title-span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .title-box {
    position: relative;
    display: inline-block;
    margin-left: var(--tml);
    margin-bottom: 3rem;
    font-size: 100px;
    line-height: 0;
  }
  :global(.feat-title) {
    width: 3.93em;
  }
  :global(.feat-line) {
    width: 4.88em;
    position: absolute;
    bottom: -199%;
    right: 0;
  }

  dl {
    width: 100%;
    margin-bottom: 100px;
  }
  .caption-box {
    position: relative;
    border: 2px solid #000;
    padding: 0 3.2% 2.4rem;
  }
  .caption-box1 {
    width: 41%;
    margin-right: 16%;
    margin-left: auto;
  }
  .caption-box2 {
    width: 45.5%;
    margin-top: -2.7rem;
    margin-right: auto;
    margin-left: 3.5%;
  }
  .caption-box3 {
    width: 47.75%;
    margin-right: 13%;
    margin-left: auto;
    margin-top: -3rem;
  }
  h2 {
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  .dt-span {
    display: inline-block;
    box-shadow: 5px 5px 6px var(--shadow);
    padding: 0.6rem 1.7rem;
  }
  .dt1-1 {
    background-color: var(--wine);
    color: #fff;
    margin-top: 1.4rem;
    margin-left: -6rem;
  }
  .dt1-2 {
    background-color: #fff;
    color: var(--wine);
    margin-left: -1rem;
  }
  .dt2-1 {
    background-color: #fff;
    color: #000;
    margin-top: 2.5rem;
    margin-left: -1rem;
  }
  .dt2-2 {
    background-color: var(--ocher);
    color: #000;
    margin-left: -7rem;
  }
  .last-h2 {
    text-align: right;
    margin-top: -1.7rem;
    margin-right: -1.5rem;
  }
  .dt3-1 {
    background-color: #fff;
    color: var(--wine);
    margin-right: -3rem;
  }
  .dt3-2 {
    background-color: var(--wine);
    color: #fff;
  }
  dd {
    margin: 0;
    font-size: 1.25rem;
    line-height: 2;
  }
  :global(.feat-btn:focus) {
    outline: none;
    --hoveredCol: #6c97e6;
  }

  p {
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.6;
    margin: 7.5rem 0 0;
  }
  p:last-of-type {
    margin: 0 0 2.6rem;
  }
  .sm-br {
    display: none;
  }
  :global(.feat-davigobu) {
    width: 74px;
    margin-right: 0.2rem;
  }
  .deco-num {
    position: absolute;
    color: rgba(132, 38, 18, 0.25);
    font-size: 310px;
    font-weight: 900;
  }
  .deco-num1 {
    bottom: 32%;
    left: 89%;
  }
  .deco-num2 {
    bottom: 83%;
    left: 2%;
  }
  .deco-num3 {
    top: 29%;
    left: 90%;
  }
  :global(.feat-leaf1) {
    position: absolute;
    width: 303px;
    top: 10%;
    left: 14%;
    transform: rotate(24deg);
  }
  :global(.feat-leaf2) {
    position: absolute;
    width: 521px;
    transform: rotate(-40deg);
    top: 42%;
    left: 56%;
  }
  .fairy-box {
    position: absolute;
    top: 62%;
    right: 53%;
  }
  :global(.feat-fairy-man) {
    width: 751px;
  }
  :global(.feat-fairy-words) {
    position: absolute;
    width: 420px;
    transform: rotate(61deg);
    top: 45%;
    left: 37%;
  }
  @media (max-width: 1000px) {
    .title-box {
      font-size: 90px;
    }
    h2 {
      font-size: 1.9rem;
    }
    .caption-box1 {
      width: 45%;
    }
    .caption-box2 {
      width: 48%;
    }
    .caption-box3 {
      width: 51%;
    }
    .fairy-box {
      right: 48%;
    }
    :global(.feat-leaf1) {
      left: 7%;
    }
    p {
      margin-top: 6rem;
    }
  }
  @media (max-width: 890px) {
    .container {
      min-height: auto;
      padding-bottom: 140px;
    }
    h1 {
      font-size: 1.9rem;
    }
    .title-box {
      font-size: 80px;
      margin-bottom: 5rem;
    }
    dl {
      margin-bottom: 0;
    }
    .caption-box {
      width: 88%;
      margin: 26px 0 160px 4%;
      padding: 0 7% 2.2rem;
    }
    .caption-box3 {
      margin-bottom: 0 !important;
    }
    h2 {
      transform: translateY(-25%);
      margin: 0;
    }
    .last-h2 {
      text-align: left;
      margin-top: 0;
      margin-right: 0;
    }
    .dt-span {
      margin-top: 0;
    }
    .dt1-1 {
      margin-left: -15.5%;
    }
    .dt1-2 {
      margin-left: -4%;
    }
    .dt2-1 {
      margin-left: 0;
      margin-right: -15%;
    }
    .dt2-2 {
      margin-left: 0;
      margin-right: -3%;
    }
    .dt3-1 {
      margin-left: 0;
    }
    .dt3-2 {
      margin-left: -16%;
    }
    .sec-h2 {
      text-align: right;
    }
    :global(.feat-leaf1) {
      width: 250px;
      top: 26%;
      left: 60%;
      transform: rotate(39deg);
    }
    :global(.feat-leaf2) {
      width: 250px;
      transform: rotate(-32deg);
      top: 61%;
      left: 6%;
    }
    .fairy-box {
      top: 85%;
      left: -14%;
      right: auto;
    }
    :global(.feat-fairy-man) {
      width: 400px;
    }
    :global(.feat-fairy-words) {
      width: 144px;
      left: 55%;
      top: 50%;
    }
    .deco-num1 {
      left: 83%;
    }
    .deco-num2 {
      bottom: 52%;
      left: -6%;
    }
    .deco-num3 {
      top: -36%;
      left: 80%;
    }
    p {
      font-size: 1.4rem;
    }
    :global(.feat-davigobu) {
      width: 65px;
    }
  }
  @media (max-width: 720px) {
    .container {
      --tml: 40px;
      padding-bottom: 110px;
    }
    h1 {
      font-size: 1.5rem;
    }
    .title-box {
      font-size: 70px;
      margin-bottom: 4rem;
    }
    .caption-box {
      margin-bottom: 110px;
      padding: 0 7% 1.7rem;
    }
    h2 {
      font-size: 1.7rem;
    }
    .dt-span {
      padding: 0.3rem 1.1rem;
    }
    dd {
      font-size: 1.1rem;
    }
    .fairy-box {
      top: 86%;
      left: -14%;
    }
    :global(.feat-fairy-man) {
      width: 340px;
    }
    .deco-num {
      font-size: 230px;
    }
    .deco-num1 {
      bottom: 49%;
    }
    .deco-num2 {
      bottom: 54%;
    }
    .deco-num3 {
      top: -28%;
      left: 79%;
    }
    :global(.feat-leaf1) {
      width: 180px;
      top: 28%;
      left: 65%;
    }
    :global(.feat-leaf2) {
      width: 200px;
      top: 61%;
    }
    p {
      font-size: 1.2rem;
    }
    p:last-of-type {
      margin-bottom: 1.9rem;
    }
    :global(.feat-davigobu) {
      width: 58px;
    }
  }
  @media (max-width: 580px) {
    .container {
      padding-bottom: 90px;
    }
    .title-box {
      font-size: 60px;
      margin-bottom: 3rem;
    }
    h1 {
      font-size: 1.2rem;
    }
    .caption-box {
      margin-bottom: 110px;
      padding: 0 7% 2rem;
    }
    h2 {
      font-size: 1.44rem;
    }
    dd {
      font-size: 1rem;
      line-height: 1.8;
    }
    .deco-num1 {
      left: 76%;
    }
    .deco-num3 {
      top: -36%;
      left: 75%;
    }
    :global(.feat-leaf1) {
      width: 160px;
      top: 28%;
      left: 57%;
    }
    :global(.feat-leaf2) {
      width: 160px;
      top: 62%;
    }
    .fairy-box {
      top: 89%;
      left: -19%;
    }
    :global(.feat-fairy-man) {
      width: 278px;
    }
    :global(.feat-fairy-words) {
      top: 53%;
      left: 53%;
    }
    p {
      margin-top: 7rem;
      font-size: 1rem;
      font-weight: 700;
    }
    p:last-of-type {
      margin-bottom: 1.5rem;
    }
    .sm-br {
      display: inline;
    }
    :global(.feat-davigobu) {
      width: 51px;
    }
  }
  @media (max-width: 460px) {
    :global(.feat-davigobu) {
      display: none;
    }
  }
</style>
