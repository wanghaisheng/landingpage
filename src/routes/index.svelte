<script context="module">
  let vh, vw
  if (process.browser) {
    vh = window.innerHeight * 0.4
    vw = window.innerWidth
  }
</script>
<script>
  import { onMount } from 'svelte'

  import smoothScroller from '../components/helpers/smoothScroller.js'
  import detectIE from '../components/helpers/detectIE.js'
  import Navbar from '../components/layouts/Navbar.svelte'
  import Hero from '../components/layouts/Hero.svelte'
  import Intro from '../components/layouts/Intro.svelte'
  import Features from '../components/layouts/Features.svelte'
  import Comparison from '../components/layouts/Comparison.svelte'
  import Flow from '../components/layouts/Flow.svelte'
  import Price from '../components/layouts/Price.svelte'
  import QA from '../components/layouts/QA.svelte'
  import Contact from '../components/layouts/Contact.svelte'
  import Bottoms from '../components/layouts/Bottoms.svelte'

  const isIE = detectIE()

  let showNav = false,
    inView = '',
    prevHeight = 0,
    scroller

  // Intersection Observer config
  const cbDesk = (entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.id
      const height = entry.intersectionRect.height

      if (height > vh && height > prevHeight) {
        inView = id
      }
      prevHeight = height
    })
  }
  const cbMobile = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        inView = id
      }
    })
  }
  const buildThreshold = steps => {
    let thresholds = []
    for (let i = 1.0; i <= steps; i++) {
      let ratio = i / steps
      thresholds.push(ratio)
    }
    thresholds.push(0)
    return thresholds
  }
  //////////////////////////////////////

  onMount(() => {
    scroller = smoothScroller()

    const sections = document.querySelectorAll('section')
    const cb = vw > 890 ? cbDesk : cbMobile
    const observer = new IntersectionObserver(cb, {
      threshold: buildThreshold(12),
    })
    sections.forEach(el => observer.observe(el))
  })
</script>

<Navbar {inView} {showNav} {scroller}></Navbar>

{#if isIE} {#await import('../components/fragments/noIE.svelte') then c}
<svelte:component this="{c.default}"></svelte:component>
{/await} {/if}

<main>
  <Hero on:done="{() => showNav = true}"></Hero>
  <Intro inview="{inView === 'intro'}"></Intro>
  <Features inview="{inView === 'features'}" {scroller}></Features>
  <Comparison inview="{inView === 'comparison'}"></Comparison>
  <Flow inview="{inView === 'flow'}"></Flow>
  <Price inview="{inView === 'price'}"></Price>
  <QA inview="{inView === 'qa'}"></QA>
  <Contact></Contact>
</main>
<Bottoms></Bottoms>
<style global>
  :root {
    /* colors */
    --wine: #842612;
    --ocher: #d4ca6e;
    --cream: #f5f4ee;
    --shadow: rgba(0, 0, 0, 0.2);
    --d-shadow: rgba(0, 0, 0, 0.3);
    /* fonts */
    --noto: 'Noto Sans', Roboto, sans-serif;
    --gothic: YuGothic, '游ゴシック体', 'Yu Gothic', Roboto, sans-serif;
    --times: 'Times New Roman', Times, serif;
    /* others */
    --skl: 7deg;
    --skr: -4deg;
    scroll-behavior: smooth;
  }
  body {
    font-family: var(--gothic);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  main {
    overflow: hidden;
  }
  section:focus {
    outline: none;
  }
  .d-shadow {
    filter: drop-shadow(5px 5px 3px var(--shadow));
  }
  .d-shadow-light {
    filter: drop-shadow(0px 3px 5px var(--d-shadow));
  }
  .abs {
    position: absolute;
  }

  .skl,
  .skr {
    transition: transform 0.2s;
  }
  .skl:hover {
    transform: skew(var(--skl)) scale(1.04);
  }
  .skr:hover {
    transform: skew(var(--skr)) scale(1.01);
  }
</style>
