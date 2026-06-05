# 因為 Node.js 才讓這一切變的可能 ⚙️

<div
  v-motion
  :initial="{ x: 60, opacity: 0 }"
  :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }"
  class="mt-4 text-xl opacity-60"
>
  前端工程化革命：從腳本語言到完整生態系
</div>

<!--
說到這裡，前端遇到了跟後端一樣的問題：規模變大，需要工程化。
Node.js 的出現讓前端有了真正的開發工具鏈。
-->

---
level: 2
---

# 為什麼網頁要變成「應用程式」？

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**傳統 MPA**

```mermaid {scale: 0.65}
graph TD
  A[使用者點擊] --> B[瀏覽器 GET /new-page]
  B --> C[伺服器重新渲染整頁]
  C --> D[回傳全新 HTML]
  D --> E[瀏覽器重新載入]
  E --> F[白屏 ⚡ 閃爍]
  F --> A
```

</div>

<div>

**現代 SPA**

```mermaid {scale: 0.65}
graph TD
  A[第一次載入] --> B[下載入口js]
  B --> C[之後所有互動都在前端]
  C --> D[需要資料？]
  D --> E[請求拿 JSON]
  E --> F[前端更新畫面]
  F --> C
```

</div>

</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:500}}" class="absolute bottom-8 left-14 right-14 z-20 rounded border border-sky-400/30 bg-sky-950/90 px-4 py-3 text-sm text-sky-100 shadow-lg" v-click="1">

- 使用者體驗更流暢：頁面切換不閃爍，像桌面應用程式
- <span v-mark.underline.blue>前後端分離</span>：後端只負責 API，前端只負責呈現
- 你的 API 端點可以同時服務 Web、Mobile、Desktop

</div>

<!--
後端工程師聽到「前後端分離」通常都鬆一口氣。
意思是你只要管好 API 就好，前端的事情前端自己處理。
-->

---
level: 2
---

# <logos-nodejs class="inline text-green-400" /> 前端宇宙的誕生

<div class="grid grid-cols-2 gap-8 mt-2">

<div>

<div class="text-5xl font-black text-green-400 mt-4">3,700,000+</div>
<div class="text-lg opacity-60 mt-1">npm 套件數量（2025）</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="mt-4 text-sm opacity-50 italic">
  ※ 連 <code>is-odd</code>（判斷是否為奇數）都是一個套件
</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:150,duration:400}}" class="mt-6 text-sm space-y-2">

<div class="flex items-center gap-2">
  <carbon-checkmark-filled class="text-green-400 flex-shrink-0" />
  npm / pnpm — 套件管理
</div>
<div class="flex items-center gap-2">
  <carbon-checkmark-filled class="text-green-400 flex-shrink-0" />
  <span>Vite</span> — 建構工具
</div>
<div class="flex items-center gap-2">
  <carbon-checkmark-filled class="text-green-400 flex-shrink-0" />
  Vue / React / Angular — UI 框架
</div>
<div class="flex items-center gap-2">
  <carbon-checkmark-filled class="text-green-400 flex-shrink-0" />
  Nuxt / Next.js — SSR Meta 框架
</div>

</div>
</div>

<div>

```mermaid {scale: 0.8}
mindmap
  root((Node.js))
    套件管理
      npm
      pnpm
      yarn
    建構工具
      Vite ⚡
      Webpack
      esbuild
    UI 框架
      Vue 3
      React
      Angular
    Meta 框架
      Nuxt 3
      Next.js
      SvelteKit
    測試工具
      Vitest
      Playwright
```

</div>

</div>

<!--
Node.js 讓 JavaScript 可以在伺服器端執行，
這開啟了整個前端工具鏈的可能性。

沒有 Node.js，就沒有 npm，就沒有 Vite，就沒有 Vue CLI，
前端就還在手動引入 script 標籤。
-->

---
level: 2
---

# 前端框架的漫長「進化」史 <carbon-time class="inline opacity-60" />

<div class="text-sm opacity-60 mb-2 italic">
  說到框架，前端工程師最愛做的事就是每三年重寫一次...
</div>

<FrameworkTimeline />

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="p-3 rounded-xl border border-yellow-400/30 bg-yellow-400/8 text-sm mt-10 text-amber-400 italic text-center" v-click>
不可否認的是，前端的管轄範圍已經從純使用者端進化涵蓋到了伺服器端甚至可以組件出自己的後端(BFF)

</div>
<!--
帶著大家點幾個節點，看看每個框架解決了什麼問題。

