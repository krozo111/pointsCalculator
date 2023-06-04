<script>
    import { partnerSkills } from "../stores";
  
    export let selection = { value: 0 };
    export let valuePartner = 0;
    $: valuePartner = selection.value;
  </script>
  
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
        Subclass 485 visa.
      </li>
    </ul>

    {#each $partnerSkills as option}
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
  