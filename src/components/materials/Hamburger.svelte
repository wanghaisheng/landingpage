<script>
  import { tweened } from 'svelte/motion'

  export let expanded

  const duration = 200
  const y2 = tweened(2, { duration })
  const y1 = tweened(14, { duration })

  $: {
    expanded ? ($y2 = 14) : ($y2 = 2)
    expanded ? ($y1 = 2) : ($y1 = 14)
  }
</script>
<svg viewBox="0 0 16 16" on:click|stopPropagation aria-hidden="true">
  <g class="lines">
    <line x1="0" x2="16" y1="2" y2="{$y2}" />
    <line class="line2" x1="0" x2="16" y1="8" y2="8" class:expanded />
    <line x1="0" x2="16" y1="14" y2="{$y1}" />
  </g>
</svg>

<style>
  svg {
    display: none;
    width: 40px;
    margin-left: 29px;
    margin-right: 18px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  svg:hover {
    transform: scale(1.1);
  }
  .lines {
    stroke: #fff;
    stroke-width: 1;
  }
  .line2 {
    transition: transform 0.1s;
    transform-origin: center;
  }
  .expanded {
    transform: scaleX(0);
  }
  @media (max-width: 890px) {
    svg {
      display: block;
    }
  }
  @media (max-width: 580px) {
    svg {
      width: 32px;
      margin-left: 18px;
    }
  }
</style>
