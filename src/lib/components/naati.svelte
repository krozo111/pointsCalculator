<script>
    // @ts-nocheck
    
        let checkedNaati = false;
       export let valueNaati = 0;
        let selection = 0;
        $: valueNaati = selection;
    
    const handleChange = (e) => {
      if (e.target.checked) {
        selection = 5;
      } else {
        selection = 0;
      }
    };
    </script>
    
    <fieldset>
        <h2 class="subtitle">Credentialed community language</h2>
    
        <ul class="list">
          <label>
            <label>
              <input
                type="checkbox"
                bind:checked={checkedNaati}
                on:change={handleChange}
              />
              Hold a recognised qualification in a credentialed community language.
              <small>(5 Points )</small>
            </label>
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