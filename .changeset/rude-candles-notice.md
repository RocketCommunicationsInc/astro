---
"angular-workspace": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

The default display for content inside Tree Nodes and may break your application if you are using the Tree Node with icons or status symbols.

```
<rux-tree-node>
   <rux-status status="critical"></rux-status>
   Tree Node 1.1
</rux-tree-node>
```

```
<rux-tree-node>
   <rux-status slot="prefix" status="critical"></rux-status>
   Tree Node 1.1
</rux-tree-node>
```

**Resolution:** Add `slot="prefix"` to any icons or status symbols.
