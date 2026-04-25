# Welcome Email Sequence v2 — The Crossroads Inn

**Status:** DRAFT — awaiting EIC voice approval + Board review before going live in MailerLite  
**MailerLite account:** 2271322 | Form: 184855632701032232  
**Trigger:** Newsletter signup on stayatthecrossroads.com  
**Cadence:** 3 emails — Day 0 (immediate), Day 3, Day 7  
**Voice:** In-world only. Briar Thornheart (keeper) speaking directly. Zero Jason first-person phrasing.  
**Genre framing:** Heartland Fantasy (NOT cozy fantasy) — use only if genre is named at all.

> **What's not in this version:** Buy CTA in Email 3 uses a placeholder Amazon/KDP link — Board must fill in the real URL before the sequence goes live. Chapter download links are also placeholders pending Ben's PDF formatting on JAS-38.

---

## Email 1 — Day 0 (immediate, on signup)

**Subject:** Your chapter is by the fire  
**Preview text:** Five roads meet here. You found the right one.

---

The door was already open when you arrived.

That's how it is at this crossroads. The inn doesn't wait for you to knock. If you've come this far down a road you didn't plan, you're probably meant to be here.

Chapter 1 of *The Crossroads Inn* is below — it's called "The Unusual Day." Set aside a little time before you start. Not because it requires it. Just because the inn has that effect on most people.

**[Read Chapter 1: The Unusual Day →]**

If you came through the Prologue before you signed up, you already know the way in. If not, the front door is still open:  
→ [stayatthecrossroads.com/the-prologue](https://stayatthecrossroads.com/the-prologue)

The fire's lit. The kettle's on. Whatever you came for, take your time with it.

— B. Thornheart, Keeper

---

## Email 2 — Day 3

**Subject:** Something moved on the eastern road  
**Preview text:** Chapter 2 is inside, whenever you're ready.

---

A ledger note, for anyone who keeps one:

Three days ago a merchant came in from the eastern pass carrying nothing but a locked box and an explanation she hadn't been asked for. She sat by the fire all evening, said very little, and was gone before the bread was out. The box is still here. So is the explanation, though we haven't touched either.

The inn keeps things like that. Objects that outlast their owners. Stories that aren't finished yet.

Your next chapter has been waiting the same way. Chapter 2 — "The Mobile Terrain" — is below.

**[Read Chapter 2: The Mobile Terrain →]**

— B. Thornheart, Keeper

---

## Email 3 — Day 7

**Subject:** The last chapter I'll send for free  
**Preview text:** And if you want to know what comes next —

---

A note the keeper left in the margin of the ledger, undated:

*Some travelers arrive not knowing what they were looking for. They eat the soup. They sleep in the room that was waiting for them. They leave changed, though they'd have trouble saying how. The inn asks nothing of them.*

*Some travelers, though — they come back. They open the door a little wider. They want to know what the inn is, not just what it does.*

*Those are a different kind of traveler. A more curious one, maybe. Or just a more honest one.*

The last free chapter — "Link to the Antagonist" — is below.

**[Read Chapter 3: Link to the Antagonist →]**

If you want to know what happens next, the full story is in *The Crossroads Inn* — the keeper's account, from the beginning to the end.

**[⚠ PLACEHOLDER — Board to fill in before go-live]**  
`[The Crossroads Inn — available on Amazon →]`  
*OR if pre-order is live:*  
`[The Crossroads Inn launches [DATE] — pre-order now →]`

Whatever you decide: the fire is still lit. The door is still open.

— B. Thornheart, Keeper

---

## Post-sequence handoff note (automation flag for Board)

After Email 3 delivers, subscribers should transition into the regular **Hearth** cadence — Ledger entries, keeper notes, occasional letters. In MailerLite, this means removing them from the welcome sequence automation and adding them to the main list segment (or the Hearth broadcast list, depending on how Board segments).

Recommended automation flow:
1. Welcome sequence group: `automation_welcome_v2` — 3 emails, Day 0/3/7
2. On completion: tag subscriber with `welcome_complete`, move to `hearth_list`
3. Hearth content is a separate automation/broadcast track — out of scope for this ticket

Board to confirm segmentation approach before automation goes live.

---

## MailerLite automation spec (Board-executable)

Account: 2271322 | Form: 184855632701032232  
This can be built manually in the MailerLite dashboard or via API once a `MAILERLITE_API_KEY` is available.

### Automation steps

1. **Trigger:** Subscriber joins group linked to form 184855632701032232 (signup on stayatthecrossroads.com)
2. **Email 1** — send immediately (Day 0)
   - Subject: "Your chapter is by the fire"
   - Preview: "Five roads meet here. You found the right one."
   - Body: see Email 1 above
3. **Wait:** 3 days
4. **Email 2** — send on Day 3
   - Subject: "Something moved on the eastern road"
   - Preview: "Chapter 2 is inside, whenever you're ready."
   - Body: see Email 2 above
5. **Wait:** 4 days (7 days total from signup)
6. **Email 3** — send on Day 7
   - Subject: "The last chapter I'll send for free"
   - Preview: "And if you want to know what comes next —"
   - Body: see Email 3 above (fill in Amazon link before activating)
7. **On completion:** tag subscriber `welcome_complete`, add to main Hearth list/group

### Before activating

- [ ] Board: provide `MAILERLITE_API_KEY` (or set up automation manually in dashboard)
- [ ] Ben/JAS-38: chapter download links — PDFs must exist before emails go live
- [ ] Board/CEO: fill in Amazon/KDP URL (or pre-order URL + launch date) in Email 3
- [ ] EIC: voice approval on all 3 emails
- [ ] Test: submit a test email, verify all 3 arrive at correct cadence

---

## Acceptance notes

- All three emails are in Briar Thornheart / inn-narrator voice. Zero "Jason here / I write" phrasing.
- Subject lines are marketing-friendly but do not break in-world register ("free chapter — limited time" language deliberately avoided).
- Genre never explicitly named in body copy (atmosphere carries it).
- No hard sell. Email 3 CTA is offered, not pushed.
- Spoiler-free.
- Chapter download links are placeholders — live links depend on JAS-38 (Ben, PDF formatting).
- Amazon/KDP buy link in Email 3 is a placeholder — Board to fill in before activation.
- Footer / unsubscribe / legal copy is ML platform standard — in-world voice exemption applies.
