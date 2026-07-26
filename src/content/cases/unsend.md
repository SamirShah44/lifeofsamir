---
title: Unsend
caseId: CASE-001
tagline: "For the things you can't say out loud."
summary: >-
  A private stress-relief app. Type what you need to say, hold to commit, watch it
  shred into nothing. Zero data saved, zero data transmitted — the text lives in
  memory and dies with the animation.
status: live
order: 1
stack: [React Native, Expo, Animated API, expo-haptics, EAS Build]
links:
  - { label: "App Store", url: "https://apps.apple.com/app/idYOURID" }
  - { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.typhoonlabs.unsend" }
---

## The problem

Everyone has a draft they never sent. The 2am text. The reply you wrote and deleted
four times. The thing you should have said and didn't.

The research on this is real — expressive writing measurably reduces stress. But the
writing only happens if you feel safe enough to be honest, and you're only honest if
you know nobody will ever read it.

So the app's actual job isn't "provide a delete button." It's **make people feel safe
enough to write the thing, then give them a sense of release when it's gone.**

## Building the shredder

The hard part was making destruction *feel* like destruction.

The text input is sliced into twelve vertical strips. Each strip renders the full text
inside a container offset by a negative `left` value equal to that strip's position, and
clips it with `overflow: hidden`. Strip 0 shows the leftmost slice, strip 1 the next one
over, and so on — together they reconstruct the original text pixel-for-pixel.

Then each strip animates independently: falling, rotating in alternating directions, and
fading, with a 40ms stagger between them so it reads as paper feeding through a roller
rather than everything dropping at once.

```jsx
const animations = stripAnims.map((strip, i) =>
  Animated.parallel([
    Animated.timing(strip.translateY, {
      toValue: 600,
      duration: 1400,
      delay: i * 40,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }),
    Animated.timing(strip.rotate, {
      toValue: i % 2 === 0 ? 1 : -1,
      duration: 1400,
      delay: i * 40,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }),
  ])
);
```

Every transform runs on the native driver, so the whole sequence stays on the UI thread
and holds 60fps even on budget hardware.

## Friction as a feature

The first build shredded on a tap. It felt cheap — like throwing away a receipt.

So the button became a three-second hold. A red bar fills across it while you hold, and
the haptics escalate: light taps, then medium, then heavy, accelerating as the bar fills.
Let go early and it snaps back. Nothing happens.

You have to physically commit to letting it go. Same action, completely different weight.

## Architecture

A four-state machine — `INPUT → BREATH → SHREDDING → AFTERMATH` — with no persistence
layer anywhere in it. The text is a `useState` string. There is no `AsyncStorage` call, no
network request, no analytics SDK. The privacy claim in the store listing isn't a promise;
it's a description of the code.

## What shipped

Live on both stores. Google initially rejected it — the "Health & Fitness" category
requires an organization account under a policy that came into effect in 2024. Recategorized
to Lifestyle, resubmitted, approved.

## What I'd do differently

Design the destruction as a *system* from the start rather than a single animation. The
shredder works, but burn / bury / release-to-sky are all the same state machine with
different renderers — that should have been the architecture in v1, not a refactor for v1.2.
