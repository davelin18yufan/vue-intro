# 元件：把畫面拆成可以組合的最小單位

<div
  v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
  class="mt-3 text-xl opacity-60 text-slate-300"
>
  從 Razor Partial 到 Vue component，其實是同一個思考方式的延伸
</div>

<!--
Part 3 的破題：對後端工程師說「你其實早就在做元件化了，只是叫法不同。」

📌 銜接前面：
  Part 1 我們看到 copy-paste 的痛苦 → 解法就是把重複的 UI 抽成可重用的單位。
  Razor 的 Partial 就是這個概念的後端版本。
  Vue 的 Component 就是它的前端進化版，而且更強大。

目標：讓大家帶著「啊，這就是我已經在做的事」的熟悉感進入 Part 3。
-->

---
level: 2
---
# 模板引擎語法糖 Template Engine

<div class="mt-5 grid grid-cols-[1.2fr_1fr] gap-5 text-sm">

<div v-click="1" v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }">

```vue {1-11|13-24|15-22|14,17,18|7-10,17-22|*}{at:2}{maxHeight:'300px'}
<script setup lang="ts">
  const product = {
    name: 'Vue Mug',
    price: 580,
    inStock: true,
  }

  function addToCart() {
    console.log(product.name)
  }
</script>

<template>
  <article :class="{ soldout: !product.inStock }">
    <h3>{{ product.name }}</h3>
    <p>NT$ {{ product.price }}</p>
    <button
      :disabled="!product.inStock"
      @click="addToCart"
    >
      {{ product.inStock ? '加入購物車' : '補貨中' }}
    </button>
  </article>
</template>
```

</div>

<div class="space-y-3">
  <div v-click="2" class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100" v-motion :initial="{opacity:0,x:100}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-sky-300">結構仍然是 HTML</strong><br>
    <code>&lt;template&gt;</code> 描述畫面骨架，元素與語意先保持清楚。
  </div>
  <div v-click="3" class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2 text-emerald-100" v-motion :initial="{opacity:0,x:100}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-emerald-300">插入變數資料</strong><br>
    <code>&#123;&#123; product.name &#125;&#125;</code> 把資料顯示到畫面文字中。
  </div>
  <div v-click="4" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-amber-100" v-motion :initial="{opacity:0,x:100}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-amber-300">綁定動態值</strong><br>
    <code>:disabled</code>、<code>:class</code> 讓屬性跟著狀態改變。
  </div>
  <div v-click="5" class="rounded border border-violet-400/30 bg-violet-400/10 px-3 py-2 text-violet-100" v-motion :initial="{opacity:0,x:100}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-violet-300">綁定使用者事件</strong><br>
    <code>@click="addToCart"</code> 把按鈕點擊交給函式處理。
  </div>
  <div v-click="6" class="rounded border border-white/20 bg-white/8 px-3 py-2 text-slate-100" v-motion :initial="{opacity:0,x:100}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-violet-300">模板只負責描述</strong><br>
    資料從 <code>&lt;script setup&gt;</code> 來，畫面由資料驅動產生。
  </div>
</div>

</div>

<!--
Part 3 的重點：讓後端工程師把 Vue component 看成更完整的 Partial。
不是只會拆檔案，而是理解 props、events、composition 與資料流。

📌 逐步 click 帶：
  [highlight 第 1-11 行] script setup：準備資料，像後端 ViewModel 的 getter
  [highlight 第 13-24 行] template：描述 HTML 結構
  [highlight 第 15-22 行] 動態屬性與事件：用 : 和 @ 取代原生 attribute
  [highlight 第 14,17,18] :class 和 :disabled 是「狀態驅動樣式和行為」
  [highlight 第 7-10, 17-22] script 的資料如何對應到 template 的用法

📌 強調點：「template 的 HTML 長得幾乎和原生 HTML 一樣，只多了 Vue 指令。」
  → 對比 JSX（React 的寫法），這對後端工程師親切很多。

💡 可能有人問：`lang="ts"` 是什麼？→ 就是 TypeScript，可以加型別檢查。
-->

---
level: 2
layout: two-cols
layoutClass: gap-10
---

# 先從熟悉的 Partial 開始

同一張商品卡片，定義一次，到處重複使用

<div class="mt-4 text-sm">


```html [ProductCard.cshtml ~i-logos:html-5~]
@model ProductViewModel

<div class="product-card">
  <h3>@Model.Name</h3>
  <p class="price">NT$ @Model.Price</p>
  <button>加入購物車</button>
</div>
```

```html [Products.cshtml ~i-logos:html-5~]
@Html.Partial("_ProductCard", product)
```

</div>

::right::

<div v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="mt-4 text-sm" v-click="1">


