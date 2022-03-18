<script>
  import {
    validateName,
    validateEmail,
    validateMsg,
  } from '../helpers/validation.js'
  import handleSubmit from '../helpers/http.js'
  import YellowCircle from '../materials/YellowCircle.svelte'
  import SubmitBtn from '../fragments/SubmitBtn.svelte'
  import FlowerBox from '../fragments/FlowerBox.svelte'
  import Thanks from '../fragments/Thanks.svelte'
  import Dot from '../materials/Dot.svelte'
  import Image from 'svelte-i-pack'

  let loading = false,
    thanks = { success: false, text: '' },
    name = '',
    email = '',
    message = '',
    dummy = ''

  $: isValid = [validateName(name), validateEmail(email), validateMsg(message)]
  $: validInput = isValid.every(el => el === true)

  const sendMessage = async () => {
    if (dummy || !name || !email || !message) return null
    loading = true
    const res = await handleSubmit({ name, email, message })

    thanks = { ...res }
    setTimeout(() => (thanks.text = ''), 5000)
    if (thanks.success) formInit()
    loading = false
  }
  const formInit = () => {
    name = ''
    email = ''
    message = ''
    dummy = ''
  }
</script>

<section id="contact" tabindex="-1">
  <YellowCircle contact></YellowCircle>
  <div class="h-box">
    <h1>
      お問い合わせ
      <Image
        src="pc/2x/line.contact.png"
        width="284*2"
        alt=""
        class="contact-line d-shadow-light"
        no-inline
      ></Image>
    </h1>
    <p class="title-p">
      ヒアリングからお見積もりまで<strong
        ><Dot sentence="無料" color="#fff" tall></Dot></strong
      >で受け付けております!<br />お気軽にご連絡ください :）
    </p>
  </div>

  <form on:submit|preventDefault="{ sendMessage }" novalidate="true">
    <FlowerBox isValidArr="{isValid}"></FlowerBox>

    <ul>
      <li class="hidden">
        <label>ここには入力しないでください。</label>
        <input id="dummy" bind:value="{dummy}" for="dummy" />
      </li>

      <li>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          bind:value="{name}"
          class:invalid="{ !isValid.name }"
        />
      </li>

      <li>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value="{email}"
          class:invalid="{ !isValid.email }"
        />
      </li>

      <li>
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          bind:value="{message}"
          class:invalid="{ !isValid.message }"
        ></textarea>
      </li>

      <li>
        <SubmitBtn
          id="form-submit"
          text="送信する"
          disabled="{!validInput || dummy}"
          {loading}
        ></SubmitBtn>
      </li>
    </ul>
    {#if thanks.text.length > 0}
    <Thanks
      {...thanks}
      on:exit="{() => thanks = {...thanks, text: ''}}"
    ></Thanks>
    {/if}
  </form>
</section>

<style>
  section {
    position: relative;
    margin-top: -95px;
    overflow: hidden;
    padding-bottom: 70px;
    padding-top: 70px;
  }
  .h-box {
    position: relative;
    margin: 0 auto;
    width: 38rem;
    left: 8%;
  }
  h1 {
    position: relative;
    margin-left: 11rem;
    display: inline-block;
    font-size: 2.2rem;
    line-height: 1.3;
    font-weight: 700;
  }
  :global(.contact-line) {
    position: absolute;
    width: 7.7em;
    bottom: -182%;
    right: 4%;
  }
  .title-p {
    font-size: 1.3rem;
    line-height: 2.1;
    margin-top: 5rem;
  }

  form {
    position: relative;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 2%;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .hidden {
    display: none;
  }
  li {
    position: relative;
    margin-bottom: 34px;
    display: flex;
    align-items: flex-start;
    font-family: var(--times);
  }
  li:last-child {
    align-self: center;
    margin: 10px 0 0 9.8rem;
  }
  label {
    margin-top: 8px;
    margin-right: 34px;
    font-size: 2.2rem;
  }
  input,
  textarea {
    padding: 0.7rem 1.2rem;
    width: 51vw;
    font-size: 1.8rem;
    border: none;
  }
  textarea {
    resize: none;
    height: 24rem;
  }
  input:focus,
  textarea:focus {
    outline: solid 2px var(--wine);
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  }
  li:focus-within:after {
    content: url('/svg/left-arrow.svg');
    width: 34px;
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-47%);
    filter: drop-shadow(0, 5px, 6px, var(--d-shadow));
  }
  @media (max-width: 1150px) {
    .h-box {
      left: 12%;
    }
  }
  @media (max-width: 1000px) {
    .title-p {
      margin-left: 2rem;
    }
    li:focus-within:after {
      width: 29px;
      right: -45px;
    }
  }
  @media (max-width: 890px) {
    section {
      background-image: url('/svg/waveback.svg');
      background-size: 100%;
      padding-top: 144px;
      padding-bottom: 64px;
      margin-top: -64px;
    }
    .h-box {
      width: 82%;
      left: unset;
      text-align: center;
    }
    h1 {
      margin-left: 4rem;
      font-size: 2rem;
    }
    .title-p {
      margin-left: 0;
    }
    form {
      left: unset;
    }
    input,
    textarea {
      font-size: 1.4rem;
      width: 59vw;
    }
    textarea {
      height: 18rem;
    }
    label {
      font-size: 1.9rem;
      margin-right: 27px;
    }
    li:last-child {
      margin-left: 0;
    }
    li:focus-within:after {
      width: 24px;
      right: -40px;
    }
  }
  @media (max-width: 720px) {
    section {
      padding-top: 112px;
    }
    h1 {
      font-size: 1.8rem;
      margin-left: 2rem;
    }
    .title-p {
      font-size: 1.2rem;
      margin-top: 4rem;
    }
    li {
      margin-bottom: 24px;
    }
    li:last-child {
      margin-top: 25px;
    }
    input,
    textarea {
      width: 67vw;
      font-size: 1.3rem;
    }
    textarea {
      height: 16rem;
    }
    label {
      font-size: 1.6rem;
      margin-right: 19px;
    }
    li:focus-within:after {
      width: 18px;
      right: -25px;
    }
  }
  @media (max-width: 580px) {
    section {
      margin-top: -44px;
      padding-top: 80px;
      padding-bottom: 48px;
    }
    h1 {
      font-size: 1.5rem;
      margin-left: 0;
    }
    .h-box {
      width: 87%;
    }
    .title-p {
      text-align: left;
      margin-top: 3rem;
    }
    form {
      margin-top: 1rem;
    }
    li {
      margin-bottom: 19px;
    }
    li:last-child {
      margin-top: 14px;
    }
    input,
    textarea {
      width: 73vw;
      font-size: 1.2rem;
      padding: 0.4rem 0.5rem;
    }
    textarea {
      height: 14rem;
    }
    label {
      font-size: 1.4rem;
      margin-right: 12px;
      margin-top: 4px;
    }
    li:focus-within:after {
      content: none;
    }
  }
  @media (max-width: 460px) {
    .h-box {
      width: 90%;
    }
    h1 {
      font-size: 1.4rem;
    }
    .title-p {
      font-size: 1rem;
    }
    form {
      margin-top: 1rem;
    }
    li {
      margin-bottom: 16px;
    }
    li:last-child {
      margin-left: 30px;
    }
    input,
    textarea {
      width: 68vw;
    }
    label {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }
</style>
