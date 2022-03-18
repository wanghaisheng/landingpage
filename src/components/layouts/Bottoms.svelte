<script>
  import Image from 'svelte-i-pack';
</script>
<footer>
  <div>
    <a
      href="https://www.instagram.com/oliancho/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        src="pc/2x/instagram.png"
        width="50*2"
        alt="Instagramへ"
        class="bottoms-link d-shadow skl"
      ></Image>
    </a>

    <a href="https://oliancho.com" target="_blank" rel="noreferrer noopener">
      <Image
        src="pc/2x/portfolio.png"
        width="50*2"
        alt="OliAnchoのポートフォリオへ"
        class="bottoms-link d-shadow skl"
      ></Image>
    </a>

    <!-- <a
      href="https://www.youtube.com/channel/UCzTW_KyoA5BrI53ikFUdMGA"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        src="pc/2x/youtube.png"
        width="50*2"
        alt="Youtubeチャンネルへ"
        class="bottoms-link d-shadow skl"
      ></Image>
    </a> -->

    <!-- <a
      href="https://twitter.com/DOKs62"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        src="pc/2x/twitter.png"
        width="50*2"
        alt="Twitterへ"
        class="bottoms-link skl"
      ></Image>
    </a> -->
  </div>

  <div class="davigobu-box">
    <Image
      src="pc/2x/about-davigobu.png"
      width="188*2"
      alt
      class="bottoms-davigobu"
    ></Image>
    <div class="balloon-box">
      <Image
        src="pc/2x/callout.footer.png"
        width="112*2"
        alt
        class="bottoms-balloon"
      ></Image>
      <p class="balloon-text">海外での ノマド生活について 配信しています♪</p>
    </div>
  </div>

  <p class="copy-right">oliancho&copy;2020</p>
</footer>

<style>
  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding-top: 60px;
    overflow-y: hidden;
  }
  :global(.bottoms-link) {
    width: 50px;
  }
  a:not(:last-child) {
    margin-right: 28px;
  }
  .davigobu-box {
    position: relative;
  }
  :global(.bottoms-davigobu) {
    width: 188px;
  }
  .balloon-box {
    width: 112px;
    height: 69px;
    position: absolute;
    top: 20px;
    left: 100%;
  }
  :global(.bottoms-balloon) {
    width: 112px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .balloon-text {
    position: relative;
    font-size: 9px;
    padding: 17px 7px 15px 33px;
    line-height: 1.4;
  }
  .copy-right {
    width: 100%;
    font-size: 0.7rem;
    text-align: center;
    padding: 0.2rem 0;
    margin-top: -28px;
    color: #fff;
    background-color: var(--wine);
  }
  @media (max-width: 460px) {
    .balloon-box {
      top: 5px;
      left: 94%;
    }
    .copy-right {
      padding: 2px 0;
    }
  }
  @media (max-width: 390px) {
    .davigobu-box {
      left: calc(-390px + 100vw);
    }
  }
</style>
