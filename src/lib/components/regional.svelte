<script>
    // @ts-nocheck
    
        let checkedRegional = false;
       export let valueRegional = 0;
        let selection = 0;
        $: valueRegional = selection;
    
    const handleChange = (e) => {
      if (e.target.checked) {
        selection = 10;
      } else {
        selection = 0;
      }
    };
    </script>
    
    <fieldset>
        <h2 class="subtitle">Study in regional Australia</h2>
        <ul class="list">
          <label>
            <label>
              <input
                type="checkbox"
                bind:checked={checkedRegional}
                on:change={handleChange}
              />
              You must have at least 1 degree, diploma or trade qualification from an
              Australian educational institution that satisfies the Australian study
              requirement obtained while living and studying in an eligible area of regional
              Australia.
              <small>(5 Points )</small>
            </label>
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