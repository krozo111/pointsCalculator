<script>
  // @ts-nocheck
  let plate = "";
  let apiData = null;
  let apiUrl = `https://sa-rego-check.p.rapidapi.com/check?rego=`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8497073820mshfb73fe01c6bd2fep18c70djsn0c33392dda74",
      "X-RapidAPI-Host": "sa-rego-check.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    const response = await fetch(apiUrl + plate, options);
    const data = await response.json();
    apiData = data.msgs;
    console.log(apiData);
  };
</script>

<h1>REGO LOOK UP</h1>

<label for="dynamicInput">Enter plate: </label>
<input type="text" id="dynamicInput" bind:value={plate} on:input={fetchData} />

{#if apiData}
  <h1>Plate Number {apiData.plate}</h1>
  <h2>Make {apiData.make}</h2>
  <p>Body Type {apiData.bodyType}</p>
  <p>Expiry Date {apiData.expiryDate}</p>
  <p>Plate Type {apiData.plateType}</p>
  <p>Color {apiData.primaryColour}</p>
  <p>CTP Insurer {apiData.ctpInsurer}</p>
{:else}
  <p>Please insert number plate.</p>
{/if}
