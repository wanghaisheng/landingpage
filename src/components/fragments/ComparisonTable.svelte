<script>
  import SCircle from '../materials/SCircle.svelte'
  import DCircle from '../materials/DCircle.svelte'
  import Triangle from '../materials/Triangle.svelte'
</script>
<table>
  <tr>
    <th class="blank"></th>
    <th class="text-xl">一般的な<br />大手WEBサイト制作会社</th>
    <th class="text-3xl">OliAncho</th>
  </tr>
  <tr>
    <th class="text-2xl">デザイン性</th>
    <td><Triangle></Triangle></td>
    <td><DCircle></DCircle></td>
  </tr>
  <tr>
    <th class="text-2xl">値段の安さ</th>
    <td><Triangle></Triangle></td>
    <td><DCircle></DCircle></td>
  </tr>
  <tr>
    <th class="text-2xl">納品スピード</th>
    <td><DCircle></DCircle></td>
    <td><Triangle></Triangle></td>
  </tr>
  <tr>
    <th class="text-2xl">保証やサポート</th>
    <td><SCircle></SCircle></td>
    <td><DCircle></DCircle></td>
  </tr>
</table>

<style>
  table {
    border-spacing: 20px;
    border-collapse: separate;
    font-size: 1rem;
  }
  th,
  td {
    height: 6rem;
    width: 15.5rem;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
  }
  td {
    font-size: 2.8rem;
    color: var(--ocher);
    font-weight: 900;
  }
  .text-xl {
    font-size: 1.25em;
  }
  .text-2xl {
    font-size: 1.56em;
  }
  .text-3xl {
    font-size: 1.87em;
    color: #fff;
  }
  tr > *:last-child {
    background-color: #842612;
  }
  .blank {
    background-color: transparent;
  }

  @media (max-width: 890px) {
    table {
      font-size: 0.92rem;
    }
  }
  @media (max-width: 720px) {
    table {
      margin: 0;
      border-spacing: 11px;
      width: 94%;
      font-size: 0.73rem;
    }
    th,
    td {
      height: 4rem;
      width: 30%;
    }
  }
  @media (max-width: 580px) {
    table {
      width: 96%;
      font-size: 0.58rem;
    }
  }
  @media (max-width: 460px) {
    table {
      border-spacing: 6px;
      font-size: 0.49rem;
    }
  }
</style>
