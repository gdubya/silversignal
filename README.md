Project Name: Lever du? (Norwegian for "Are you alive?" / "Are you there?")
Tagline: A low-friction safety net for independent seniors and their families.
Market: Norway (Primary).
Core Concept: A daily digital "heartbeat." A senior user must tap a single button once a day within a pre-defined window. If they fail to do so, the system triggers an escalation sequence to notify their designated emergency contacts (caregivers).
​2. Target Audience
​The Senior (70+): Lives alone, values independence, may be tech-literate but prefers extreme simplicity and high-visibility interfaces.
​The Caregiver (40-65): The adult child of the senior. Experiences "check-in anxiety" and manages the subscription and settings.
​3. Core Logic & Escalation Workflow
​The "Engine" of the app follows a strict time-based logic:
​The Window: A period defined by the Caregiver (e.g., 08:00 - 10:00).
​The Check-in: The Senior taps "Jeg er her!" (I'm here) in the app.
​The Nudge (Intermediate): If no check-in occurs by 30 minutes before the window ends, the Senior receives a high-volume notification/sound.
​The Alert (Escalation): If the window closes with no check-in, the system immediately notifies the Caregiver via Push Notification, SMS, and Email.

## Technical readme

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
