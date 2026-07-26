---
title: Setting up OpenGL with C++
summary: >-
  GLFW, GLAD, and a build system that actually works — from empty folder to a black
  window rendering at 60fps. The setup step that stops most people before they start.
number: 1
kind: video
duration: "12:45"
topics: [OpenGL, C++, GLFW, GLAD]
published: 2026-08-01
draft: true
---

## Why setup is the hardest part

Most OpenGL tutorials open with a triangle. That's not where people get stuck — people
get stuck two hours earlier, on linker errors.

OpenGL is a specification, not a library. Your GPU driver implements it. To call into it
you need two things your OS won't hand you: a window with a GL context attached (GLFW),
and function pointers resolved at runtime (GLAD).

## What we're installing

- **GLFW** — creates the window, the OpenGL context, and handles keyboard/mouse input
- **GLAD** — loads the OpenGL function pointers your driver exposes
- **CMake** — so this builds on someone else's machine

> Replace this file with your real writeup when you record the video. The frontmatter
> above controls the card on the homepage — set `draft: false` to publish it.
