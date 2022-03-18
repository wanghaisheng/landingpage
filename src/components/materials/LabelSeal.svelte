<script>
  export let viewed = false,
    rotate = false
</script>

<div class:rotate>
  <span class="label one" class:viewed1="{viewed}">
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
  </span>

  <span class="label two" class:viewed2="{viewed}">
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
    OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO OLIANCHO
  </span>
</div>

<style>
  @keyframes go-round1 {
    to {
      transform: translate3d(300px, 0, 0);
    }
  }
  @keyframes go-round2 {
    to {
      transform: rotate(180deg) translate3d(300px, 0, 0);
    }
  }
  .viewed1 {
    animation: go-round1 20s linear infinite;
  }
  .viewed2 {
    animation: go-round2 20s linear infinite;
  }
  div {
    position: absolute;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
  }
  .label {
    position: absolute;
    font-size: 2.8rem;
    font-weight: 700;
    color: rgba(212, 202, 110, 0.6);
    white-space: nowrap;
    text-align: right;
    overflow: hidden;
    letter-spacing: 0.1rem;
  }
  .one {
    top: 0;
    right: 0;
  }
  .two {
    left: 0;
    bottom: 0;
    transform: rotate(180deg);
  }
  .rotate {
    transform: rotate(90deg);
    height: 100vw;
  }
  @media (max-width: 890px) {
    div {
      width: 200%;
      left: -40%;
    }
    .rotate {
      display: none;
    }
    .label {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 720px) {
    .label {
      font-size: 2rem;
    }
  }
</style>
