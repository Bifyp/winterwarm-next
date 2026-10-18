import { test } from "node:test";
import assert from "node:assert/strict";
import data from "../content/site-data.json";
import { photoSources } from "../lib/photo-sources";

test("every content image has an explicit source, excluding company wordmark", () => {
  for (const [name, src] of Object.entries(data.assets)) {
    if (name === "logo") continue;
    assert.ok(photoSources[src], `Missing provenance for ${name}`);
  }
  for (const image of data.catalog.map((item) => item.image))
    assert.ok(photoSources[image]);
});
test("all content images are explicitly AI illustrations linked to their own file", () => {
  assert.equal(Object.keys(photoSources).length, 9);
  for (const [src, source] of Object.entries(photoSources)) {
    assert.equal(source.href, src);
    assert.equal(source.label, "Ilustracja AI ↗");
    assert.match(src, /^\/assets\/ai-[a-z]+-v1\.webp$/);
  }
});
