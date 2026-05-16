---
title: Why I Chose SvelteKit for This Site
date: "2025-02-03"
description: React was the obvious choice. I went with Svelte instead. Here's the reasoning.
tags: [svelte, webdev, tooling]
---

# Why I Chose SvelteKit

When I decided to build a personal site, React was the obvious default. It's everywhere. The ecosystem is massive. Tutorials are endless.

I picked Svelte anyway.

## The Reactive Model Just Clicks

Svelte's reactivity isn't a library feature — it's baked into the language. No `useState`, no `useEffect`, no mental overhead about when things re-render.

```js
let count = 0;
// That's it. It's reactive.
```

Coming from Python where things just *work*, this felt natural.

## Less Boilerplate, More Signal

A Svelte component is just HTML with superpowers. Compare a simple toggle in React vs Svelte:

**React:**
```jsx
const [open, setOpen] = useState(false);
return <button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'}</button>;
```

**Svelte:**
```svelte
<script>
  let open = false;
</script>
<button onclick={() => open = !open}>{open ? 'Close' : 'Open'}</button>
```

Less noise, same result.

## SvelteKit is a Full Stack Framework

Routing, server-side rendering, load functions, form actions — it's all there without reaching for Next.js or Remix.

## Would I Recommend It?

If you're building something greenfield and don't need a massive ecosystem, absolutely. The learning curve is gentle and the developer experience is genuinely enjoyable.

The docs are excellent. Start there.
