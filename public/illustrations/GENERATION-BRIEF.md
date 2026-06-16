# stayatthecrossroads.com — Illustration Generation Brief
**JAS-33 | Round 1 | Author: Sofia Reyes (Cover Art Director)**

---

## Register

All 12 assets share one tonal family: **gothic-cozy**.

- **Not** the bright warm-amber of the newsletter hero (JAS-9 V4). That was daylight-cozy.
- **This** is candlelit-cozy: deep amber, hearth as primary light, dusk-purple shadows, dark backgrounds with selective warm illumination.
- Think: Gormenghast warmth. An inn that has seen centuries. Comfortable but not saccharine.

---

## SDXL Baseline (add to every prompt)

**Style tokens (positive):**
```
painterly illustration, storybook for adults, gothic cozy fantasy, (warm painterly style:1.2), 
(hearthfire illumination:1.2), candlelit interior, (deep amber palette:1.1), dusk purple shadows, 
dark backgrounds with selective warm light, visible brush texture, hand-painted grain, 
(studio ghibli aesthetic for adults:1.1), masterpiece, best quality, 8k illustration
```

**Negative (every image):**
```
photorealistic, photograph, photo, cgi, 3d render, plastic skin, anime, manga, 
watermark, signature, text, blurry, low quality, cropped, oversaturated, 
(extra fingers:1.5), (bad hands:1.5), (deformed hands:1.5), (melted face:1.4), 
(garbled text:1.5), neon, cyberpunk, romantasy, sultry pose, battle scene, 
chromatic aberration, overexposed highlights, AI shimmer
```

**Sampler:** DPM++ 2M Karras, 30–40 steps, CFG 7–8  
**Size:** Per asset spec below  
**Batch:** 4–6 variants per asset, pick top 2–3 for PR

---

## Canon Anchors (ground every inn interior)

- **The Crossroads Inn**: Stone walls, timber beams overhead, low ceilings, small-paned mullioned windows, wide stone fireplace as the room's anchor
- **Briar's sword**: Crimson-wrapped hilt, mounted on the stone wall above the main hearth. Not heroic — resting. A life retired, not displayed with pride.
- **Hearth**: Always warm fire, amber-orange glow, the room's primary light source
- **Ember (phoenix cat)**: Larger than a domestic cat (closer to a lynx), black fur with shifting red-gold streaks near heat, molten gold eyes, long plumed tail. *Do not generate Ember in images where anatomy may distort — use silhouette or curl-near-fire poses only.*
- **Oldevar's mug**: On any kitchen/bar surface, a simple stoneware mug, tea cooling

---

## AI Fingerprint Rejection Checklist (audit before committing)

Run every candidate through this before including in PR:

- [ ] Hands/fingers anatomically correct (count: 5 per hand, no melting)
- [ ] Face symmetrical, or face fully obscured / three-quarter back view
- [ ] No garbled text in image (except signboard — see asset 11)
- [ ] Architecture lines coherent (no warping doorframes, impossible staircases)
- [ ] Single consistent shadow direction across scene
- [ ] No "AI shimmer" overexposed hotspots on metal, wood, or fabric
- [ ] No plastic skin / uncanny valley surface
- [ ] Candle flames behave realistically (teardrop, not sphere)

Fail any → regenerate. Don't rationalize.

---

## Asset Specifications

### 1. `hero-fireplace.jpg`
**Purpose:** Landing page hero  
**Dimensions:** 1920×1080 (landscape)  
**WebP target:** ≤ 400KB

**SDXL Prompt:**
```
(the crossroads inn interior:1.3), stone fireplace with roaring hearth fire, 
(crimson-wrapped sword hilt mounted above stone mantle:1.2), 
thick timber beams overhead, rough-hewn wooden table with white tallow candles, 
deep amber hearthfire light, dusk purple shadows in corners, stone floor, 
warm atmospheric haze, dust motes in firelight, (gothic cozy inn interior:1.2), 
painterly illustration, storybook for adults, deep amber palette, 
visible brush texture, masterpiece, best quality, 8k illustration, 
wide cinematic composition, landscape 16:9
```

