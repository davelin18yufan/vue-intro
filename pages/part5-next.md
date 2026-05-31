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

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:500}}">

- 🇹🇼 繁體中文介面，讀起來很舒服
- 🖥️ 瀏覽器裡直接寫 code 並執行
- 📚 15 個章節，從 `ref()` 一步一步帶你走
- ⏱️ 每章節 10-15 分鐘，不用一次全部做完
- ✅ 做完等於掌握 Vue 3 所有核心概念

</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:300,duration:400}}" class="mt-8">
  <a
    href="https://zh-hk.vuejs.org/tutorial/#step-1"
    target="_blank"
    class="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg text-base font-bold transition-colors"
  >
    <carbon:launch class="text-lg" />
    立即開始 →
  </a>
</div>

<Link v-motion :initial="{opacity:0}" :enter="{opacity:1,transition:{delay:400,duration:400}}" class="mt-3 text-xs opacity-40">
  https://zh-hk.vuejs.org/tutorial/#step-1
</Link>

::right::

<div class="mt-4 p-4 rounded-xl border border-white/10 bg-white/5 text-sm space-y-3">

<div class="font-bold opacity-70 mb-2">教程涵蓋：</div>

<div v-motion :initial="{opacity:0,x:-10}" :enter="{opacity:1,x:0,transition:{delay:0,duration:350}}" class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">①</span>
  <span><strong>宣告式渲染</strong> — 資料綁定基礎</span>
</div>
<div v-motion :initial="{opacity:0,x:-10}" :enter="{opacity:1,x:0,transition:{delay:100,duration:350}}" class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">②</span>
  <span><strong>Attribute 綁定</strong> — :href, :class</span>
</div>
<div v-motion :initial="{opacity:0,x:-10}" :enter="{opacity:1,x:0,transition:{delay:200,duration:350}}" class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">③</span>
  <span><strong>事件監聽</strong> — @click, @input</span>
</div>
<div v-motion :initial="{opacity:0,x:-10}" :enter="{opacity:1,x:0,transition:{delay:300,duration:350}}" class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">④</span>
  <span><strong>表單綁定</strong> — v-model</span>
</div>
<div v-motion :initial="{opacity:0,x:-10}" :enter="{opacity:1,x:0,transition:{delay:400,duration:350}}" class="flex items-start gap-2">
  <span class="text-green-400 flex-shrink-0 mt-0.5">⑤</span>
  <span><strong>元件基礎</strong> — Props, Emits</span>
</div>
<div v-motion :initial="{opacity:0,x:-10}" :enter="{opacity:1,x:0,transition:{delay:500,duration:350}}" class="flex items-start gap-2 opacity-60">
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

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="p-4 rounded-xl border border-blue-400/30 bg-blue-400/8">
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

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:150,duration:400}}" class="p-4 rounded-xl border border-yellow-400/30 bg-yellow-400/8">
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

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:300,duration:400}}" class="p-4 rounded-xl border border-green-400/30 bg-green-400/8">
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

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:450,duration:400}}" class="p-4 rounded-xl border border-orange-400/30 bg-orange-400/8">
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
level: 2
---

# Vue 生態系一覽：社群的創造力

同一個框架基礎，社群堆出了整個工具宇宙，你遇到的問題幾乎都有現成方案

<div class="grid grid-cols-3 gap-4 mt-4">

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="rounded-xl border border-violet-400/30 bg-violet-400/8 p-3">
  <div class="mb-3 flex items-center gap-2 font-bold text-violet-300">
    <carbon:application-web class="text-base" />
    UI 元件庫
  </div>
  <div class="space-y-2 text-xs">
    <a href="https://vuetifyjs.com" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Vuetify</span>
      <span class="opacity-60 leading-tight">Material Design 完整元件庫，開箱即用</span>
    </a>
    <a href="https://element-plus.org" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Element Plus</span>
      <span class="opacity-60 leading-tight">後台系統首選，企業級桌面元件</span>
    </a>
    <a href="https://www.naiveui.com" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Naive UI</span>
      <span class="opacity-60 leading-tight">TypeScript-first，主題客製化彈性高</span>
    </a>
    <a href="https://www.shadcn-vue.com" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">shadcn-vue</span>
      <span class="opacity-60 leading-tight">複製即擁有，無樣式底層可完全客製</span>
    </a>
     <a href="https://chillcomponent.codlin.me/components/toggle-proactive/#%E5%85%83%E4%BB%B6%E5%8F%83%E6%95%B8" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">鱈魚的酷酷元件</span>
    <span class="opacity-60 leading-tight">台灣資深 vue 專家，創意有趣滑順於一身</span>
    </a>
  </div>
