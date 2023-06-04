<script>
    import { overseasSkill } from "../stores";
  
    export let selection = { value: 0 };
    export let valueOverseas = 0;
    $: valueOverseas = selection.value;
  </script>
  
  <fieldset>
    <h2 class="subtitle">Overseas skilled employment – (outside Australia)</h2>

    {#each $overseasSkill as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection} value={option} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
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
  