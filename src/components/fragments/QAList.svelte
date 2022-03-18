<script>
  import { slide, fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  import FoldIcon from '../materials/FoldIcon.svelte'

  const qaList = [
    {
      q: '何日で納品可能ですか。',
      a:
        'ーシンプルプランで14日、プレミアムプランで一ヶ月程度が目安となります。 ただしご依頼内容やこちらのスケジュールにもよりますので、お急ぎの方はその旨お気軽にご相談ください。',
      toggled: false,
    },
    {
      q: '納品後の修正は可能ですか。',
      a:
        'ー配置変更や調整などは、小規模であれば喜んで無償対応致します。 不具合に関しては納品後一ヶ月以内であれば無償対応致します。',
      toggled: false,
    },
    {
      q: '制作費用は支払いはいつですか。',
      a:
        'ーご契約成立時に着手金をお支払いいただき、残りの制作費用は納品後一週間以内にお支払いただきます。 すべて契約書に記載がございますのでご安心ください。',
      toggled: false,
    },
    {
      q: '料金表にあるメニューしか受け付けていませんか。',
      a:
        'ー記載のあるものはほんの一例です！ ご要望やご予算に応じて柔軟に対応させていただきます。お気軽にご相談ください。',
      toggled: false,
    },
    {
      q: '連絡手段は何ですか。',
      a:
        'ー現在海外を転々としているため、基本的にメールやチャット、インターネット通話(ビデオ可）でのやりとりとなります。',
      toggled: false,
    },
    {
      q: '依頼するかどうかまだ決めていないんですが、見積もりを依頼できますか。',
      a:
        'ーもちろん可能です。ご不明点やご要望を伺い、みなさまにぴったりのご提案をさせていただきます。 ステキな関係を築きたいと思っておりますので、どうぞお気軽にご連絡ください。',
      toggled: false,
    },
  ]

  let expanded = null
  const toggle = i => () => {
    if (expanded !== null) {
      qaList[expanded].toggled = false
      if (expanded === i) {
        return (expanded = null)
      }
    }
    qaList[i].toggled = true
    expanded = i
  }

  const pressed = i => event => {
    if (event.key !== 'Enter') return
    toggle(i)()
  }
</script>

<dl>
  {#each qaList as item, i (item.q)}
  <div class="list-box" on:click="{toggle(i)}" on:keydown="{pressed(i)}">
    <dt class:dt-expanded="{item.toggled}">
      <img src="img/q{i+1}.png" alt="" class="img-q" />
      <div class="text-qa">{ item.q }</div>
      <FoldIcon toggled="{item.toggled}"></FoldIcon>
    </dt>
    {#if item.toggled}
    <dd transition:slide="{{easing: quintOut}}">
      <img src="img/a{i+1}.png" alt="" class="img-a" />
      <div class="text-qa">{ item.a }</div>
    </dd>
    {/if}
  </div>
  {/each}
</dl>

<style>
  img {
    position: absolute;
    filter: drop-shadow(0px 3px 6px var(--d-shadow));
  }

  dl {
    margin: 1.8rem 0 0;
    width: 72.3%;
    position: relative;
    font-size: 1rem;
  }
  .list-box {
    margin-bottom: 67px;
    cursor: pointer;
    user-select: none;
  }
  dt {
    position: relative;
    background-color: var(--wine);
    color: var(--cream);
    border-radius: 10px;
    font-size: 1.56em;
    font-weight: 700;
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
  }
  dt:hover {
    opacity: 0.9;
  }
  .dt-expanded {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .text-qa {
    padding: 1rem 3rem 1rem 151px;
    line-height: 1.9;
  }
  .img-q {
    height: 165px;
    top: -60px;
    left: 32px;
  }
  dd {
    position: relative;
    background-color: var(--cream);
    border-radius: 0 0 10px 10px;
    font-size: 1.4em;
    box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.2);
  }
  .img-a {
    height: 119px;
    left: 46px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 1150px) {
    dl {
      width: 78%;
    }
  }
  @media (max-width: 1000px) {
    dl {
      font-size: 0.9rem;
      width: 81%;
    }
  }
  @media (max-width: 890px) {
    dl {
      width: 85%;
      font-size: 0.8rem;
    }
    .list-box {
      margin-bottom: 53px;
    }
    .img-q {
      height: 115px;
      top: 56%;
      left: 24px;
      transform: translateY(-50%);
    }
    .img-a {
      left: 29px;
    }
    .text-qa {
      padding: 0.8rem 1.6rem 0.8rem 110px;
    }
  }
  @media (max-width: 720px) {
    dl {
      margin-top: 1.3rem;
      font-size: 0.65rem;
    }
    .list-box {
      margin-bottom: 48px;
    }
    .img-q {
      height: 101px;
    }
    .img-a {
      height: 101px;
    }
    .text-qa {
      padding: 0.7rem 1.3rem 0.7rem 100px;
    }
  }
  @media (max-width: 580px) {
    dl {
      font-size: 0.6rem;
    }
    .list-box {
      margin-bottom: 43px;
    }
    .img-q {
      left: 17px;
    }
    .img-a {
      left: 22px;
    }
    .text-qa {
      padding: 0.7rem 1.1rem 0.7rem 87px;
    }
  }
  @media (max-width: 460px) {
    dl {
      width: 88%;
    }
    .text-qa {
      padding-left: 80px;
    }
  }
</style>
