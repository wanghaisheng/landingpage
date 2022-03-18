<span>
  <slot></slot>
  <img src="/svg/peke.svg" alt="" class="pk" />
  <img src="/svg/right-arrow.svg" alt="" class="ar" />
</span>

<style>
  span {
    font-size: 0.5em;
    font-weight: 500;
    position: relative;
  }
  .pk {
    position: absolute;
    top: 50%;
    left: 36%;
    transform: translate(-50%, -50%);
    width: 2.76em;
  }
  .ar {
    width: 0.66em;
    margin: 0 7px 0 3px;
  }
  @media (max-width: 580px) {
    span {
      font-size: 0.55em;
    }
  }
</style>
