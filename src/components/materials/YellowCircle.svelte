<script>
  export let comp = false,
    price = false,
    contact = false
</script>
<div class:comp class:price class:contact></div>

<style>
  div {
    width: 1506px;
    height: 1506px;
    background-color: var(--ocher);
    border-radius: 50%;
    position: absolute;
  }
  .comp {
    top: -15.5%;
    right: 30%;
  }
  .price {
    top: -22%;
    left: 40%;
  }
  .contact {
    top: 0;
    left: -22%;
    width: 140vw;
    min-width: 1900px;
    height: 100vw;
    min-height: 1500px;
  }

  @media (max-width: 1150px) {
    .price {
      top: -17%;
      left: 32%;
    }
    .contact {
      left: -30%;
    }
  }
  @media (max-width: 1000px) {
    .comp {
      right: 27%;
    }
    .price {
      left: 25%;
    }
    .contact {
      left: -50%;
    }
  }
  @media (max-width: 890px) {
    .comp {
      top: -18%;
      right: 19%;
      width: 1400px;
      height: 1400px;
    }
    .contact {
      display: none;
    }
  }
  @media (max-width: 720px) {
    .comp,
    .price {
      width: 1000px;
      height: 1000px;
    }
    .comp {
      top: -21%;
    }
  }
  @media (max-width: 580px) {
    .comp {
      top: -16%;
      width: 970px;
      height: 970px;
    }
    .price {
      width: 870px;
      height: 870px;
      top: -9%;
      left: 20%;
    }
  }
  @media (max-width: 460px) {
    .comp {
      top: -19%;
    }
    .price {
      width: 830px;
      height: 830px;
      top: -12%;
      left: 16%;
    }
  }
</style>
