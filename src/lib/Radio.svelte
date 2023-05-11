<script>
  let ageClass = [
    { id: 1, text: "at least 18 but less than 25 years", value: 25 },
    { id: 2, text: "at least 25 but less than 33 years", value: 30 },
    { id: 3, text: "at least 33 but less than 40 years", value: 25 },
    { id: 4, text: "at least 40 but less than 45 years", value: 15 },
    { id: 5, text: "over 45 years", value: 0 },
  ];
  
    let selection2 = ageClass[4];

</script>

<fieldset>
    <h2 class="subtitle">Which age band do you fit into?</h2>
    {#each ageClass as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection2} value={option} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>