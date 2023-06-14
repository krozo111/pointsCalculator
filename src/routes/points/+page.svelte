<script>
  // @ts-nocheck

  import Age from "$lib/components/age.svelte";
  import Visa from "$lib/components/visa.svelte";
  import English from "$lib/components/english.svelte";
  import Qualifications from "$lib/components/qualifications.svelte";
  import OverseasSkill from "$lib/components/overseasSkill.svelte";
  import AustralianSkill from "$lib/components/australianSkill.svelte";
  import Partner from "$lib/components/partner.svelte";
  import AusStudy from "$lib/components/ausStudy.svelte";
  import Py from "$lib/components/py.svelte";
  import Naati from "$lib/components/naati.svelte";
  import Regional from "$lib/components/regional.svelte";

  let valueAge = 0;
  let valueVisa = 0;
  let valueEnglish = 0;
  let valueOverseas = 0;
  let valueAustralian = 0;
  let valueQuali = 0;
  let valueAusStudy = 0;
  let valuePY = 0;
  let valueNaati = 0;
  let valueRegional = 0;
  let valuePartner = 0;
  let result = 0;

  $: result =
    valueAge +
    valueVisa +
    valueEnglish +
    valueOverseas +
    valueAustralian +
    valueQuali +
    valueAusStudy +
    valuePY +
    valueNaati +
    valueRegional +
    valuePartner;
</script>

<svelte:head>
  <title>Points Calculator</title>
  <meta name="PointsCalculator" content="PointsCalculator" />
</svelte:head>

<section>
  <h1>Skilled Migration Points Calculator</h1>
  <p>
    Points are awarded on the basis of the factors listed in the following
    table. All factors are assessed as they are at the time you are invited to
    apply for this visa
  </p>

  <div class="calculator">
  <Visa bind:valueVisa />
  <Age bind:valueAge />
  <English bind:valueEnglish />
  <OverseasSkill bind:valueOverseas />
  <AustralianSkill bind:valueAustralian />
  <Qualifications bind:valueQuali />
  <AusStudy bind:valueAusStudy />
  <Py bind:valuePY />
  <Naati bind:valueNaati />
  <Regional bind:valueRegional />
  <Partner bind:valuePartner />
</div>
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

  p {
    margin: 20px;
  }



</style>
