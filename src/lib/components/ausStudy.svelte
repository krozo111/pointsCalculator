<script>
// @ts-nocheck

    let checkedAusStudy = false;
   export let valueAusStudy = 0;
    let selection = 0;
    $: valueAusStudy = selection;

const handleChange = (e) => {
  if (e.target.checked) {
    selection = 10;
  } else {
    selection = 0;
  }
};
</script>

<fieldset>
  <h2 class="subtitle">Australian study requirement</h2>

  <ul class="list">
    <label>
      <input
        type="checkbox"
        bind:checked={checkedAusStudy}
        on:change={handleChange}
      />
      Meet the Australian study requirement. You must have at least 1 degree, diploma
      or trade qualification from an Australian educational institution that meets
      the Australian study requirement.
      <small>(10 Points )</small>
    </label>
  </ul>
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