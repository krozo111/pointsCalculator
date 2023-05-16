<script>
    // @ts-nocheck
    import {
      visaSubclass,
      ageClass,
      overseasSkill,
      englishLevel,
      australianSkill,
      educationQual,
      partnerSkills,
    } from "../stores";
  
    let selection1 = { value: 0 };
    let selection2 = { value: 0 };
    let selection3 = { value: 0 };
    let selection4 = { value: 0 };
    let selection5 = { value: 0 };
    let selection6 = { value: 0 };
    let selection7 = 0;
    let selection8 = 0;
    let selection9 = 0;
    let selection10 = 0;
    let selection11 = { value: 0 };
    let result = 0;
    let checkedAusStudy = false;
    let checkedPY = false;
    let checkedNaati = false;
    let checkedRegional = false;
    const handleChange = (e) => {
      if (e.target.checked) {
        selection7 = 10;
      } else {
        selection7 = 0;
      }
    };
    const handleChangePY = (e) => {
      if (e.target.checked) {
        selection8 = 5;
      } else {
        selection8 = 0;
      }
    };
    const handleChangeNaati = (e) => {
      if (e.target.checked) {
        selection9 = 5;
      } else {
        selection9 = 0;
      }
    };
    const handleChangeRegional = (e) => {
      if (e.target.checked) {
        selection10 = 5;
      } else {
        selection10 = 0;
      }
    };
    $: result =
      selection1.value +
      selection2.value +
      selection3.value +
      selection4.value +
      selection5.value +
      selection6.value +
      selection7 +
      selection8 +
      selection9 +
      selection10 +
      selection11.value;
  
    let selectedItem = "";
  
    $: reactivo = selectedItem;
  </script>
  
  <svelte:head>
    <title>Points Calculator</title>
    <meta name="description" content="PointsCalculator" />
  </svelte:head>
  
  <section>
    <h1>Skilled Migration Points Calculator</h1>
    <p>
      Points are awarded on the basis of the factors listed in the following
      table. All factors are assessed as they are at the time you are invited to
      apply for this visa
    </p>
  
    <fieldset>
      <h2 class="subtitle">Visa Subclasss</h2>
      {#each $visaSubclass as option}
        <ul class="list">
          <label>
            <input
              type="radio"
              bind:group={selection1}
              value={option}
              on:click={() => (selectedItem = option.info)}
            />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
      <p>{reactivo}</p>
    </fieldset>
  
    <fieldset>
      <h2 class="subtitle">Which age band do you fit into?</h2>
      {#each $ageClass as option}
        <ul class="list">
          <label>
            <input type="radio" bind:group={selection2} value={option} />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
    </fieldset>
    <fieldset>
      <h2 class="subtitle">How would you rate your English language ability?</h2>
  
      {#each $englishLevel as option}
        <ul class="list">
          <label>
            <input type="radio" bind:group={selection3} value={option} />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
    </fieldset>
    <fieldset>
      <h2 class="subtitle">Overseas skilled employment – (outside Australia)</h2>
  
      {#each $overseasSkill as option}
        <ul class="list">
          <label>
            <input type="radio" bind:group={selection4} value={option} />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
    </fieldset>
    <fieldset>
      <h2 class="subtitle">Australian skilled employment – (in Australia)</h2>
      {#each $australianSkill as option}
        <ul class="list">
          <label>
            <input type="radio" bind:group={selection5} value={option} />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
    </fieldset>
    <fieldset>
      <h2 class="subtitle">Educational qualifications</h2>
      {#each $educationQual as option}
        <ul class="list">
          <label>
            <input type="radio" bind:group={selection6} value={option} />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
    </fieldset>
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
    <fieldset>
      <h2 class="subtitle">Professional Year in Australia</h2>
  
      <ul class="list">
        <label>
          <label>
            <input
              type="checkbox"
              bind:checked={checkedPY}
              on:change={handleChangePY}
            />
          Completion of a Professional Year in Australia.
          <small>(5 Points )</small>
        </label>
      </ul>
    </fieldset>
    <fieldset>
      <h2 class="subtitle">Credentialed community language</h2>
  
      <ul class="list">
        <label>
          <label>
            <input
              type="checkbox"
              bind:checked={checkedNaati}
              on:change={handleChangeNaati}
            />
          Hold a recognised qualification in a credentialed community language.
          <small>(5 Points )</small>
        </label>
      </ul>
    </fieldset>
    <fieldset>
      <h2 class="subtitle">Study in regional Australia</h2>
      <ul class="list">
        <label>
          <label>
            <input
              type="checkbox"
              bind:checked={checkedRegional}
              on:change={handleChangeRegional}
            />
          You must have at least 1 degree, diploma or trade qualification from an Australian
          educational institution that satisfies the Australian study requirement obtained
          while living and studying in an eligible area of regional Australia.
          <small>(5 Points )</small>
        </label>
      </ul>
  
      <p>
        To be eligible for the award of points your educational qualification:
      </p>
      <ul>
        <li>must meet the Australian study requirement</li>
        <li>
          have been obtained while you lived in, and studied at a campus in, a
          designated regional area
        </li>
        <li>not include study undertaken by distance education</li>
      </ul>
    </fieldset>
    <fieldset>
      <h2 class="subtitle">Partner skills</h2>
      <p>
        For you to be eligible for the award of these points your partner must be
        an applicant for the same visa subclass and must not be an Australian
        permanent resident or an Australian citizen. Additionally, you will need
        to provide evidence that when you were invited to apply for this visa that
        they:
      </p>
      <ul>
        <li>were under 45 years old</li>
        <li>had competent English</li>
        <li>
          had nominated a skilled occupation that is on the same skilled
          occupation list as your nominated skilled occupation
        </li>
        <li>
          had a suitable skills assessment from the relevant assessing authority
          for their nominated skilled occupation, and the assessment wasn’t for a
          Subclass 485 visa
        </li>
      </ul>
  
      {#each $partnerSkills as option}
        <ul class="list">
          <label>
            <input type="radio" bind:group={selection11} value={option} />
            {option.text} <small>({option.value} Points )</small>
          </label>
        </ul>
      {/each}
    </fieldset>
    {console.log("total", result)}
    <h1>Total Points is: {result}</h1>
  </section>
  
  <style>
    section {
      display: flex;
      flex-direction: column;
      flex: 0.6;
    }
  
    h1 {
      color: --color-text;
    }
    .subtitle {
      font-size: x-large;
    }
  
    small {
      color: green;
    }
  
    .list {
      display: flex;
      flex-direction: column;
    }
    fieldset {
      border: none;
      padding: 10px;
    }
    p{
    margin: 20px;
}
ul {
  margin-left: 30px;
}
h2{
  margin-bottom: 10px;
}
  </style>
  
  