```vue [ProductCard.vue ~i-logos:vue~]
<script setup lang="ts">
  defineProps<{
    name: string
    price: number
  }>()
</script>

<template>
  <div class="product-card">
    <h3>{{ name }}</h3>
    <p class="price">NT$ {{ price }}</p>
    <button>加入購物車</button>
  </div>
</template>
```

</div>

<div v-click="2" v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:400}}" class="absolute bottom-8 left-14 right-14 rounded border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-100">
  對照重點：<code>@model</code> 變成 <code>defineProps</code>，<code>@Model.Name</code> 變成 <code>&#123;&#123; name &#125;&#125;</code>。
</div>

<!--
這頁先建立映射：Partial = 一塊可重用 UI；Vue component = 一塊可重用 UI + 明確 props contract。

📌 一對一對照：
  `@model ProductViewModel` → `defineProps<{ name: string; price: number }>()`
  `@Model.Name`             → `{{ name }}`
  `@Html.Partial("_ProductCard", p)` → `<ProductCard :name="p.name" :price="p.price" />`

📌 Vue 比 Razor Partial 多出的是：
  1. props 有 TypeScript 型別，傳錯型別馬上報錯（Razor 要 runtime 才爆）
  2. 元件是「響應式的」，props 一變，畫面自動更新（Razor 是一次性渲染）
  3. 元件可以有自己的互動邏輯（Razor Partial 基本上只能輸出 HTML）

[click] 指著右欄：「就是把 C# 的 ViewModel model binding 改成 JS 的 defineProps。」
-->

---
level: 2
---

# Single File Component 的三個區塊

一個 `.vue` 檔案描述一塊 UI 的資料介面、畫面結構與局部樣式

<div class="mt-6 grid grid-cols-3 gap-5 text-sm">

<div v-click="1" v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{duration:350}}" class="rounded border border-sky-400/30 bg-sky-400/10 p-4">
  <div class="mb-3 flex items-center gap-2 font-bold text-sky-300">
    <carbon-code class="text-lg" />
    script setup
  </div>
  <div class="space-y-2 text-sky-100">
    <div>定義 props / emits</div>
    <div>準備狀態與 computed</div>
    <div>放互動邏輯與 composable</div>
  </div>
  <div class="mt-4 text-xs opacity-55">像後端的資料介面與行為入口</div>
</div>

<div v-click="2" v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:120,duration:350}}" class="rounded border border-emerald-400/30 bg-emerald-400/8 p-4">
  <div class="mb-3 flex items-center gap-2 font-bold text-emerald-300">
    <carbon-document class="text-lg" />
    template
  </div>
  <div class="space-y-2 text-emerald-100">
    <div>描述畫面長相</div>
    <div><code>v-if</code> / <code>v-for</code></div>
    <div><code>{{ }}</code> 顯示資料</div>
  </div>
  <div class="mt-4 text-xs opacity-55">像 `.cshtml` 的仿 HTML 結構</div>
</div>

<div v-click="3" v-motion :initial="{opacity:0,y:20}" :enter="{opacity:1,y:0,transition:{delay:240,duration:350}}" class="rounded border border-amber-400/30 bg-amber-400/10 p-4">
  <div class="mb-3 flex items-center gap-2 font-bold text-amber-300">
    <carbon-paint-brush class="text-lg" />
    style scoped
  </div>
  <div class="space-y-2 text-amber-100">
    <div>定義元件自己的樣式</div>
    <div><code>scoped</code> 限制作用範圍</div>
    <div>避免污染其他頁面</div>
  </div>
  <div class="mt-4 text-xs opacity-55">像把這塊 UI 的 CSS 收進邊界內</div>
</div>

</div>

<div v-click="4" class="mt-6 rounded border border-white/20 bg-white/8 px-4 py-3 text-center text-sm text-slate-100">
  Vue 建議順序：<code>&lt;script setup lang="ts"&gt;</code> → <code>&lt;template&gt;</code> → <code>&lt;style scoped&gt;</code>
</div>

<!--
套用 vue-best-practices：SFC sections 順序固定、component scoped styles、template declarative。

📌 逐 click 帶三個區塊：

[click 1] script setup：
  → 這裡是你的「後端大腦」：定義資料、計算邏輯、事件處理、呼叫 API。
  → `<script setup>` 是 Vue 3 推薦寫法（取代 Options API 的 data/methods/computed）。
  → 類比：像 C# controller 的 action 方法，準備 ViewModel。

[click 2] template：
  → 你的「前端外觀」：描述 UI 長什麼樣。
  → 只用宣告式語法（v-if、v-for、{{ }}），不寫邏輯，讓邏輯留在 script。
  → 類比：像 .cshtml，但有響應式能力。

