<script>
    // @ts-nocheck
    
        let checkedPY = false;
       export let valuePY = 0;
        let selection = 0;
        $: valuePY = selection;
    
    const handleChange = (e) => {
      if (e.target.checked) {
        selection = 5;
      } else {
        selection = 0;
      }
    };
    </script>
    
    <fieldset>
        <h2 class="subtitle">Professional Year in Australia</h2>
    
        <ul class="list">
          <label>
            <label>
              <input
                type="checkbox"
                bind:checked={checkedPY}
                on:change={handleChange}
              />
              Completion of a Professional Year in Australia.
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