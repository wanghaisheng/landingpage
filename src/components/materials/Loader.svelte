<script>
  const rt = node => {
    return {
      duration: 400,
      css: () => `transform: translate(-50%, -50%) rotateX(-90deg)`,
    }
  }
</script>
<div transition:rt>
  {#each [1,2,3] as el}
  <span class="g{el}"></span>
  {/each}
</div>

<style>
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin: 24px auto;
    background: rgb(0, 0, 0);
    border-radius: 49px;
    animation: bubble 1.5s infinite alternate;
  }
  .g1 {
    animation-delay: 0s;
  }
  .g2 {
    animation-delay: 0.45s;
  }
  .g3 {
    animation-delay: 0.9s;
  }

  @keyframes bubble {
    0% {
      width: 10px;
      height: 10px;
      background-color: rgb(0, 0, 0);
      transform: translateY(0);
    }

    100% {
      width: 23px;
      height: 23px;
      background-color: rgb(255, 255, 255);
      transform: translateY(-20px);
    }
  }
</style>
