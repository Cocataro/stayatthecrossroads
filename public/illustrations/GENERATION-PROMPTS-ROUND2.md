# Gap Assets — Generation Prompts
**JAS-33 Round 2 | Author: Sofia Reyes**  
**Assets needed:** `sword-mantle.png` + `soup-bowl.png`

---

## Style Reference (from existing 10 assets)

Study the 10 delivered PNGs before generating. The visual signature:

- **Lighting:** single warm source (hearth fire, candle, or iron lantern). Heavy contrast — pool of warm amber in darkness, no fill light, no ambient bounce
- **Palette:** near-black backgrounds, rich amber/orange/gold, dusk-blue in deep shadows. Nothing "clean" or modern
- **Texture:** hyper-detailed aged materials — rough stone, dark worn wood grain, tarnished brass/iron, aged leather, wax drips, dust. Visible surface imperfection everywhere
- **Rendering:** DALL-E 3 / ChatGPT image generator style — photorealistic with painterly finishing, cinematic color grade, very dark exposure
- **Composition:** centered primary subject, shallow-to-deep field, background falls to shadow

---

## PRIMARY GENERATION PATH: ChatGPT Image Generator

The 10 existing assets came from ChatGPT's image generator. **For guaranteed style consistency, generate these 2 in the same ChatGPT session (or a new one with reference images attached).**

If using a new session: attach 2–3 of the existing PNGs as style references before sending the prompt.

---

### Asset 1: `sword-mantle.png`

**Dimensions:** landscape, ~16:9 or 3:2  
**Purpose:** close-up detail art, decorative element

**ChatGPT prompt (primary):**
```
A close-up photograph of an aged sword resting horizontally on a rough stone mantle above a glowing fireplace. The sword's hilt is wrapped in worn crimson leather, the binding fraying at the edges from years of use. A prominent iron crossguard, darkened with age and heat. The stone mantle is rough-hewn, cold grey with centuries of soot staining. Hearth fire visible at the bottom of the frame — amber and orange light casting dramatic upward illumination across the blade and stone. Deep shadows swallow the background. Dust motes drift in the firelight. No human figures. Gothic-cozy tavern atmosphere. Cinematic, hyper-detailed, dark and warm palette — rich amber, tarnished iron, deep black. Ultra-high detail on texture: stone grain, metal patina, leather wear. Single warm light source only. Style: dark fantasy inn interior, painterly photorealism, moody candlelit.
```

**Style variation prompt (if first result is too bright/clean):**
```
Same composition as above but push the darkness further. The room behind the mantle should be nearly black. The sword blade should catch only a sliver of firelight. The crimson leather wrap on the hilt is the warmest color in the image — everything else fades toward amber-brown and shadow. Soot-stained stone. Dust on the blade. This is a weapon that has not been touched in years. Gothic, melancholic, dark-warm palette.
```

**Canon notes:**
- Crimson-wrapped hilt = Briar's sword, retired above the inn's hearth (Character Bible)
- The sword is at rest, not displayed heroically — it's a life left behind
- Do NOT show the full blade in a heroic upright position
- Horizontal rest on mantle is correct

---

### Asset 2: `soup-bowl.png`

**Dimensions:** 3:2 landscape or 1:1 square  
**Purpose:** Blog post lede for "The Soup That Knows Your Name" (The Ledger section)

**ChatGPT prompt (primary):**
```
A close-up still life of a steaming bowl of hearty stew on a worn dark wooden tavern table. The bowl is aged pewter or dark earthenware — heavy, thick-walled, with years of use. A hand-forged iron spoon rests in the bowl. Thick steam rises and catches a warm amber light from a tallow candle just out of focus to the right. The table surface is deeply grained dark wood with old water rings and knife marks. A heel of dark bread on a small plate just visible at the edge of frame. Background: dark inn interior, barely suggested. The stew itself is rich and dark — root vegetables, herbs floating on the surface. There is something slightly magical about the steam — it curls with unusual intentionality, but this is subtle. Gothic-cozy tavern atmosphere. Single warm candlelight source. Hyper-detailed texture on bowl, wood, steam. Very dark exposure overall, warm amber and deep shadow palette.
```

