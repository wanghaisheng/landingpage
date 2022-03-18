<script>
  import YellowCircle from '../materials/YellowCircle.svelte'
  import Dot from '../materials/Dot.svelte'
  import PriceCard from '../fragments/PriceCard.svelte'
  import cardList from '../../data/priceCardList.js'
  import Image from 'svelte-i-pack'

  export let inview
  let viewed = false
  $: {
    if (inview) viewed = true
  }
</script>
<section id="price" tabindex="-1">
  <YellowCircle price></YellowCircle>
  <Image
    src="pc/2x/leaf3.png"
    width="501*2"
    alt=""
    class="price-leaf abs"
    no-inline
  ></Image>
  <img src="svg/spiderweb.svg" alt="" class="web1 abs d-shadow" class:viewed />
  <img src="svg/spiderweb.svg" alt="" class="web2 abs d-shadow" class:viewed />

  <div class="container">
    <div class="head-box">
      <h1>
        <Image
          src="pc/2x/line.contact.png"
          width="284*2"
          alt=""
          class="price-line abs d-shadow"
          no-inline
        ></Image>
        お値段
      </h1>
      <div class="campaign">
        <h4>
          東京オリンピック<br /><strong>キャンペーン開催中</strong
          ><br />2020年<Dot sentence="9月" bold mid></Dot>まで！
        </h4>
        <Image
          src="pc/2x/gunya.white.png"
          width="316*2"
          alt=""
          class="price-gunya"
          no-inline
        ></Image>
      </div>
    </div>

    {#each cardList as card (card.name)}
    <PriceCard {card}></PriceCard>
    {/each}
    <div class="tail">
      <p>※ホスティング無料</p>
      <p>※レスポンシブ対応込</p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    margin-top: 15rem;
  }
  .container {
    width: 66%;
    margin-left: auto;
    position: relative;
  }
  .head-box {
    display: flex;
    width: 100%;
  }
  h1 {
    position: relative;
    margin-left: 9rem;
    display: inline-block;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 700;
  }
  :global(.price-line) {
    position: absolute;
    width: 8em;
    bottom: -190%;
    right: -81%;
    z-index: 30;
  }
  .campaign {
    position: absolute;
    top: -7%;
    left: 46%;
    transform: rotate(16deg);
  }
  h4 {
    position: relative;
    font-size: 1.5rem;
    line-height: 1.5;
    z-index: 20;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }
  :global(.price-gunya) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 316px;
    transform: translate(-50%, -50%) rotateY(180deg) rotate(12deg);
    z-index: 10;
  }

  img {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
  .viewed {
    opacity: 1;
  }
  .web1 {
    width: 510px;
    height: 510px;
    top: -5%;
    right: 71%;
    transform: rotate(18deg);
  }
  .web2 {
    width: 512px;
    height: 512px;
    transform: rotate(36deg);
    bottom: -0.3%;
    right: 71%;
  }
  :global(.price-leaf) {
    width: 370px;
    bottom: -2.5%;
    right: 69%;
    transform: rotate(156deg);
    filter: drop-shadow(-4px -4px 3px var(--shadow));
  }
  .tail {
    display: none;
  }
  @media (max-width: 1150px) {
    .campaign {
      left: 55%;
    }
  }
  @media (max-width: 1000px) {
    .campaign {
      left: 58%;
    }
  }
  @media (max-width: 890px) {
    .container {
      width: 70%;
    }
    h1 {
      font-size: 2.2rem;
    }
    :global(.price-gunya) {
      width: 270px;
    }
    .container {
      width: 68%;
    }
  }
  @media (max-width: 720px) {
    section {
      margin-top: 11rem;
    }
    h1 {
      font-size: 1.9rem;
      margin-left: 4.5rem;
    }
    .campaign {
      top: -5%;
      left: 54%;
    }
    h4 {
      font-size: 1.1rem;
    }
    :global(.price-gunya) {
      width: 240px;
    }
    .web1,
    .web2 {
      width: 310px;
      height: 310px;
    }
    .web1 {
      top: 7%;
      right: 65%;
    }
    .web2 {
      transform: rotate(34deg);
      bottom: -5%;
      right: 70%;
    }
    :global(.price-leaf) {
      width: 290px;
      bottom: -11%;
      right: 56%;
    }
    .tail {
      display: block;
      margin-top: 3rem;
      font-size: 1.1rem;
      padding-left: 7rem;
      line-height: 1.6;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 580px) {
    section {
      margin-top: 4rem;
    }
    h1 {
      font-size: 1.6rem;
    }
    .campaign {
      left: 56%;
    }
    .container {
      width: 73%;
    }
    h4 {
      font-size: 0.875rem;
    }
    :global(.price-gunya) {
      width: 170px;
    }
    .web1,
    .web2 {
      width: 240px;
      height: 240px;
    }
    .web1 {
      top: 13%;
      right: 63%;
    }
    .web2 {
      bottom: -2%;
      right: 66%;
    }
    :global(.price-leaf) {
      width: 210px;
      bottom: 29%;
      right: 58%;
    }
    .tail {
      padding-left: 5rem;
      font-size: 0.9rem;
    }
  }
  @media (max-width: 460px) {
    section {
      margin-top: 2rem;
    }
    .container {
      width: 85%;
    }
    h1 {
      margin-left: 5.5rem;
      font-size: 1.5rem;
    }
    .campaign {
      top: -6%;
      left: 58%;
    }
    :global(.price-leaf) {
      bottom: -7%;
      right: 60%;
      width: 180px;
    }
    .tail {
      padding-left: 0;
      margin: 3rem 4rem 0 auto;
      width: 10rem;
    }
  }
</style>
