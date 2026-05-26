---
layout: section
transition: fade
---

# 好啦，接下來可以自己玩了 🚀

<div
  v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
  class="mt-4 text-xl opacity-60"
>
  這份投影片是起點，下面那個連結是你真正開始的地方
</div>

<!--
這一章很短。
主要是讓大家知道下一步要做什麼，以及整個前端生態大概長怎樣。
-->

---
level: 2
layout: two-cols
layoutClass: gap-10
---

# 官方互動教程：最輕鬆的起點

不用裝任何東西，瀏覽器開一開就可以玩

<v-clicks>

- 🇹🇼 繁體中文介面，讀起來很舒服
- 🖥️ 瀏覽器裡直接寫 code 並執行
- 📚 15 個章節，從 `ref()` 一步一步帶你走
- ⏱️ 每章節 10-15 分鐘，不用一次全部做完
- ✅ 做完等於掌握 Vue 3 所有核心概念

</v-clicks>

<div v-click class="mt-8">
  <a
    href="https://zh-hk.vuejs.org/tutorial/#step-1"
    target="_blank"
    class="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg text-base font-bold transition-colors"
  >
    <carbon:launch class="text-lg" />
    立即開始 →
  </a>
</div>

<div v-click class="mt-3 text-xs opacity-40">
  https://zh-hk.vuejs.org/tutorial/#step-1
</div>

::right::

<div class="mt-4 p-4 rounded-xl border border-white/10 bg-white/5 text-sm space-y-3">

<div class="font-bold opacity-70 mb-2">教程涵蓋：</div>

<div v-click class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">①</span>
  <span><strong>宣告式渲染</strong> — 資料綁定基礎</span>
</div>
<div v-click class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">②</span>
  <span><strong>Attribute 綁定</strong> — :href, :class</span>
</div>
<div v-click class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">③</span>
  <span><strong>事件監聽</strong> — @click, @input</span>
</div>
<div v-click class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">④</span>
  <span><strong>表單綁定</strong> — v-model</span>
</div>
<div v-click class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">⑤</span>
  <span><strong>元件基礎</strong> — Props, Emits</span>
</div>
<div v-click class="flex items-start gap-2 opacity-60">
  <span class="flex-shrink-0 mt-0.5">⋯</span>
  <span>還有 10 個章節...</span>
</div>

</div>

<!--
重點：這個教程是互動式的，不是看影片也不是看文件。
你在瀏覽器裡直接寫 code，馬上看到結果。

這個學習方式對工程師來說是最有效的。
-->

---
level: 2
---

# 前端的世界大概長這樣

以防你好奇接下來還有什麼東西，這是大概的地圖：

<div class="grid grid-cols-2 gap-4 mt-6">

<div v-click class="p-4 rounded-xl border border-blue-400/30 bg-blue-400/8">
  <div class="flex items-center gap-3 mb-2">
    <carbon:roadmap class="text-2xl text-blue-400" />
    <div>
      <div class="font-bold">Vue Router</div>
      <div class="text-xs opacity-50">前端路由</div>
    </div>
  </div>
  <div class="text-sm opacity-70">
    管理 SPA 的頁面導航。<br/>
    概念上像 ASP.NET 的 Route，<br/>但切換頁面不需要重新請求伺服器。
  </div>
</div>

<div v-click class="p-4 rounded-xl border border-yellow-400/30 bg-yellow-400/8">
  <div class="flex items-center gap-3 mb-2">
    <carbon:data-base class="text-2xl text-yellow-400" />
    <div>
      <div class="font-bold">Pinia</div>
      <div class="text-xs opacity-50">狀態管理</div>
    </div>
  </div>
  <div class="text-sm opacity-70">
    跨元件共享狀態。<br/>
    概念上像後端的 Singleton Service，<br/>只是活在瀏覽器裡。
  </div>
</div>

<div v-click class="p-4 rounded-xl border border-green-400/30 bg-green-400/8">
  <div class="flex items-center gap-3 mb-2">
    <carbon:cube class="text-2xl text-green-400" />
    <div>
      <div class="font-bold">Nuxt 3</div>
      <div class="text-xs opacity-50">Meta 框架</div>
    </div>
  </div>
  <div class="text-sm opacity-70">
    想做 SSR / SSG 的話首選。<br/>
    概念上像 ASP.NET Core MVC，<br/>但前後端都是 TypeScript。
  </div>
</div>

<div v-click class="p-4 rounded-xl border border-orange-400/30 bg-orange-400/8">
  <div class="flex items-center gap-3 mb-2">
    <carbon:flash class="text-2xl text-orange-400" />
    <div>
      <div class="font-bold">Vite</div>
      <div class="text-xs opacity-50">建構工具</div>
    </div>
  </div>
  <div class="text-sm opacity-70">
    這個專案就在用的建構工具。<br/>
    概念上像 MSBuild，<br/>但快到讓你懷疑人生。
  </div>
</div>

</div>

<!--
這頁不用深入介紹，讓大家知道有這些東西就好。
等他們學會 Vue 基礎之後，自然會需要這些工具。
-->

---
layout: center
class: text-center
level: 2
---

<div
  v-motion
  :initial="{ scale: 0.8, opacity: 0 }"
  :enter="{ scale: 1, opacity: 1, transition: { duration: 800 } }"
>

# 欸，沒那麼難吧？ 🎉

</div>

<div
  v-motion
  :initial="{ y: 20, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { delay: 500, duration: 600 } }"
  class="text-lg opacity-70 mt-3"
>
  從 Razor Pages 到 Vue 3 — 你比你想像的更準備好了
</div>

<div v-click class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-xl mx-auto">
  <div class="p-3 rounded-lg border border-green-400/30 bg-green-400/10">
    <carbon:checkmark-filled class="text-green-400 text-xl mx-auto block" />
    <div class="mt-2 opacity-80">元件化思維</div>
    <div class="text-xs opacity-40 mt-1">Razor Partial → Vue SFC</div>
  </div>
  <div class="p-3 rounded-lg border border-blue-400/30 bg-blue-400/10">
    <carbon:checkmark-filled class="text-blue-400 text-xl mx-auto block" />
    <div class="mt-2 opacity-80">響應式資料</div>
    <div class="text-xs opacity-40 mt-1">ref() + computed()</div>
  </div>
  <div class="p-3 rounded-lg border border-purple-400/30 bg-purple-400/10">
    <carbon:checkmark-filled class="text-purple-400 text-xl mx-auto block" />
    <div class="mt-2 opacity-80">熟悉的模板</div>
    <div class="text-xs opacity-40 mt-1">v-if, v-for, v-model</div>
  </div>
</div>

<div v-click class="mt-8 text-sm opacity-50 space-x-4">
  <a href="https://zh-hk.vuejs.org/tutorial/#step-1" class="text-green-400 hover:underline">官方互動教程</a>
  <span>·</span>
  <a href="https://zh-hk.vuejs.org" class="text-blue-400 hover:underline">Vue 3 文件</a>
  <span>·</span>
  <a href="https://nuxt.com" class="text-emerald-400 hover:underline">Nuxt 3</a>
  <span>·</span>
  <a href="https://pinia.vuejs.org" class="text-yellow-400 hover:underline">Pinia</a>
</div>

<PoweredBySlidev mt-8 />

<!--
輕鬆結尾。

重申今天的核心訊息：
Vue 不是什麼全新的東西，它是你熟悉的概念的前端版本。
元件化、資料綁定、模板語法 — 這些你都有基礎。

下一步就是去做那個官方教程。
15 章節，做完就掌握了 Vue 3 的核心。
-->
