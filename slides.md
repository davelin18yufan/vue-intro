---
theme: seriph
background: https://cover.sli.dev
title: 欸，前端到底在幹嘛？
info: |
  一個後端工程師的前端求生指南
  — 從 jQuery 混沌到 Vue 3 的演進
class: text-center
transition: slide-left
comark: true
duration: 45min
drawings:
  persist: false
---

# 欸，前端到底在幹嘛？ <carbon:logo-vue class="inline text-green-400" />

<div
  v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { delay: 400, duration: 600 } }"
  class="mt-4 text-xl opacity-80"
>
  一個 <span v-mark.underline.orange>後端工程師</span> 的前端求生指南
</div>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
  class="mt-12"
>
  <div @click="$slidev.nav.next" class="py-1 cursor-pointer" hover:bg="white op-10">
    準備好了嗎？ <carbon:arrow-right class="inline" />
  </div>
</div>

<div class="abs-br m-6 text-xl">
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

# 今天的節目 <carbon:list class="inline" />

今天不考試，不用記筆記。  
我們就是來看看：

<v-clicks>

- 前端為什麼一直在換框架（真的很煩）
- Node.js 怎麼讓這一切成為可能
- Vue 元件和你熟悉的 Razor Partial 的關係
- Vue 3 最核心的那個「魔法」

</v-clicks>

::right::

<Toc v-click text-sm minDepth="1" maxDepth="1" />

<!--
快速帶過今天的內容，不用逐項念。
讓大家掃一眼就好。
-->

---
src: ./pages/part1-chaos.md
---

---
src: ./pages/part2-spa.md
---

---
src: ./pages/part3-components.md
---

---
src: ./pages/part4-reactivity.md
---

---
src: ./pages/part5-next.md
---
