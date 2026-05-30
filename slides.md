---
theme: seriph
background: https://cover.sli.dev
title: 欸，前端到底在幹嘛？
info: |
  一個後端工程師的前端求生指南
  — 前端演化的核心關鍵
colorSchema: dark
transition: slide-left
comark: true
duration: 60min
drawings:
  persist: false
fonts:
  sans: TASA Explorer
  serif: Roboto Slab
  mono: Fira Code
---

# 欸，前端到底在幹嘛？ 

<div
  v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { delay: 400, duration: 600 } }"
  class="mt-4 text-xl opacity-80"
>
  <span class="text-amber-400">後端工程師</span> 的前端求生指南
</div>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
  class="mt-12"
>
  <div @click="$slidev.nav.next" class="py-1 cursor-pointer" hover:bg="white op-10">
    準備好了嗎？ <carbon:arrow-right class="inline" /><logos-vue class="inline w-10 h-10 ml-1" />
  </div>
</div>

<div class="abs-br m-6 text-xl" >
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
</div>

<!--
大家好！

今天不是在上課，是來探索一下前端工程師平常在玩什麼。
你們都是後端老鳥了，很多概念你們早就懂，只是前端用了不同的名字而已。

放輕鬆，就當在聊天。
-->

---
layout: two-cols
layoutClass: gap-16
level: 2
---

# 今天的節目 <carbon-list-bulleted class="inline text-2xl" />

我們就是來看看：

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:500}}" class="text-blue-200">

- 前端為什麼一直有新框架，更新速度快到跟不上（求別再更新了，老子學不動了）
- Node.js 怎麼讓這一切成為可能
- Vue 元件和熟悉的 Razor Partial 的關係
- Vue 3 最核心的那個「魔法」

</div>

::right::

<Toc v-motion :initial="{opacity:0,y:10}" :enter="{opacity:1,y:0,transition:{delay:200,duration:500}}" text-sm minDepth="1" maxDepth="1" v-click="1"/>

<!--
快速帶過今天的內容，不用逐項念。
讓大家掃一眼就好。
-->

---
src: ./pages/part1-chaos.md#1
layout: section
title: Everything before SPA.
level: 2
transition: fade
background: https://cover.sli.dev
---

---
src: ./pages/part1-chaos.md#2-10
---

---
src: ./pages/part2-spa.md#1
layout: section
transition: fade
background: https://cover.sli.dev
---

---
src: ./pages/part2-spa.md#2-5
---

---
src: ./pages/part3-components.md#1
layout: section
transition: fade
background: https://cover.sli.dev
---

---
src: ./pages/part3-components.md#2-6
---

---
src: ./pages/part4-reactivity.md#1
layout: section
transition: fade
background: https://cover.sli.dev
---

---
src: ./pages/part4-reactivity.md#2-6
---

---
src: ./pages/part5-next.md#1
layout: section
transition: fade
background: https://cover.sli.dev
---

---
src: ./pages/part5-next.md#2-4
---
