<script>
  export let onChange;
  export let locale;

  $: newLocale = locale == "en" ? "ru" : "en";

  const handleChange = e => {
    e.preventDefault();

    onChange(newLocale);
  };
</script>

<style>
  a {
    margin: 0 0 12px 10px;
    text-decoration: underline;
  }
</style>

<a href on:click={handleChange}>{newLocale}</a>