**Style variation prompt (emphasizing the magical quality):**
```
Same bowl composition as above. Add a suggestion of magic: the steam catches the light in a way that seems to form faint shapes — barely perceptible, like seeing faces in smoke. The bowl seems warmer than it should be, as if the heat is coming from within rather than from cooking. Still grounded and gothic-cozy — this is not cartoon magic. The magic is in the atmosphere, not the visuals. Ultra-detailed, dark-warm palette, single candlelight, heavy shadows.
```

**Canon notes:**
- "The Soup That Knows Your Name" — Gorrick's soup that somehow is always exactly what the guest needs
- The magic should be felt, not seen explicitly
- No figures, no hands in frame — the bowl stands alone
- Aligns with ledger-journal.png visual language (close-up still life on dark wood with candlelight)

---

## BACKUP PATH: SDXL via ComfyUI

If ChatGPT image gen is not available, use SDXL with a cinematic/realistic checkpoint.

**Recommended checkpoints:** Juggernaut XL, RealVisXL, DreamShaper XL  
**Sampler:** dpmpp_2m / karras / 35 steps / CFG 6.5  
**Img2img source:** Use `ledger-journal.png` (for soup-bowl) or `hero-fireplace.png` (for sword-mantle) as img2img base at denoise 0.65–0.75

### sword-mantle — SDXL

**Positive:**
```
(close-up sword on stone mantle:1.3), (crimson leather wrapped hilt:1.2), 
aged iron crossguard, (hearth fire glow from below:1.2), warm amber uplight, 
(heavy shadow:1.2), dust motes in firelight, rough hewn stone, soot staining, 
retired weapon, horizontal resting position, (cinematic lighting:1.2), 
single warm light source, deep shadows, dark-amber palette, 
painterly detail, volumetric light, ultra-detailed texture, 
weathered materials, gothic-cozy interior, hearth glow, 
masterpiece, best quality, 8k, hyperdetailed
```

**Negative:**
```
bright lighting, flat lighting, clean, modern, anime, cartoon, photograph style, 
cgi, plastic, glossy, desaturated, pale, daytime, outdoor sunlight, 
(oversaturated:1.3), heroic pose, sword raised, knight, battle, person, figure,
hands, human, extra fingers, deformed, watermark, text, blurry
```

### soup-bowl — SDXL

**Positive:**
```
(steaming bowl of stew:1.3), (aged pewter bowl:1.2), (iron spoon in bowl:1.1),
rising steam caught in candlelight, (single tallow candle out of focus:1.2), 
dark worn wooden table, deep wood grain, (knife marks and water rings on table:1.1), 
dark earthenware, rich stew with herbs and root vegetables, 
(hint of magic in steam:1.1), tavern still life, close-up composition,
(cinematic lighting:1.2), single warm light source, deep shadows, 
dark-amber palette, painterly detail, volumetric light, 
ultra-detailed texture, weathered materials, gothic-cozy interior, 
candlelit, masterpiece, best quality, 8k, hyperdetailed
```

**Negative:**
```
bright lighting, flat lighting, clean, modern, anime, cartoon, photograph style,
cgi, plastic, glossy, desaturated, pale, daytime, outdoor sunlight,
(oversaturated:1.3), bright background, white bowl, ceramic, modern tableware,
figure, person, hands, deformed, watermark, text, blurry
```

---

## Delivery Instructions

1. Generate 6–8 variants per asset (both paths)
2. Run AI fingerprint checklist on each candidate:
   - [ ] No anatomical distortions (N/A for these — no figures)
   - [ ] No garbled text in image
   - [ ] Architecture/object lines coherent
   - [ ] Single consistent light direction
   - [ ] No AI shimmer / overexposed hotspots
   - [ ] No plastic/synthetic surface quality
3. Select top 3–4 per asset
4. Commit winners to `public/illustrations/` on this branch:
   - Final candidates: `public/illustrations/reference/sword-mantle-r1-{a,b,c}.png`
   - Final candidates: `public/illustrations/reference/soup-bowl-r1-{a,b,c}.png`
5. Do NOT rename to canonical filename yet — Board selects winner per asset, then rename to `sword-mantle.png` / `soup-bowl.png`

---

## Style Consistency Check

After generating, place `sword-mantle.png` candidate and `soup-bowl.png` candidate alongside 3 of the delivered 10 assets in a grid (any image viewer). Ask: do these look like they came from the same batch? If they stand out — too bright, too clean, wrong texture depth — regenerate.

The ledger-journal.png and signboard.png are the best style comparators for these two assets (closest in subject: close-up still life on dark surface with warm single light).
