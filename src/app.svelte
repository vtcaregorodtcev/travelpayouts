<script>
  import { __ } from "./i18n.js";
  import Container from "./components/container.svelte";

  let locale = "en";

  $: dict = __(locale);
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  :global(:root) {
    --color-accent: #f4a622;
    --color-text: #fef9f1;
    --color-shadow: #ddd;
    --color-bg: #498fe1;

    --height-form-control: 36px;
    --border-radius: 2px;
    --font-size-text: 12px;

    --size-1024: 1024px;
    --size-768: 768px;
    --size-512: 512px;
    --size-256: 256px;
    --size-200: 200px;
  }
</style>

<div class="travelpayouts">
  <Container {locale} {dict} onLocaleChange={l => (locale = l)} />
</div>
