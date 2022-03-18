<script>
  import Image from 'svelte-i-pack'
  export let isValidArr
</script>
<div class="deco-container">
  <img src="svg/flower.group.svg" alt="" class="img-flower" />
  {#each isValidArr as isValid, i}
  <div class="leaf-container leaf-container{i + 1}">
    <div class="leaf-box" class:isValid>
      <Image
        src="pc/2x/leaf3.png"
        width="501*2"
        alt=""
        class="fbox-leaf"
        no-inline
      ></Image>
      <span class="ok">OK</span>
    </div>
    <div class="leaf-box leaf-box-ng" class:isValid="{!isValid}">
      <Image
        src="pc/2x/leaf3.png"
        width="501*2"
        class="fbox-leaf"
        alt=""
        no-inline
      ></Image>
      <span>NG</span>
    </div>
  </div>
  {/each}
</div>

<style>
  .deco-container {
    position: absolute;
    left: 14%;
    bottom: -1.5rem;
  }
  .img-flower {
    height: 57.3rem;
  }

  .leaf-container {
    position: absolute;
    left: -108px;
    perspective: 200px;
    width: 130px;
    height: 65px;
  }
  .leaf-container1 {
    top: 210px;
  }
  .leaf-container2 {
    top: 301px;
  }
  .leaf-container3 {
    top: 393px;
  }
  .leaf-box {
    position: absolute;
    backface-visibility: hidden;
    transform: rotateX(180deg);
    transition: transform 0.2s;
    top: 0;
    left: 0;
  }
  .leaf-box-ng {
    transform: rotateX(180deg);
  }
  :global(.fbox-leaf) {
    width: 130px;
  }
  span {
    position: absolute;
    top: 19px;
    left: 28px;
    font-size: 25px;
    font-weight: 700;
  }
  .ok {
    color: #fff;
  }
  .isValid {
    transform: rotateX(0);
  }
  @media (max-width: 1150px) {
    .deco-container {
      left: 10%;
    }
  }
  @media (max-width: 1000px) {
  }
  @media (max-width: 890px) {
    .deco-container {
      display: none;
    }
  }
  @media (max-width: 720px) {
    .deco-container {
      display: none;
    }
  }
  @media (max-width: 580px) {
  }
  @media (max-width: 460px) {
  }
</style>
