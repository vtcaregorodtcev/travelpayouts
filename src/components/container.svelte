<script>
  export let dict;
  export let locale;
  export let onLocaleChange;

  import Button from "./button.svelte";
  import DateInput from "./date-input.svelte";
  import Header from "./header.svelte";
  import Paragraph from "./paragraph.svelte";
  import RuEnSwitch from "./ru-en-switch.svelte";
</script>

<style>
  .container {
    background: var(--color-bg);
    padding: 10px 20px;
    max-width: var(--size-1024);
    min-width: var(--size-200);
    margin: 0 auto;
  }

  .locale {
    display: flex;
    align-items: center;
  }

  .text-content,
  .content,
  .dates {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .text-content {
    width: 100%;
    justify-content: stretch;
  }

  .dates {
    width: 70%;
    justify-content: space-between;
  }

  .date-item {
    width: calc(50% - 10px);
  }

  .text {
    width: var(--size-256);
    margin-right: 15px;
  }

  .content {
    width: calc(100% - var(--size-256) - 15px);
    justify-content: space-between;
  }

  .button {
    width: var(--size-200);
  }

  @media (max-width: 1030px) {
    .text-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .text,
    .content {
      width: 100%;
    }

    .content,
    .dates {
      justify-content: space-between;
    }

    .dates {
      width: 66%;
    }

    .button {
      width: 30%;
    }
  }

  @media (max-width: 550px) {
    .button,
    .dates {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .date-item {
      width: 100%;
    }
    .text-content {
      flex-direction: column-reverse;
    }
  }
</style>

<div class="container">
  <div class="row locale">
    <Header text={dict('Where does it come from? Why do we use it?')} />
    <RuEnSwitch {locale} onChange={onLocaleChange} />
  </div>
  <div class="row">
    <div class="text-content">
      <div class="text">
        <Paragraph
          text={dict("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")} />
      </div>
      <div class="content">
        <div class="dates">
          <div class="date-item">
            <DateInput placeholder={dict('Depart Date')} />
          </div>
          <div class="date-item">
            <DateInput placeholder={dict('Return Date')} />
          </div>
        </div>
        <div class="button">
          <Button text={dict('Search')} />
        </div>
      </div>
    </div>
  </div>
</div>
