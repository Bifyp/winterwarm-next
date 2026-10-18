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
test("only real company images claim a Winterwarm original", () => {
  for (const [src, source] of Object.entries(photoSources)) {
    if (src === data.assets.hero) {
      assert.equal(source.href, src);
      assert.equal(source.label, "Ilustracja ↗");
    } else {
      const url = new URL(source.href);
      assert.equal(url.origin, "https://winterwarm.pl");
      assert.ok(url.pathname.startsWith("/wp-content/uploads/"));
    }
  }
});
