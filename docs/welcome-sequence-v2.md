# Welcome Email Sequence v2 — The Crossroads Inn

**Status:** BLOCKED — email steps missing, domain validation issue prevents API recreation. Board must add steps via dashboard.  
**MailerLite account:** 2271322 | Form: 184855632701032232  
**Automation ID:** 186277124364043274  
**Trigger:** subscriber_joins_group → "Newsletter sign up" (group 184855710547314606) — ✓ intact  
**Cadence:** 3 emails — Day 0 (immediate), Day 3, Day 7  
**Voice:** In-world only. Briar Thornheart (keeper) speaking directly. Zero Jason first-person phrasing.  
**Genre framing:** Heartland Fantasy (NOT cozy fantasy) — use only if genre is named at all.
**Chapter PDF:** `https://stayatthecrossroads.com/downloads/Crossroads-Inn-Sample.pdf` (combined 3-chapter PDF, commit 325a04a)  
**Pre-order URL:** `https://stayatthecrossroads.com/preorder`

> **Current automation state (2026-05-01):** Trigger is intact and wired to the signup form. Two delay steps remain (3-day delay, 4-day delay). All 3 email steps are missing — deleted during dashboard editing and API cleanup attempts. The MailerLite API now rejects new email step creation with `jasonkrebsbooks@outlook.com` (requires a verified custom sending domain). Board must add the 3 email steps manually in the dashboard using the copy below.
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

### Current automation state (2026-05-01)

| Component | ID | Status |
|-----------|-----|--------|
| Trigger: subscriber_joins_group → "Newsletter sign up" | 186277389015189218 | ✓ complete |
| Delay — 3 days | 186277317938513778 | ✓ configured (floating, needs Email 1 as parent) |
| Delay — 4 days | 186277344633161391 | ✓ configured (parent = Delay 1) |
| Email 1 — "Your chapter is by the fire" (Day 0) | **MISSING** | ✗ deleted — must be recreated |
| Email 2 — "Something moved on the eastern road" (Day 3) | **MISSING** | ✗ deleted — must be recreated |
| Email 3 — "The third chapter…" (Day 7) | **MISSING** | ✗ deleted — must be recreated |

### Why API cannot recreate email steps

MailerLite's API now rejects email step creation with `jasonkrebsbooks@outlook.com` as the from address: "Campaigns cannot be sent from this domain. Please use an authenticated custom business domain." This is a platform policy change — free email provider domains are blocked. The existing trigger and delay steps are grandfathered, but new email steps cannot be created via API with the current account email.

**Two paths forward:**

**Option A (preferred) — Verify custom sending domain:**
1. In MailerLite dashboard → Account → Sending domains → Add domain `stayatthecrossroads.com`
2. Complete DNS verification (add required DKIM/SPF records to stayatthecrossroads.com DNS)
3. Once verified, Tess can create email steps via API with `from: hello@stayatthecrossroads.com`

**Option B — Add email steps manually in ML dashboard:**
1. Open automation `186277124364043274` in MailerLite dashboard
2. Add Email 1 step before Delay 1. Subject, preheader, body from this document.
3. Add Email 2 step between Delay 1 and Delay 2. Subject, preheader, body from this document.
4. Add Email 3 step after Delay 2. Subject, preheader, body from this document.
5. Use the drag-and-drop block editor in the ML dashboard. Block structure specified above.

### Before enabling the automation

- [ ] **Board:** recreate 3 email steps via dashboard (Option B) OR verify sending domain (Option A)
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
