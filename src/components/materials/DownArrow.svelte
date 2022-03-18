<script>
  export let color = '#fff'
</script>
<div style="--color:{color}"></div>

<style>
  div {
    width: 0;
    height: 0;
    border-top: 40px solid var(--color);
    border-right: 75px solid transparent;
    border-left: 75px solid transparent;
    filter: drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.2));

    position: absolute;
    bottom: -39px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
