---
layout: section
transition: fade
---

# 你早就會這個了，只是名字不同 🧩

<div
  v-motion
  :initial="{ y: 30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
  class="mt-4 text-xl opacity-60"
>
  Vue 3 元件化設計 — 從熟悉的地方出發
</div>

<!--
這一章要讓大家有「原來如此」的感覺。
Vue 元件不是什麼神秘的東西，它就是你每天在做的事情的前端版本。
-->

---
level: 2
layout: two-cols
layoutClass: gap-10
---

# 認識一下，這就是 Vue 元件

看到這個不要緊張，仔細比較一下：

**Razor Partial View**

```cshtml
@* _ProductCard.cshtml *@
@model ProductViewModel

<div class="card">
  <h3>@Model.Name</h3>
  <p class="price">NT$ @Model.Price</p>
  <button>加入購物車</button>
</div>
```

**使用方式：**

```cshtml
@Html.Partial("_ProductCard", product)
```

::right::

<div v-click>

**Vue 單文件元件 (SFC)**

```vue
<!-- ProductCard.vue -->
<script setup>
defineProps(['name', 'price'])
</script>

<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p class="price">NT$ {{ price }}</p>
    <button>加入購物車</button>
  </div>
</template>
```

**使用方式：**

```html
<ProductCard :name="p.name" :price="p.price" />
```

</div>

<div v-click class="mt-4 text-sm text-center">
  <span v-mark.circle.green="2">defineProps</span> ≈ <span v-mark.circle.green="2">@model</span>
  &nbsp;·&nbsp; 都是「告訴外面要傳什麼進來」
</div>

<!--
給大家一點時間看這兩個對比。

重點：
- @model ProductViewModel → defineProps()
- @Model.Name → {{ name }}
- Html.Partial("_Card", product) → <ProductCard :name="..." />

結構完全一樣，只是語法不同。
-->

---
level: 2
---

# 從 Razor 到 Vue：同一件事，不同說法

````md magic-move {lines: true}
```html
@* _ProductCard.cshtml — 你熟悉的 Razor Partial *@
@model ProductCardViewModel

<div class="product-card">
  <img src="@Model.ImageUrl" alt="@Model.Name" />
  <h3>@Model.Name</h3>
  <p class="price">NT$ @Model.Price</p>
  <button class="btn">加入購物車</button>
</div>
```

```vue {*|3-9|11-19|21-25}
<!-- ProductCard.vue — Vue 單文件元件 (SFC) -->

<!-- ① 邏輯區（相當於 @model 宣告） -->
<script setup lang="ts">
defineProps<{
  imageUrl: string
  name: string
  price: number
}>()
</script>

<!-- ② 模板區（相當於 .cshtml 的 HTML 部分） -->
<template>
  <div class="product-card">
    <img :src="imageUrl" :alt="name" />
    <h3>{{ name }}</h3>
    <p class="price">NT$ {{ price }}</p>
    <button class="btn">加入購物車</button>
  </div>
</template>

<!-- ③ 樣式區（scoped = 不會污染全域 CSS） -->
<style scoped>
.price { color: #059669; font-weight: bold; }
</style>
```
````

<div class="text-xs opacity-50 mt-2 text-center">
  一個 .vue 檔案 = 邏輯 + 模板 + 樣式，全部放在一起，清清楚楚
</div>

<!--
Magic move 從 Razor 變成 Vue SFC。

按下去的時候分三步驟展示：
1. 先看 script setup（這就是 @model）
2. 再看 template（這就是 .cshtml 的 HTML）
3. 最後看 style scoped（CSS 不外洩，這個 Razor 比較難做到）
-->

---
level: 2
---

# SFC：三個區塊，各司其職

<div class="grid grid-cols-3 gap-5 mt-6">

<div v-click class="relative">
  <div class="p-4 rounded-xl border-2 border-blue-400/50 bg-blue-400/8">
    <div class="text-blue-400 font-bold mb-2 flex items-center gap-2">
      <carbon:code class="text-lg" /> script setup
    </div>
    <div class="text-sm opacity-75 space-y-1">
      <div>• 元件邏輯</div>
      <div>• Props 宣告</div>
      <div>• 資料狀態</div>
      <div>• 事件處理函式</div>
    </div>
    <div class="text-xs opacity-40 mt-3 italic">相當於 code-behind</div>
  </div>
</div>

<div v-click class="relative">
  <div class="p-4 rounded-xl border-2 border-green-400/50 bg-green-400/8">
    <div class="text-green-400 font-bold mb-2 flex items-center gap-2">
      <carbon:html class="text-lg" /> template
    </div>
    <div class="text-sm opacity-75 space-y-1">
      <div>• HTML 結構</div>
      <div>• <code>v-if</code> / <code>v-for</code></div>
      <div>• <code>{{ }}</code> 資料顯示</div>
      <div>• 事件綁定 <code>@click</code></div>
    </div>
    <div class="text-xs opacity-40 mt-3 italic">相當於 .cshtml 的 HTML 部分</div>
  </div>
