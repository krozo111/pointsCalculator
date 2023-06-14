<script>
  import "./app.css";
  import Header from "$lib/components/Header.svelte";
  import Test from "./Test.svelte";

  import "./styles.css";
</script>

<div class="app">
  <main>
    <Header />
    <Test />
    <slot />
   
  </main>

  <footer>
    Created by <a class="me" href="/about"> Jorge Corzo </a> ❤️ with
    <span class="svelte">Svelte</span>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
		font-size: 16px;
		font-weight: 400;
		padding: 30px 0;

		text-align: center;
		width: 100%;
	}


	footer a {
		text-decoration: none;
		color: #4158d0;
	}
	footer .svelte {
		color: orange;
	}

	footer .me {
		color: orange;
	}

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
