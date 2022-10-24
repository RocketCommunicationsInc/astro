---
"@astrouxds/astro-web-components": major
---

WHAT: rux-notification: remove message prop

WHY: when other named slots are entered into <rux-notification></rux-notification> the message prop is overwritten by unintentional blank spaces and carriage returns. A better pattern might be to have devs enter their message into the default slot.

HOW TO MIGRATE: If you were previously using message="my notification" to add your notification message, please move the message to the default slot within rux-notification such as <rux-notification>My Message</rux-notification>