</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:350,duration:400}}" class="rounded-xl border border-amber-400/30 bg-amber-400/8 p-3">
  <div class="mb-3 flex items-center gap-2 font-bold text-amber-300">
    <carbon:tool-box class="text-base" />
    組合式工具庫
  </div>
  <div class="space-y-2 text-xs">
    <a href="https://vueuse.org" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">VueUse</span>
      <span class="opacity-60 leading-tight">200+ 組合式 API 工具函數，幾乎必裝</span>
    </a>
    <a href="https://vee-validate.logaretm.com" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">VeeValidate</span>
      <span class="opacity-60 leading-tight">表單驗證，整合 Zod / Yup Schema</span>
    </a>
    <a href="https://tanstack.com/query/latest/docs/framework/vue/overview" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">TanStack Query</span>
      <span class="opacity-60 leading-tight">非同步狀態管理、快取、重試一次搞定</span>
    </a>
    <a href="https://vue-i18n.intlify.dev" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Vue I18n</span>
      <span class="opacity-60 leading-tight">多語系國際化，官方推薦方案</span>
    </a>
  </div>
</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:300,duration:400}}" class="rounded-xl border border-sky-400/30 bg-sky-400/8 p-3">
  <div class="mb-3 flex items-center gap-2 font-bold text-sky-300">
    <carbon:settings-services class="text-base" />
    底層基礎設施
  </div>
  <div class="space-y-2 text-xs">
    <a href="https://nitro.build" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Nitro</span>
      <span class="opacity-60 leading-tight">通用伺服器引擎，Nuxt 的底層，可獨立使用</span>
    </a>
    <a href="https://vitest.dev" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Vitest</span>
      <span class="opacity-60 leading-tight">Vite-native 單元測試，Jest 語法相容</span>
    </a>
    <a href="https://zod.dev" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">Zod</span>
      <span class="opacity-60 leading-tight">TypeScript-first Schema 驗證，前後端共用</span>
    </a>
    <a href="https://github.com/unjs/ofetch" target="_blank" class="flex items-start gap-2 rounded p-1.5 hover:bg-white/5 transition-colors no-underline">
      <span class="font-bold text-white">ofetch</span>
      <span class="opacity-60 leading-tight">現代 HTTP client，Nuxt 內建使用</span>
    </a>
  </div>
</div>

</div>

<!--
不用一一介紹，帶過就好。

重點是讓大家感受到：你想做的幾乎都有現成的。
VueUse 值得特別提一下——它就像是 Vue 版的 Lodash，但是 Composition API 風格。
TanStack Query 也值得一提——後端工程師很快就會需要它，因為前端非同步狀態比你想像的複雜。
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
  從傳統 MPA 到 Vue 3 — 我們準備好了
</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:500}}" class="mt-8 grid grid-cols-3 gap-4 text-sm max-w-xl mx-auto">
  <div class="p-3 rounded-lg border border-green-400/30 bg-green-400/8">
    <carbon:checkmark-filled class="text-green-400 text-xl mx-auto block" />
    <div class="mt-2 opacity-80">元件化思維</div>
    <div class="text-xs opacity-40 mt-1">Razor Partial → Vue SFC</div>
  </div>
  <div class="p-3 rounded-lg border border-blue-400/30 bg-blue-400/8">
    <carbon:checkmark-filled class="text-blue-400 text-xl mx-auto block" />
    <div class="mt-2 opacity-80">響應式資料</div>
    <div class="text-xs opacity-40 mt-1">ref() + computed()</div>
  </div>
  <div class="p-3 rounded-lg border border-purple-400/30 bg-purple-400/8">
    <carbon:checkmark-filled class="text-purple-400 text-xl mx-auto block" />
    <div class="mt-2 opacity-80">熟悉的模板</div>
    <div class="text-xs opacity-40 mt-1">v-if, v-for, v-model</div>
  </div>
</div>

<div v-motion :initial="{opacity:0}" :enter="{opacity:1,transition:{delay:200,duration:400}}" class="mt-8 text-sm opacity-50 space-x-4">
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
