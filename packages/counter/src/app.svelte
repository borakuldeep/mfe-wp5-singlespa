<script>
import store from 'store/store';
	
	const incrementCount = () => {
  store.incrementCount();
};

const decrementCount = () => {
  store.decrementCount();
};
</script>
<h1> I am counter from Svelte MFE </h1>
<p>The counter functions are imported from separate MFE - store</p>
 <button
    on:click={incrementCount}
    class="mui-btn mui-btn--primary"
    style="width: 100%;"
  >
    incement counter
  </button>
  <button
    on:click={decrementCount}
    class="mui-btn mui-btn--primary"
    style="width: 100%;"
  >
    decrement counter
  </button>