[click 3] style scoped：
  → `scoped` 關鍵字讓這份 CSS 只套用在這個元件，不會污染全域。
  → 解決了全域 CSS 互相覆蓋的地獄（大家一定遇過 class 名稱衝突）。
  → 如果不加 scoped，就是全域樣式。

📌 有人問 Options API vs Composition API？
  → Options API 是 Vue 2 時代的寫法（data, methods, computed 分開）
  → Composition API（script setup）是 Vue 3 推薦，邏輯更好組合和重用。
  → 兩者都合法，但新專案建議一律用 script setup。
-->

---
level: 2
---

# Props：元件的輸入合約

同一個元件，傳入不同資料，就長出不同狀態

<PropsUserCardDemo v-motion :initial="{opacity:0,y:16}" :enter="{opacity:1,y:0,transition:{duration:400}}" :leave="{opacity:0, y:30}" class="mt-3 absolute z-99 w-5/6" v-click.hide />

<div class="grid grid-cols-2 gap-4 text-xs">

<div v-click="1" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">

**1. 父層包裝：決定資料從哪裡來**

```jsx [UserList.vue ~i-logos:vue~]
<div class="user-list">
  <p class="user-list--title">Team members</p>
  <UserCard
    v-for="user in users"
    :key="user.name"
    :name="user.name"
    :role="user.role"
    :status="user.status"
    :is-admin="user.isAdmin"
  />
</div>
```

</div>

<div v-click="2" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">

**2. 子層細節：宣告自己需要什麼**

```vue [UserCard.vue ~i-logos:vue~]
<script setup lang="ts">
  defineProps<{
    name: string
    role: string
    status: 'online' | 'busy' | 'offline'
    isAdmin?: boolean
  }>()
</script>
```

</div>

</div>

<div class="mt-3 grid grid-cols-3 gap-3 text-xs">
  <div v-click="3" class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <strong class="text-sky-300">Props down</strong><br>
    父層餵資料，子層根據資料顯示 UI。
  </div>
  <div v-click="4" class="rounded border border-violet-400/30 bg-violet-400/10 px-3 py-2 text-violet-100" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <strong class="text-violet-300">Readonly</strong><br>
    子元件不能改 props，只描述畫面。
  </div>
  <div v-click="5" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-amber-100" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">
    <strong class="text-amber-300">Typed contract</strong><br>
    <code>defineProps&lt;{ ... }&gt;</code> 讓元件介面清楚。
  </div>
</div>

<!--
重點：props 是輸入，不是共享可變狀態。父層擁有資料，子層負責呈現。

📌 逐 click 說明：
[click 1] 父層用 v-for 迭代並把每個 user 的資料傳進去（:name、:role...）
[click 2] 子層 defineProps 宣告「我需要這些」，TypeScript 保護型別
[click 3-5] 說明三個核心規則

📌 常見誤解要特別說：「props 是 readonly，子元件不能直接改它。」
  → 如果子元件需要基於 props 有自己的狀態，用 ref 建一份本地 copy：
    `const localName = ref(props.name)`
  → 如果子元件要「通知父層改資料」，要用 emit（下一張投影片）。

📌 TypeScript 的好處在這裡很明顯：
  `status: 'online' | 'busy' | 'offline'` → 傳進錯的字串，IDE 馬上紅線。
  比 Razor 的 @model 更嚴格，因為是編譯期就檢查。
-->

---
level: 2
---

# 元件組合：把大畫面拆成小責任

畫面不是一大坨 template，而是一棵可理解的元件樹

<div class="mt-4 grid grid-cols-[1fr_0.9fr] gap-6 text-sm">

<div>

```tsx {*|1,2,15|4,11|5-10|*}
<AppLayout>
  <NavBar :user="currentUser" />
  <main class="main-content">
    <ProductGrid>
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
        @add-cart="addToCart"
      />
    </ProductGrid>
  </main>
  <Footer />
  <p>By Dave</p>
</AppLayout>
```

</div>

<div class="space-y-3">
  <div v-click="1" class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100" v-motion :initial="{opacity:0,x:150}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-sky-300">AppLayout</strong> /
    <strong class="text-sky-300">NavBar</strong><br>
    頁面骨架與共用版型，共用導覽列。
  </div>
  <div v-click="2" class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2 text-emerald-100" v-motion :initial="{opacity:0,x:150}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-emerald-300">ProductGrid</strong><br>
    負責排列列表，不負責商品細節。
  </div>
  <div v-click="3" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-amber-100"  v-motion :initial="{opacity:0,x:150}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-amber-300">ProductCard</strong><br>
    只負責一張卡片的資料顯示，重複使用。
  </div>
  <div v-click="4" class="rounded border border-violet-400/30 bg-violet-400/10 px-3 py-2 text-violet-100" v-motion :initial="{opacity:0,x:150}" :enter="{opacity:1,x:0,transition:{duration:350}}">
    <strong class="text-violet-300" >事件往上</strong><br>
    卡片發出 <code>add-cart</code>，父層決定怎麼改狀態。
    <Arrow x1="-40" y1="200" x2="-40" y2="20" />
  </div>
