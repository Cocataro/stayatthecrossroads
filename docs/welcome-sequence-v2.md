# Welcome Email Sequence v2 — The Crossroads Inn

**Status:** AUTOMATION LIVE IN MAILERLITE — enabled pending Board sign-off + HTML body entry in dashboard  
**MailerLite account:** 2271322 | Form: 184855632701032232  
**Automation ID:** 186277124364043274  
**Trigger:** subscriber_joins_group → "Newsletter sign up" (group 184855710547314606)  
**Cadence:** 3 emails — Day 0 (immediate), Day 3, Day 7  
**Voice:** In-world only. Briar Thornheart (keeper) speaking directly. Zero Jason first-person phrasing.  
**Genre framing:** Heartland Fantasy (NOT cozy fantasy) — use only if genre is named at all.
**Chapter PDF:** `https://stayatthecrossroads.com/downloads/Crossroads-Inn-Sample.pdf` (combined 3-chapter PDF, commit 325a04a)  
**Pre-order URL:** `https://stayatthecrossroads.com/preorder`

> **What's not in this version:** The automation structure, trigger, step chain, and email subject/preheader/plain-text are all set via API. **HTML body copy still needs to be entered manually in the MailerLite dashboard** — the MailerLite API does not support setting rich HTML content for automation emails programmatically. Use the copy below, paste into each email's editor in the ML dashboard. Do not enable the automation until HTML is entered and a test send is verified.
>
> Note: chapter PDF link resolves to the combined 3-chapter sample. All three emails link to the same PDF; the drip pacing frames which chapter to read, not access control.

---

## Email 1 — Day 0 (immediate, on signup)

**Subject:** Your chapter is by the fire  
**Preview text:** Five roads meet here. You found the right one.

---

The door was already open when you arrived.

That's how it is at this crossroads. The inn doesn't wait for you to knock. If you've come this far down a road you didn't plan, you're probably meant to be here.

Chapter 1 of *The Crossroads Inn* is below — it's called "The Unusual Day." Set aside a little time before you start. Not because it requires it. Just because the inn has that effect on most people.

**[Read Chapter 1: The Unusual Day →](https://stayatthecrossroads.com/downloads/Crossroads-Inn-Sample.pdf)**

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

**[Read Chapter 2: The Mobile Terrain →](https://stayatthecrossroads.com/downloads/Crossroads-Inn-Sample.pdf)**

— B. Thornheart, Keeper

---

## Email 3 — Day 7

**Subject:** The third chapter — and then the door stays open  
**Preview text:** And if you want to know what comes next —

---

A note the keeper left in the margin of the ledger, undated:

*Some travelers arrive not knowing what they were looking for. They eat the soup. They sleep in the room that was waiting for them. They leave changed, though they'd have trouble saying how. The inn asks nothing of them.*

*Some travelers, though — they come back. They open the door a little wider. They want to know what the inn is, not just what it does.*

*Those are a different kind of traveler. A more curious one, maybe. Or just a more honest one.*

The third chapter — "Link to the Antagonist" — is below.

**[Read Chapter 3: Link to the Antagonist →](https://stayatthecrossroads.com/downloads/Crossroads-Inn-Sample.pdf)**

If you want to know what happens next, the full story is in *The Crossroads Inn* — the keeper's account, from the beginning to the end.

**[The Crossroads Inn — read more →](https://stayatthecrossroads.com/preorder)**

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

## MailerLite automation — current state

**Automation ID:** 186277124364043274  
**Account:** 2271322  
**Dashboard:** https://dashboard.mailerlite.com/automations/186277124364043274  

### What is built via API (done)

| Step | ID | Status |
|------|-----|--------|
| Trigger: subscriber_joins_group → "Newsletter sign up" | 186277389015189218 | ✓ complete |
| Email 1 — "Your chapter is by the fire" (Day 0) | 186277169081615964 | ✓ subject/preheader set |
| Delay — 3 days | 186277317938513778 | ✓ configured |
| Email 2 — "Something moved on the eastern road" (Day 3) | 186277326013597638 | ✓ subject/preheader set |
| Delay — 4 days | 186277344633161391 | ✓ configured |
| Email 3 — "The third chapter…" (Day 7) | 186277351097632692 | ✓ subject/preheader set |

### What still needs manual entry in the ML dashboard

The MailerLite API does not support setting rich HTML email body content for automation emails programmatically. For each email step, open the ML dashboard, click into the email, and paste the HTML body from this document.

### Before enabling the automation

- [ ] **Board:** enter HTML body copy for all 3 emails in ML dashboard (see body copy above)
- [ ] **Board/Tess:** submit a test-subscriber email, verify all 3 arrive at correct cadence
- [ ] **Board:** enable the automation (currently disabled)

---

## Acceptance notes

- All three emails are in Briar Thornheart / inn-narrator voice. Zero "Jason here / I write" phrasing.
- Subject lines are marketing-friendly but do not break in-world register. "Free," "limited time," and other transactional marketing language is deliberately absent — keeper wouldn't speak that way.
- Genre never explicitly named in body copy (atmosphere carries it).
- No hard sell. Email 3 CTA is offered, not pushed.
- Spoiler-free.
- Chapter PDF links all point to the combined 3-chapter sample: `stayatthecrossroads.com/downloads/Crossroads-Inn-Sample.pdf` (JAS-38, commit 325a04a). All three emails link to the same PDF; each email frames which chapter to open, not access control.
- Email 3 buy CTA links to `stayatthecrossroads.com/preorder` per Board directive 2026-05-01.
- Footer / unsubscribe / legal copy is ML platform standard — in-world voice exemption applies.
