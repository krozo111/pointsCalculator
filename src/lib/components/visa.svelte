<script>
  import { visaSubclass } from "../stores";

  export let selection = { value: 0 };
  export let valueVisa = 0;
  $: valueVisa = selection.value;
  let selectedItem = "";

  $: reactivo = selectedItem;
</script>

<fieldset>
  <h2 class="subtitle">Visa Subclasss</h2>
  {#each $visaSubclass as option}
    <ul class="list">
      <label>
        <input
          type="radio"
          bind:group={selection}
          value={option}
          on:click={() => (selectedItem = option.info)}
        />
        {option.text} <small>({option.value} Points )</small>
      </label>
    </ul>
  {/each}
  <p>{reactivo}</p>
</fieldset>

<style>
  .subtitle {
    font-size: x-large;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  small {
    color: green;
  }
  fieldset {
    border: none;
    padding: 10px;
  }
  ul {
    margin-left: 30px;
  }
  h2 {
    margin-bottom: 10px;
  }
</style>
