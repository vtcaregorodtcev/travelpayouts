<script>
  import CalendarIcon from "./calendar-icon.svelte";

  export let value;
  export let placeholder;
</script>

<style>
  .date-input {
    position: relative;
  }
  .icon {
    position: absolute;
    top: calc(var(--height-form-control) / 2 + 2px);
    right: 10px;
    transform: translateY(-50%);
  }
  input {
    width: 100%;
    height: var(--height-form-control);
    border-radius: var(--border-radius);
    padding: 0 27px 0 10px;
    border: none;
  }
</style>

<div class="date-input">
  <input type="text" bind:value {placeholder} />
  <div class="icon">
    <CalendarIcon />
  </div>
</div>