</div>

<div v-click class="relative">
  <div class="p-4 rounded-xl border-2 border-orange-400/50 bg-orange-400/8">
    <div class="text-orange-400 font-bold mb-2 flex items-center gap-2">
      <carbon:paint-brush class="text-lg" /> style scoped
    </div>
    <div class="text-sm opacity-75 space-y-1">
      <div>• CSS 樣式</div>
      <div>• <code>scoped</code> = 只影響本元件</div>
      <div>• 不怕命名衝突</div>
      <div>• 也支援 SCSS/Tailwind</div>
    </div>
    <div class="text-xs opacity-40 mt-3 italic">比 Razor 的 CSS 更好管理</div>
  </div>
</div>

</div>

<div v-click class="mt-6 text-center text-sm opacity-60">
  一個元件就是一個 <code>.vue</code> 檔案，所有相關的東西都在一起 ✅
</div>

<!--
這個架構其實就是關注點分離，只是都放在同一個檔案裡。

對後端工程師來說，這個結構很直觀：
- script = 商業邏輯
- template = 視圖
- style = 樣式

跟 MVC 的概念是一樣的，只是前端版本。
-->

---
level: 2
---

# Props：從父傳子資料

````md magic-move {lines: true}
```cshtml
@* 父頁面傳資料給 Partial View *@
@Html.Partial("_UserCard", new UserCardViewModel {
    Name    = "王小明",
    Role    = "後端工程師",
    IsAdmin = true
})

@* _UserCard.cshtml — 用 @model 接收 *@
@model UserCardViewModel
<div class="user-card">
  <h3>@Model.Name</h3>
  <span class="role">@Model.Role</span>
  @if (Model.IsAdmin) {
    <span class="badge">管理員</span>
  }
</div>
```

```vue {*|3-8|12-20|23-28}
<!-- Vue：用 defineProps 接收（型別安全！） -->

<!-- UserCard.vue 的 script -->
<script setup lang="ts">
defineProps<{
  name: string
  role: string
  isAdmin?: boolean
}>()
</script>

<!-- UserCard.vue 的 template -->
<template>
  <div class="user-card">
    <h3>{{ name }}</h3>
    <span class="role">{{ role }}</span>
    <span v-if="isAdmin" class="badge">管理員</span>
  </div>
</template>

<!-- 父元件這樣使用 -->
<!--
靜態值：
<UserCard name="王小明" role="後端工程師" :is-admin="true" />

動態值（前面加 : 就是綁定 JS 表達式）：
<UserCard :name="user.name" :role="user.role" :is-admin="user.isAdmin" />
-->
```
````

<!--
重點：
- @Html.Partial("_Card", model) → <UserCard :name="..." />
- @model ViewModel → defineProps<{ ... }>()
- 動態綁定用 :name=，靜態字串用 name=
- v-if 就是 Razor 的 @if
-->

---
level: 2
---

# 用元件組合一個完整頁面

就像樂高積木，小元件拼成大頁面：

<div class="mt-4">

```html {1|2|3-7|8|all}
<AppLayout>              <!-- 整體框架 -->
  <NavBar :user="currentUser" />    <!-- 導覽列 -->
  <main>
    <ProductGrid>        <!-- 商品格子 -->
      <ProductCard       <!-- 一張卡片 -->
        v-for="p in products"
        :key="p.id"
        :name="p.name"
        :price="p.price"
        :image-url="p.image"
      />
    </ProductGrid>
  </main>
  <Footer />             <!-- 頁尾 -->
</AppLayout>
```

</div>

<div v-click class="mt-4 grid grid-cols-4 gap-3 text-xs text-center">
  <div class="p-2 rounded bg-blue-400/15 border border-blue-400/30">AppLayout<br/><span class="opacity-50">整體殼</span></div>
  <div class="p-2 rounded bg-green-400/15 border border-green-400/30">NavBar<br/><span class="opacity-50">導覽</span></div>
  <div class="p-2 rounded bg-orange-400/15 border border-orange-400/30">ProductCard<br/><span class="opacity-50">×N 重用</span></div>
  <div class="p-2 rounded bg-purple-400/15 border border-purple-400/30">Footer<br/><span class="opacity-50">頁尾</span></div>
</div>

<!--
每個元件只做一件事，然後組合在一起。
改 NavBar 不影響 ProductCard，改 ProductCard 不影響 Footer。

這就是元件化帶來的好處：
修改範圍清楚，不會動一個地方整個頁面都壞掉。
-->
