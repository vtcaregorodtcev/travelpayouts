<script>
  export let text = "Search";
</script>

<style>
  button {
    text-transform: uppercase;
    width: 100%;
    height: var(--height-form-control);
    background: var(--color-accent);
    color: var(--color-text);
    box-shadow: 0px 1px 1px 0px var(--color-shadow);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  button:hover {
    background: var(--color-accent);
    filter: brightness(105%);
  }
  button:active {
    background: var(--color-accent);
    filter: brightness(115%);
  }
</style>

<button>{text}</button>
