<script lang="ts">
  import Document from "./Document.svelte";
  import TabMenu from "./TabMenu.svelte";
</script>

<main>
  <article><Document /></article>
  <aside>
    <TabMenu />
  </aside>
</main>

<style>
  main {
    display: flex;
    gap: 1em;
    padding: 0 2em;
  }

  article {
    max-width: 65%;
  }

  aside {
    display: flex;
    flex-direction: column;
  }
</style>
