<script>
  let yep = false;
</script>

<button on:click={() => yep = true}>Show</button>

{#if yep}
  Yeho
{/if}
