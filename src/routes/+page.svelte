<script>
  let selection1 = 0;
  let selection2 = 0;
  let selection3 = 0;
  let selection4 = 0;
  let selection5 = 0;
  let selection6 = 0;
  let selection7 = 0;
  let selection8 = 0;
  let selection9 = 0;
  let selection10 = 0;
  let selection11 = 0;
  let result = 0;
  let visaSubclass = [
    {
      id: 1,
      text: "Skilled Work Regional 491 visa (Provisional)",
      value: 15,
      info: "Requires sponsorship by a relative living in a regional area or a state or territory government. 491 visa information.",
    },
    {
      id: 2,
      text: "Skilled Nominated 190 visa (Permanent)",
      value: 5,
      info: "Allows skilled workers who are nominated by an Australian state or territory government to live and work in Australia as a permanent resident. Your occupation must be on the Skilled Occupation List.",
    },
    {
      id: 3,
      text: "Skilled Independent 189 visa (Permanent",
      value: 0,
      info: "Skilled workers who are not sponsored by an employer or family member or nominated by a state or territory government. Your occupation must be on the Skilled Occupation List.",
    },
  ];
  let ageClass = [
    { id: 1, text: "at least 18 but less than 25 years", value: 25 },
    { id: 2, text: "at least 25 but less than 33 years", value: 30 },
    { id: 3, text: "at least 33 but less than 40 years", value: 25 },
    { id: 4, text: "at least 40 but less than 45 years", value: 15 },
    { id: 5, text: "over 45 years", value: 0 },
  ];
  let overseasSkill = [
    { id: 1, text: "Less than 3 years", value: 0 },
    { id: 2, text: "At least 3 but less than 5 years", value: 5 },
    { id: 3, text: "At least 5 but less than 8 years", value: 10 },
    { id: 4, text: "At least 8 years", value: 15 },
  ];
  let englishLevel = [
    { id: 1, text: "Compentent English", value: 0 },
    { id: 2, text: "Proficient English", value: 10 },
    { id: 3, text: "Superior English", value: 20 },
  ];
  let australianSkill = [
    { id: 1, text: "Less than 1 year", value: 0 },
    { id: 2, text: "At least 1 but less than 3 years", value: 5 },
    { id: 3, text: "At least 3 but less than 5 years", value: 10 },
    { id: 4, text: "At least 5 but less than 8 years", value: 15 },
    { id: 5, text: "At least 8 years", value: 20 },
  ];
  let educationQual = [
    {
      id: 1,
      text: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.",
      value: 20,
    },
    {
      id: 2,
      text: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.",
      value: 15,
    },
    {
      id: 3,
      text: "A diploma or trade qualification from an Australian educational institution.",
      value: 10,
    },
    {
      id: 4,
      text: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation.",
      value: 10,
    },
    { id: 5, text: "No Recognised Qualifications.", value: 0 },
  ];
  let masterStudy = [
    {
      id: 1,
      text: "Meet the Australian study requirement. You must have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement.",
      value: 10,
    },
  ];
  let professionalYear = [
    {
      id: 1,
      text: "Completion of a Professional Year in Australia.",
      value: 5,
    },
  ];
  let naati = [
    {
      id: 1,
      text: "Hold a recognised qualification in a credentialed community language.",
      value: 5,
    },
  ];
  let regionalStudy = [
    {
      id: 1,
      text: "You must have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia.",
      value: 5,
    },
  ];
  let partnerSkills = [
    {
      id: 1,
      text: "Your spouse or de facto partner is also an applicant for this visa and meets age, English and skill criteria.",
      value: 10,
    },
    {
      id: 2,
      text: "Your spouse or de facto partner is also an applicant for this visa and has competent English. ",
      value: 5,
    },
    {
      id: 3,
      text: "You are single or your partner is an Australian citizen or permanent resident.",
      value: 10,
    },
  ];
  $: result =
    selection1 +
    selection2 +
    selection3 +
    selection4 +
    selection5 +
    selection6 +
    selection7 +
    selection8 +
    selection9 +
    selection10 +
    selection11;
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
    {#each visaSubclass as option}
      <ul class="list">
        <label>
          <input
            type="radio"
            bind:group={selection1}
            value={option.value}
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
    {#each ageClass as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection2} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">How would you rate your English language ability?</h2>

    {#each englishLevel as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection3} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Overseas skilled employment – (outside Australia)</h2>

    {#each overseasSkill as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection4} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Australian skilled employment – (in Australia)</h2>
    {#each australianSkill as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection5} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Educational qualifications</h2>
    {#each educationQual as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection6} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Australian study requirement</h2>
    {#each masterStudy as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection7} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Professional Year in Australia</h2>
    {#each professionalYear as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection8} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Credentialed community language</h2>
    {#each naati as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection9} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>
  <fieldset>
    <h2 class="subtitle">Study in regional Australia</h2>
    {#each regionalStudy as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection10} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
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

    {#each partnerSkills as option}
      <ul class="list">
        <label>
          <input type="radio" bind:group={selection11} value={option.value} />
          {option.text} <small>({option.value} Points )</small>
        </label>
      </ul>
    {/each}
  </fieldset>

  {#if result !== 0}
    <h1>Total Points is: {result}</h1>
  {/if}
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
  }
</style>