重點：Vue 出現是因為 Angular 太重、React 對後端來說太難。
Evan You 自己就是前端工程師，他知道什麼叫「學習友善」。

📌 每個節點可以簡單說：
  2010 Angular 1 → Google 帶來 MVC 概念，但太複雜
  2013 React → Facebook 帶來 Component，但 JSX 對後端很陌生
  2014 Vue → Evan You：「我就想要一個好上手的 React / Angular 替代品」
  2016 Angular 2 → Google 重寫了，打破向後相容，社群大暴走
  2016+ Next/Nuxt → SPA 的 SEO 問題逼出了 Meta Framework

📌 如果有人問「現在選哪個？」
  → 學習：Vue；工作有要求：配合公司；不知道：Vue 或 React 都行，概念通用。

📌 結尾金句：「每一個框架都是為了解決前一個的問題而生，但同時也帶來新的問題。」
-->

---
level: 2
layout: two-cols
layoutClass: gap-8
---

# 那為什麼選 Vue？

沒有最好的解方只有最適合的，並做出取捨

<div class="space-y-4 mt-4">

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="p-3 rounded-xl border border-red-400/30 bg-red-400/8 text-sm">
  <div class="font-bold text-red-400 mb-1">React <span class="text-xs font-normal opacity-50">Facebook, 2013</span></div>
  <div class="opacity-70 space-y-0.5">
    <div>• 虛擬 DOM: 學習曲線偏陡峭，需深入理解運作機制</div>
    <div>• 需要自己配 Router、狀態管理、測試框架...</div>
    <div>• 社群生態豐富但分散，選擇太多反而困難</div>
  </div>
  <div class="mt-2 pt-2 border-t border-red-400/20 text-xs text-sky-300/80 italic">
    捨棄：前端市場最廣 · Meta 超大規模實戰驗證 · 第三方生態最豐富
  </div>
</div>

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:150,duration:400}}" class="p-3 rounded-xl border border-yellow-400/30 bg-yellow-400/8 text-sm">
  <div class="font-bold text-yellow-400 mb-1">Angular <span class="text-xs font-normal opacity-50">Google, 2016</span></div>
  <div class="opacity-70 space-y-0.5">
    <div>• 超重量級，像是前端版的 .NET MVC（不是壞事，但很胖）</div>
    <div>• 大量 Decorator、DI、Module... 就是大卡車那種感覺</div>
    <div>• 學習曲線更高更不直覺是三者中最陡峭的</div>
  </div>
  <div class="mt-2 pt-2 border-t border-yellow-400/20 text-xs text-sky-300/80 italic">
    捨棄：最嚴謹的架構規範（大型團隊） · DI 讓測試最容易 · 企業規格最完整
  </div>
</div>

</div>

::right::

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:300,duration:400}}" class="p-4 rounded-xl border border-green-400/30 bg-green-400/8 text-sm mt-4">
  <div class="font-bold text-green-400 text-base mb-2">Vue 3 ✨ <span class="text-xs font-normal opacity-50">Evan You, 2014</span></div>
  <div class="space-y-1.5">
    <div class="flex items-start gap-2">
      <span class="text-green-400 flex-shrink-0">✅</span>
      <span><span v-mark.underline.yellow>漸進式框架</span>：可以慢慢導入，不用一次重寫</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400 flex-shrink-0">✅</span>
      <span>模板語法和<span v-mark.circle.orange> HTML 原生無縫接軌</span></span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400 flex-shrink-0">✅</span>
      <span>官方提供 Vue Router + Pinia，不用自己決定，整合度高</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400 flex-shrink-0">✅</span>
      <span v-mark.red>中文文件，社群活躍</span>
    </div>
    <div class="flex items-start gap-2">
      <span class="text-green-400 flex-shrink-0">✅</span>
      <span>學習曲線最平緩，後端工程師轉換成本最低</span>
    </div>
  </div>
</div>

<div v-motion :initial="{opacity:0,x:-200}" :enter="{opacity:1,x:0,transition:{delay:450,duration:400}}" class="mt-24 text-center text-sm opacity-60" v-click="4">
  OK，進入正題
  <Arrow x1="10" y1="40" x2="400" y2="40" />
</div>

<!--
不是在說其他框架不好。
React 和 Angular 各有很強大的地方，很多大公司在用。

但對於後端工程師「入門前端」這個場景，Vue 是最友善的選擇。
特別是那個模板語法，等等你們看到就知道我在說什麼了。
-->