**Direction notes:**
- Camera POV: slightly low, looking toward the fireplace. The room should feel enveloping, not showroom-clean.
- The sword hilt must be visible — crimson wrap, wall-mounted. No blade visible if possible (it's the retired weapon, the hilt is the story).
- One or two candles on the table, not a full candelabra.
- No human figures in this hero. Pure atmosphere.
- Reference: the spec thumbnail #1 — dark foreground, warm fire midground.

---

### 2. `tavern-main.jpg`
**Purpose:** Common room wide shot, alternate hero candidate  
**Dimensions:** 1920×1080 (landscape)  
**WebP target:** ≤ 400KB

**SDXL Prompt:**
```
(crossroads inn common room:1.3), wide angle interior view, rough wooden tables and benches, 
hearthfire glowing at room's end, (silhouetted figures seated at tables:1.1), 
timber beam ceiling low overhead, small-paned mullioned windows with dusk light outside, 
iron lanterns on walls casting warm pools of amber light, 
worn stone floor, deep amber and dusk-purple atmosphere, 
gothic cozy fantasy inn, painterly illustration, storybook for adults, 
wide cinematic composition, warm and dim, inviting not oppressive, masterpiece, 8k
```

**Direction notes:**
- Figures should be silhouettes or deeply atmospheric — no faces needed, this is about the space.
- The common room should feel LIVED IN: a few mugs on tables, a coat on a peg, a worn spot on the floor where the regular chair goes.
- Dusk light through mullioned windows (exterior is purple-blue, interior is amber-warm).
- Variant: try one version with Ember's glowing eyes visible near the hearth, curled on a chair.

---

### 3. `book-cover.jpg`
**Purpose:** Book 1 hardcover mockup  
**Dimensions:** ~800×1200 (portrait, ~2:3)  
**WebP target:** ≤ 300KB

**SDXL Prompt:**
```
(single hardcover book standing upright:1.3), gothic cozy fantasy book cover, 
(warm amber light glow from side:1.2), dark background, 
aged leather cover in deep forest green or dark amber, 
subtle worn gilt edges, faint crossroads motif on cover, 
product photography style but painterly, centered composition, 
soft bokeh background, hearthfire light source from the right, 
masterpiece, best quality, high detail
```

**Direction notes:**
- **Title typography**: Leave the cover blank (no title baked in). Nina (Astro frontend) will typeset "The Crossroads Inn / Stay the Night" over it. If board wants to test with title, use placeholder in post, NOT baked into the generation.
- The book itself should evoke the inn: forest green or dark amber cover, aged not pristine.
- Variant B: Try a version with an embossed crossroads sign or lantern motif on the cover.
- Variant C: Try with candle beside the book for additional warm light.

---

### 4. `ledger-journal.jpg`
**Purpose:** Blog preview card (ledger/journal motif)  
**Dimensions:** 800×800 square, or 1200×800 landscape  
**WebP target:** ≤ 250KB

**SDXL Prompt:**
```
(open leather-bound ledger on worn wooden counter:1.2), 
(single tallow candle beside ledger:1.2), 
(quill pen and ink pot:1.1), written pages with handwritten script (not legible), 
warm amber candlelight illuminating yellowed parchment, 
dark background, deep shadows, gothic cozy still life, 
close-up intimate composition, (inn accounting, record keeping:1.1), 
painterly illustration, visible brush texture, storybook for adults, 
warm amber and ivory palette, masterpiece, best quality
```

**Direction notes:**
- This is Pip's domain — the inn's ledger. No human figure.
- Pages should have handwriting TEXTURE but no legible text (no AI text generation).
- Candle wax drip is a nice detail if it appears naturally.
- The ledger should look slightly chaotic — papers slightly askew, ink smudge.
- Variant: include a small dried herb sprig (rosemary, sage) used as a bookmark.

---

### 5. `room-ember.jpg`
**Purpose:** "The Ember Room" interior page  
**Dimensions:** 1200×800 landscape  
**WebP target:** ≤ 300KB

**SDXL Prompt:**
```
(gothic cozy inn bedroom interior:1.3), (The Ember Room:1.1), 
(small hearth with glowing embers in stone alcove:1.3), 
worn unmade bed with rumpled quilts in deep amber and rust tones, 
rough timber floors with a creak-worn path, iron candlestick on windowsill, 
single small-paned window with deep blue night outside, 
hearthfire as primary light source, warm amber interior, dusk purple shadows, 
intimate and lived-in, (inviting not staged:1.2), 
painterly illustration, visible brush texture, storybook for adults, 8k masterpiece
```

**Direction notes:**
- "Ember Room" is the most fire-adjacent room. This should have the warmest palette of the three rooms.
- The bed should look USED, not hotel-staged. A rumpled quilt, a pillow dented from use.
- If Ember (phoenix cat) appears: show only the glow-of-gold-eyes from hearth shadows, or tail-tip visible. Don't generate full anatomical cat.
- Floor crack or old wooden beam is a nice character detail.

---

### 6. `room-northwatch.jpg`
**Purpose:** "The Northwatch Room" interior page  
**Dimensions:** 1200×800 landscape  
**WebP target:** ≤ 300KB

**SDXL Prompt:**
```
(gothic cozy inn bedroom interior:1.3), (northwatch room:1.1), 
(wide window overlooking dark landscape at night:1.2), 
deep blue-purple moonlight through small-paned window, 
stone walls, worn bed with heavier wool quilts in slate and deep blue tones, 
single iron lantern on stone ledge, wind-weather feeling, 
cooler palette but still warm undertones from iron lantern, 
atmospheric, introspective, gothic cozy fantasy, 
painterly illustration, visible brush texture, storybook for adults, masterpiece, 8k
```

**Direction notes:**
- This is the "for those who listen to the wind" room. Cooler than Ember Room but not cold.
- The window should be the compositional anchor — darkness outside, but the exterior isn't threatening.
- Heavy wool blankets, maybe a coat hung on a peg. A traveler's room, not a permanent home.
- Palette shift from Ember Room: more blue-violet, iron lantern warm (not hearth-warm).

---

### 7. `room-loft.jpg`
**Purpose:** "The Dreamer's Loft" interior page  
**Dimensions:** 1200×800 landscape  
**WebP target:** ≤ 300KB

**SDXL Prompt:**
```
(gothic cozy inn attic loft bedroom:1.3), (dreamer's loft:1.1), 
(exposed roof rafters overhead:1.2), steep slanted ceiling with old timber beams, 
low bed tucked under the eaves, small circular porthole window with purple night sky, 
(dried herb bundles hanging from rafters:1.1), dusty amber candlelight, 
stacked old books, a worn leather trunk, 
high and tucked-away feeling, old songs in the walls, 
gothic cozy fantasy, painterly illustration, visible brush texture, 
warm amber with dusty violet shadows, storybook for adults, masterpiece, 8k
```

**Direction notes:**
- The loft is up high, tucked under rafters. Low ceiling, slant, exposed beams.
- "Old songs in the walls" — decorative detail: maybe a carved phrase in beam, or old sheet music tucked in a beam crack. (No legible text — just the gesture of it.)
- Herb bundles drying from rafters. An old trunk. A sense of things stored and remembered.
- Circular or arched small window rather than the mullioned rectangular style of other rooms — it's higher up, different character.

---

### 8. `hearth-gathering.jpg`
**Purpose:** Newsletter / Hearth CTA section  
**Dimensions:** 1920×1080 landscape  
**WebP target:** ≤ 400KB

**SDXL Prompt:**
```
(group of silhouetted figures gathered around a large stone hearth:1.3), 
(warm hearthfire casting long shadows:1.2), 
diverse shapes: tall, small, broad — a found family, 
dark interior, amber hearthfire dominant, figures in warm silhouette, 
sense of shared warmth and community, mugs in hands, 
wide compositional spacing, hearth centered, 
(community, belonging, safety:1.1), gothic cozy fantasy, 
painterly illustration, storybook for adults, visible brush texture, 
deep amber and dusk purple, masterpiece, 8k
```

**Direction notes:**
- Figures must be SILHOUETTES — no faces. This protects from AI anatomy failures AND makes it universal/inclusive.
- The height variety matters: one tall figure (Gorrick-scale), one very small (Pip-scale), others in between. Don't make them identical.
- Mugs optional but nice — the act of drinking together.
- This image is pure emotional beat: warmth, community, the inn as sanctuary.
- Avoid: any figure that reads as "hero pose." Relaxed, turned toward the fire, not the viewer.

---

### 9. `inn-exterior.jpg`
**Purpose:** The inn from outside, establishing shot  
**Dimensions:** 1920×1080 landscape  
**WebP target:** ≤ 400KB

**SDXL Prompt:**
```
(the crossroads inn exterior at dusk:1.3), 
(warm amber light spilling through small-paned windows:1.2), 
stone and timber inn at a crossroads, (glowing inn sign hanging outside:1.1), 
dusk sky deep purple and indigo, forest or rolling hills in background, 
well-worn dirt crossroads path leading to inn door, 
(welcoming inn at crossroads, cozy haven:1.2), 
thin wisps of chimney smoke rising into dusk sky, 
gothic cozy fantasy exterior, painterly illustration, 
wide cinematic landscape, inviting not foreboding, storybook for adults, 
amber and dusk purple palette, visible brush texture, masterpiece, 8k
```

**Direction notes:**
- The inn should feel ARRIVED AT, not passed by. The viewer is walking toward it.
- Windows glowing warm against a purple dusk sky is the whole emotional payload of this image.
- Chimney smoke is a crucial detail — it means fire, warmth, people inside.
- Stone inn, timber framing (not modern brick, not thatched). Old. Solid. Settled.
- Variant: include a lone figure silhouette in the lit doorway.

---

### 10. `sword-mantle.jpg`
**Purpose:** Decorative element / detail art  
**Dimensions:** 800×800 square, or 1200×600 landscape  
**WebP target:** ≤ 200KB

**SDXL Prompt:**
```
(close-up detail: crimson-wrapped sword hilt mounted on stone wall:1.4), 
(above stone hearth mantle:1.2), 
worn crimson leather grip wrap, aged iron crossguard, 
(dust motes in amber candlelight:1.2), 
hearthfire glow from below, warm amber and deep shadow, 
(retired weapon, at rest not on display:1.1), 
gothic cozy fantasy still life, close-up composition, 
painterly illustration, warm amber and deep brown palette, 
visible brush texture, dramatic intimate lighting, masterpiece, 8k
```

**Direction notes:**
- This is Briar's sword, retired. No heroic framing — it's a relic, not a trophy.
- The crimson wrap should be WORN: fraying at edges, darkened from use.
- Dust motes in the light is the key atmospheric detail.
- No human hands near it. Just the sword, the wall, the light.
- Variant: pull back slightly to show a bit of the mantle below, with a candle casting side light.

---

### 11. `signboard.jpg`
**Purpose:** Series logotype reference / decorative  
**Dimensions:** 1200×800 landscape  
**WebP target:** ≤ 250KB

**SDXL Prompt:**
```
(carved wooden inn sign:1.4), ("The Crossroads Inn" carved into weathered wood:1.3), 
hanging sign on iron bracket, aged and weathered wood, 
(warm amber lantern light illuminating sign:1.2), 
iron chains, patina and grain visible in aged wood, 
dark background, dusk atmospheric, 
gothic cozy fantasy signage, close-up detail, 
carved serif lettering style, worn not ruined, 
painterly illustration, visible brush texture, warm amber and dark background, masterpiece, 8k
```

**Direction notes:**
- **Text exception**: "The Crossroads Inn" IS permitted in this image. However: audit carefully for AI garbling. Generate multiple variants, pick only the cleanest lettering.
- If text generation is consistently poor, generate the sign blank/carved-texture and have Nina or Sofia composite the typeset lettering in Affinity Designer post-generation.
- Prefer carved-look serif lettering, warm wood grain, iron bracket hardware.
- A small crossroads symbol (two lines crossing) carved or etched would be a nice secondary detail.

---

### 12. `soup-bowl.jpg`
**Purpose:** Blog post lede — "The Soup That Knows Your Name"  
**Dimensions:** 1200×800 landscape, or 800×800 square  
**WebP target:** ≤ 250KB

**SDXL Prompt:**
```
(close-up steaming bowl of soup:1.3), 
(aromatic steam rising from rustic stoneware bowl:1.2), 
dark rustic inn table surface, wooden spoon beside bowl, 
warm amber candlelight from nearby candle, 
(magical warmth, glowing steam:1.1), 
small sprigs of herbs floating in soup, 
(comfort food, gothic cozy inn food:1.2), 
close-up food photography style but painterly, 
dark background, selective warm light on bowl, 
painterly illustration, storybook for adults, visible brush texture, 
warm amber and cream palette, masterpiece, 8k
```

**Direction notes:**
- "The Soup That Knows Your Name" is the blog post title — the soup should feel magical without being obvious about it.
- The steam can have a very slight luminescence — barely there, not explicit.
- Stoneware bowl, not a fine china bowl. Rustic. Inn food.
- Herbs in the soup, maybe a piece of bread in frame.
- Dark table surface makes the warm bowl pop.

---

## Consistency Check Before PR

After generating all 12, lay them in a grid and verify:

1. **Tonal family**: All 12 share the gothic-cozy register. No image should look brighter than the others by more than one stop.
2. **Palette anchor**: Deep amber + dusk purple shadows is the through-line. Room images can shift (Northwatch is cooler), but the family holds.
3. **Rendering style**: Same painterly/brush texture quality across all. If one looks more photorealistic, regenerate.
4. **No AI fingerprints**: Rerun the checklist (top of this doc) on every final candidate.

---

## Delivery Filenames

| Asset | Canonical filename | Final format |
|---|---|---|
| Landing hero | `hero-fireplace.jpg` | WebP ≤ 400KB |
| Common room | `tavern-main.jpg` | WebP ≤ 400KB |
| Book mockup | `book-cover.jpg` | WebP ≤ 300KB |
| Ledger | `ledger-journal.jpg` | WebP ≤ 250KB |
| Ember Room | `room-ember.jpg` | WebP ≤ 300KB |
| Northwatch Room | `room-northwatch.jpg` | WebP ≤ 300KB |
| Dreamer's Loft | `room-loft.jpg` | WebP ≤ 300KB |
| Hearth gathering | `hearth-gathering.jpg` | WebP ≤ 400KB |
| Inn exterior | `inn-exterior.jpg` | WebP ≤ 400KB |
| Sword detail | `sword-mantle.jpg` | WebP ≤ 200KB |
| Signboard | `signboard.jpg` | WebP ≤ 250KB |
| Soup bowl | `soup-bowl.jpg` | WebP ≤ 250KB |

Round-1 candidates live in `public/illustrations/candidates/` named `{canonical-base}-r1-{a/b/c}.jpg`.  
After board picks winners, rename to canonical filename in `public/illustrations/`.

---

## Known Blockers

1. **ComfyUI not running in cloud agent environment.** Sofia cannot run SDXL generation from this environment. Nicole needs to run generations locally on the 4070 using these prompts, OR confirm if Nicole already has the 12 thumbnails from the spec available to drop into the repo.

2. **Signboard text quality** — SDXL text generation is unreliable. Budget for post-processing the lettering in Affinity Designer if generated text is garbled.
