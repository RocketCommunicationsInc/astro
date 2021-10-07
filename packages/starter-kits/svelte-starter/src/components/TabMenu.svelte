<script lang="ts">
</script>

<rux-tabs id="tab-set-id-1">
  <rux-tab id="tab-id-1">Table</rux-tab>
  <rux-tab id="tab-id-2">Monitoring</rux-tab>
  <rux-tab id="tab-id-3">Form</rux-tab>
</rux-tabs>
<rux-tab-panels aria-labelledby="tab-set-id-1">
  <rux-tab-panel aria-labelledby="tab-id-1">
    <div>Designated Tab for Table Content</div>
  </rux-tab-panel>
  <rux-tab-panel aria-labelledby="tab-id-2">
    <div>Designated Tab for Monitoring Content</div>
  </rux-tab-panel>
  <rux-tab-panel aria-labelledby="tab-id-3">
    <div>Designate Tab for Form Content</div>
  </rux-tab-panel>
</rux-tab-panels>

<style>
  rux-tabs {
    flex-basis: 10%;
  }

  rux-tab-panel {
    padding-top: 30px;
    margin: 0 auto;
  }
</style>
