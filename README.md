# ssr-demos

Simple SSR Demo projects for all of our supported frameworks

## Findings

### React:

#### General observations:

- Server Side rendering **is not** possible, you will have to render on the client side via `"use client"`.
- I created a demo `Synergy.ts` that exports all components
- You will need to use our `@lit/react` based wrappers for this to work!
- `@lit-labs/next.js` does not work with latest version of Next. => Wrappers still needed :(
- When used in conjunction with next.js, not all components or third party dependencies work out of the box.
- Next HMR will load the whole lit another time, leading to `multiple versions of lit loaded` on every save action :(
- There is no possibility to use our custom events in server side code, so you need to opt out using `use client`. This means the code will not be part of the server side rendered html :(
- It seems all of our react wrapped components for react are in fact client side only by the [official react documentation](https://react.dev/reference/rsc/use-client#using-third-party-libraries) as they all use `forwardRef`.

#### Error messages that need to be fixed

- window is not defined (tab-group) => Prevents the final build from working

---

### Angular:

#### General observations:

- Seems to work pretty well by default :)
- Profits heavily from the new angular single import feature as unwanted components just break the build (see below).
- Some components are not SSR ready yet. Examples are syn-alert (creates the stack via `document.createElement`), syn-combobox (`createElementFromTemplateResult`)

#### Error messages

- document is not defined (e.g. syn-alert)