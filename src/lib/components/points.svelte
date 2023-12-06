<script>
  import Age from "./age.svelte";
  import Visa from "./visa.svelte";

  export let selection = { value: 0 };
  /* penisnte por arreglar esto para qsume sin necesidad de declarar muchas varibles */
  $: result = selection.value;
</script>

<Visa bind:selection />
<Age bind:selection />

{result}