</div>

</div>

<ComponentCompositionPreview
  v-click="5"
  class="absolute bottom-7 right-8 w-[360px]"
  v-motion :initial="{opacity:0,x:150}" :enter="{opacity:1,x:0,transition:{duration:350}}"
/>

<!--
元件拆分原則：small focused components。父層組合，子層專注單一責任。

📌 帶著大家讀這棵元件樹：

[click 1] AppLayout 和 NavBar → 「你的 Layout 和 _Layout.cshtml 是一樣概念，只是前端版本。」
[click 2] ProductGrid → 「只負責排列，不管商品細節。單一職責。」
[click 3] ProductCard → 「一張卡片，可以被任意 v-for 重複使用。」
[click 4] `@add-cart` → 「注意：事件是往上走的。ProductCard 不知道也不在乎購物車怎麼運作，它只發出意圖：『有人點了這個按鈕』。父層決定要怎麼處理。」

📌 如何判斷要不要再拆一個新元件？
  → 這段 template 在其他地方也要用 → 拆
  → 這個元件的 template 超過 50-100 行 → 考慮拆
  → 這段邏輯需要自己的狀態 → 考慮拆
  → 直覺上「這是一個獨立的東西」→ 拆

📌 類比後端：就像把一個大 Service 拆成多個小 Service，每個只做一件事。
-->

---
level: 2
---

# 元件雙向資料流：Props Down, Events Up

這是 Vue 元件能穩定擴大的核心規則

<div class="mt-6 grid grid-cols-[1fr_1fr_1fr] gap-4 text-sm">

<div v-click="1" class="rounded border border-sky-400/30 bg-sky-400/10 p-4 text-sky-100" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">
  <div class="mb-2 font-bold text-sky-300">1. Source of truth 在父層</div>
  父層擁有狀態，例如購物車、商品清單、目前使用者。
</div>

<div v-click="2" class="rounded border border-emerald-400/30 bg-emerald-400/8 p-4 text-emerald-100" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">
  <div class="mb-2 font-bold text-emerald-300">2. Props 往下傳</div>
  子元件只接收需要的資料，根據資料產生畫面。
</div>

<div v-click="3" class="rounded border border-amber-400/30 bg-amber-400/10 p-4 text-amber-100" v-motion :initial="{opacity:0,y:14}" :enter="{opacity:1,y:0,transition:{duration:350}}">
  <div class="mb-2 font-bold text-amber-300">3. Events 往上回報</div>
  子元件發出意圖，例如 <code>add-cart</code>，通知父層狀態有需要變更，進而觸發畫面更新。
</div>

</div>

```vue {*|1-4|6-8|9-12}{maxHeight:'200px'}
<!-- Parent.vue -->
<ProductCard
  :product="product"
  @add-cart="addToCart"
/>

<!-- ProductCard.vue -->
const props = defineProps<{ product: Product }>()
const emit = defineEmits<{ addCart: [product: Product] }>()

function onClick() {
  emit('addCart', props.product)
}
```

<div v-click="4" class="mt-4 rounded border border-white/20 bg-white/8 px-4 py-3 text-center text-sm text-slate-100" v-motion :initial="{opacity:0,x:150}" :enter="{opacity:1,x:0,transition:{duration:350}}">
  元件越拆越細，資料流越要清楚；這也是為什麼 Vue 強調明確的 props / emits 合約。
</div>

<!--
這頁收斂 Part 3：元件不是只有 UI reuse，而是資料流設計。

📌 這是整個 Part 3 最重要的一條規則，要讓大家記住。

[click 1] Source of truth 在父層 → 「資料只有一個主人。就像資料庫只有一份。」
[click 2] Props 往下傳 → 「父層把資料餵給子元件，子元件是消費者，不是擁有者。」
[click 3] Events 往上回報 → 「子元件發出意圖，父層收到後決定要不要改狀態。」

📌 走一遍 code 範例：
  → 父層把 `product` 傳下去，監聽 `add-cart` 事件
  → 子層宣告 props 和 emits，onClick 時 emit 出去
  → 父層的 addToCart function 才是真正改購物車狀態的地方

📌 為什麼要這樣？
  如果子元件可以直接改父層資料：資料流就變成雙向的，誰改了誰？何時改的？
  → debug 變成噩夢。這就是為什麼 Angular 2 的雙向綁定後來被大家批評的原因。

📌 類比後端：就像 HTTP 是單向 Request → Response。
  子元件「請求」（emit），父層「回應」（修改狀態，畫面更新）。
-->
