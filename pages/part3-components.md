# 元件：把畫面拆成可以組合的最小單位

<div
  v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
  class="mt-3 text-xl opacity-60 text-slate-300"
>
  從 Razor Partial 到 Vue component，其實是同一個思考方式的延伸
</div>

---
level: 2
---
# 模板引擎 Template Engine

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
  <div v-click="2" class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100">
    <strong class="text-sky-300">結構仍然是 HTML</strong><br>
    <code>&lt;template&gt;</code> 描述畫面骨架，元素與語意先保持清楚。
  </div>
  <div v-click="3" class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2 text-emerald-100">
    <strong class="text-emerald-300">插入變數資料</strong><br>
    <code>&#123;&#123; product.name &#125;&#125;</code> 把資料顯示到畫面文字中。
  </div>
  <div v-click="4" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-amber-100">
    <strong class="text-amber-300">綁定動態值</strong><br>
    <code>:disabled</code>、<code>:class</code> 讓屬性跟著狀態改變。
  </div>
  <div v-click="5" class="rounded border border-violet-400/30 bg-violet-400/10 px-3 py-2 text-violet-100">
    <strong class="text-violet-300">綁定使用者事件</strong><br>
    <code>@click="addToCart"</code> 把按鈕點擊交給函式處理。
  </div>
  <div v-click="6" class="rounded border border-white/20 bg-white/8 px-3 py-2 text-slate-100">
    <strong class="text-violet-300">模板只負責描述</strong><br>
    資料從 <code>&lt;script setup&gt;</code> 來，畫面由資料驅動產生。
  </div>
</div>

</div>

<!--
Part 3 的重點：讓後端工程師把 Vue component 看成更完整的 Partial。
不是只會拆檔案，而是理解 props、events、composition 與資料流。
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

```vue [UserList.vue ~i-logos:vue~]
<UserCard
  v-for="user in users"
  :key="user.name"
  :name="user.name"
  :role="user.role"
  :status="user.status"
  :is-admin="user.isAdmin"
/>
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
-->
