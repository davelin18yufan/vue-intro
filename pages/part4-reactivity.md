# Vue 最酷的地方來了 ✨

<div
  v-motion
  :initial="{ scale: 0.8, opacity: 0 }"
  :enter="{ scale: 1, opacity: 1, transition: { duration: 600 } }"
  class="mt-4 text-xl opacity-60"
>
  響應式系統：你改資料，畫面自己更新
</div>

<!--
前面是概念，這裡是 Vue 真正讓人「哦！」的地方。

響應式系統是 Vue 的核心。理解這個，後面所有東西都會很順。
-->

---
level: 2
---

# 命令 vs 描述：根本的差異

````md magic-move {lines: true}
```html {*}
<!-- jQuery 方式：你要親自命令 DOM 做每一件事 -->
<input id="nameInput" type="text" />
<p id="greeting">你好！</p>
<button id="clearBtn">清除</button>

<script>
  $('#nameInput').on('input', function() {
    var name = $(this).val()
    if (name) {
      $('#greeting').text('你好，' + name + '！')
    } else {
      $('#greeting').text('你好！')
    }
  })

  $('#clearBtn').click(function() {
    $('#nameInput').val('')
    $('#greeting').text('你好！')  // ← 忘記這行就 Bug，並且不會有錯誤顯示
  })
</script>
```

```vue {*|4-8|11-17}
<!-- Vue 方式：你只管資料，DOM 的事 Vue 處理 -->
<script setup>
  import { ref, computed } from 'vue'

  // 資料就是唯一的可信來源
  const name = ref('')
  const greeting = computed(() =>
    name.value ? `你好，${name.value}！` : '你好！'
  )
</script>

<template>
  <!-- DOM 自動跟著 name 的值更新，不需要你手動操作 -->
  <input v-model="name" type="text" />
  <p>{{ greeting }}</p>
  <button @click="name = ''">清除</button>
</template>
```
````

<div
  v-click.hide="1"
  v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{delay:400,duration:400}}"
  class="pointer-events-none absolute inset-0"
>
  <svg class="h-full w-full" viewBox="0 0 980 552" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="reactivity-arrow-head" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="#10b981" />
      </marker>
    </defs>
    <path
      d="M 452 330 C 405 348, 350 370, 286 392"
      stroke="#10b981"
      stroke-width="3"
      stroke-linecap="round"
      marker-end="url(#reactivity-arrow-head)"
    />
  </svg>
</div>

<!--
這是最重要的一張投影片。

jQuery：你在命令 DOM。你要告訴 DOM「現在把這個文字換成那個」。
Vue：你在描述狀態。你說「greeting 這個值是這樣計算的」，然後 Vue 自己搞定 DOM。

類比：
jQuery 像是手動操作資料庫，每次要取資料都要自己寫 SQL。
Vue 像是 ORM，你定義好 Model，它自己處理。

有沒有一種感覺，就是 Blazor 的 @bind 也是這樣？
對，Vue 的 v-model 就是同一個概念。
-->

---
level: 2
layout: two-cols
layoutClass: gap-10
---

# ref()：包了就不一樣

<div class="text-sm text-slate-300 mb-3">
普通變數只是值；<code>ref()</code> 會把值包成 Vue 可以追蹤的響應式容器。
</div>

```ts {1|3-4|6-8|10-12|all}{maxHeight:'235px'}
import { ref } from 'vue'

// ref() 把一個普通值包裝成「響應式」的
const count = ref(0)

// script 中：用 .value 讀寫真正的值
console.log(count.value)  // 0
count.value++             // Vue 追蹤到變更

// template 中：Vue 會自動解包
// <p>{{ count }}</p>
// <button @click="count++">
```

<div class="mt-3 grid grid-cols-3 gap-2 text-xs">
  <div v-click="1" class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100" v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{duration:400}}">
    <div class="mb-1 font-bold text-sky-300">1. 包成容器</div>
    <code>ref(0)</code> 不是單純數字，而是可追蹤狀態。
  </div>
  <div v-click="2" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-amber-100" v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{duration:400}}">
    <div class="mb-1 font-bold text-amber-300">2. script 要 .value</div>
    讀寫 <code>count.value</code>，Vue 才能追蹤變更。
  </div>
  <div v-click="3" class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2 text-emerald-100" v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{duration:400}}">
    <div class="mb-1 font-bold text-emerald-300">3. template 自動解包</div>
    畫面寫 <code>count</code> 即可，不必到處補 <code>.value</code>。
  </div>
</div>

::right::

<div class="mt-1 text-sm">

<div class="mb-2 font-bold text-sky-300">現場示範：同一個 ref 驅動畫面</div>

<Counter :count="0" />

<div class="mt-3 rounded border border-white/15 bg-white/6 px-3 py-2 text-xs text-slate-300">
  按下按鈕只改 <code>n.value</code>；畫面上的數字由 Vue 自動更新。
</div>

```vue {2-8|12|all}{maxHeight:'175px'}
<!-- Counter.vue 簡化版 -->
<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    count: { default: 0 },
  })
  const n = ref(props.count)
</script>

<template>
  <button @click="n--">-</button>
  <span>{{ n }}</span>
  <button @click="n++">+</button>
</template>
```

</div>

<!--
ref() 是 Vue 3 最基礎的響應式 API。

.value 的部分一開始很多人覺得奇怪，
習慣了就好。template 裡不用 .value 是為了讓模板更簡潔。
-->

---
level: 2
---

# computed()：懶人救星

<div class="text-sm text-slate-300 ">
當一個值可以從其他狀態推導出來，就不要另外存一份；交給 <code>computed()</code> 維持同步。
</div>

````md magic-move {lines: true}
```ts
import { ref } from 'vue'

// 原始資料
const price    = ref(299)
const quantity = ref(3)
```

```ts {*|6-9}
import { ref, computed } from 'vue'

const price    = ref(299)
const quantity = ref(3)

// computed：從現有資料「推導」出新值
// price 或 quantity 只要其中一個變，total 就自動重算
const total = computed(() => price.value * quantity.value)
// total.value 現在是 897
```

```ts {*}
import { ref, computed } from 'vue'

const price    = ref(299)
const quantity = ref(3)
const total    = computed(() => price.value * quantity.value)

// 可以繼續推導（computed 可以依賴另一個 computed）
const tax         = computed(() => total.value * 0.05)
const totalWithTax = computed(() => total.value + tax.value)

// 格式化顯示
const summary = computed(() =>
  `${quantity.value} 件 × NT$${price.value} = NT$${totalWithTax.value.toFixed(0)}（含稅）`
)
// "3 件 × NT$299 = NT$941（含稅）"
```
````

<div class="mt-1 grid grid-cols-3 gap-2 text-xs">
  <div v-click="1" class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100" v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{duration:400}}">
    <div class="mb-1 font-bold text-sky-300">1. 保留原始資料</div>
    <code>price</code>、<code>quantity</code> 是 source of truth。
  </div>
  <div v-click="2" class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2 text-emerald-100" v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{duration:400}}">
    <div class="mb-1 font-bold text-emerald-300">2. 推導衍生值</div>
    <code>total</code>、<code>tax</code> 從現有資料計算，不手動同步。
  </div>
  <div v-click="3" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-amber-100" v-motion
  :initial="{opacity:0}"
  :enter="{opacity:1,transition:{duration:400}}">
    <div class="mb-1 font-bold text-amber-300">3. 依賴改才重算</div>
    改 <code>price.value</code>，相關 computed 會自動更新。
  </div>
</div>

<div v-click="4" class="mt-1 grid grid-cols-2 gap-1.5 text-[10px]" v-motion :initial="{opacity:0,x:100}" :enter="{opacity:1,x:0,transition:{duration:350}}">
  <div class="rounded border border-rose-400/30 bg-rose-400/10 px-2 py-1 text-rose-100">
    <span class="font-bold text-rose-300">❌ 沒包 computed()</span>
    <code class="block mt-0.5">const total = price.value * quantity.value</code>
    <div class="opacity-60">只算一次，之後不再更新</div>
  </div>
  <div class="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-emerald-100">
    <span class="font-bold text-emerald-300">✓ 有包 computed()</span>
    <code class="block mt-0.5">const total = computed(() => price.value * quantity.value)</code>
    <div class="opacity-60">Vue 追蹤依賴，price 一變就重算</div>
  </div>
</div>

<!--
computed 就是「衍生狀態」的概念。

類比：C# 的唯讀 property，getter 裡面計算值。
差別是 Vue 的 computed 會快取，只有依賴項改變才重算。

這讓你不需要到處手動同步資料。
-->

---
level: 2
layout: two-cols
layoutClass: gap-10
---

# 模板語法對照表

<div class="text-sm text-slate-300 mb-3">
Vue template 仍然是 HTML，只是把 Razor 的伺服器端語法換成瀏覽器端的響應式語法。
</div>

<div class="grid grid-cols-2 gap-2 text-xs">
  <div class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2" v-motion
  :initial="{opacity:0, x:-150}"
  :enter="{opacity:1,x:0,transition:{duration:400}}">
    <div class="font-bold text-sky-300">條件</div>
    <code>@if</code> → <code>v-if</code><br>
    <code>@else</code> → <code>v-else</code>
  </div>
  <div v-click="1" class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2" v-motion
  :initial="{opacity:0, x:-150}"
  :enter="{opacity:1,x:0,transition:{duration:400}}">
    <div class="font-bold text-emerald-300">列表</div>
    <code>@foreach</code> → <code>v-for</code><br>
    需要補 <code>:key</code> 追蹤項目
  </div>
  <div v-click="2" class="rounded border border-amber-400/30 bg-amber-400/10 px-3 py-2" v-motion
  :initial="{opacity:0, x:-150}"
  :enter="{opacity:1,x:0,transition:{duration:400}}">
    <div class="font-bold text-amber-300">資料顯示</div>
    <code>@Model.Name</code> → <code>&#123;&#123; name &#125;&#125;</code>
  </div>
  <div v-click="3" class="rounded border border-violet-400/30 bg-violet-400/10 px-3 py-2" v-motion
  :initial="{opacity:0, x:-150}"
  :enter="{opacity:1,x:0,transition:{duration:400}}">
    <div class="font-bold text-violet-300">互動與綁定</div>
    <code>onclick</code> → <code>@click</code><br>
    <code>@bind</code> → <code>v-model</code>
  </div>
</div>
<div v-click="5" class="mt-3 rounded border border-white/15 bg-white/6 px-3 py-2 text-xs text-slate-300" v-motion
  :initial="{opacity:0, x:-150}"
  :enter="{opacity:1,x:0,transition:{duration:400}}">
  最大差異：Razor 產生 HTML；<span v-mark.red>Vue template 會跟著響應式資料持續更新</span>
</div>


::right::

<div class="mt-1 text-sm">

<div class="mb-2 font-bold text-sky-300">實際對比：同一段 UI 意圖</div>

```html [Hello.cshtml ~i-logos:html-5~] {2-4|6-8|3,7|10-11|all}{at:0}{maxHeight:'180px'}
@* Razor *@
@if (Model.IsLoggedIn) {
  <p>歡迎，@Model.UserName！</p>
}

@foreach (var item in Model.Items) {
  <li>@item.Name</li>
}

<button onclick="save()">儲存</button>
<input @bind="searchText" />
```

</div>

<div class="mt-3">

```vue [Hello.vue ~i-logos:vue~] {1|3-5|1,4|7-8|all}{at:0}{maxHeight:'170px'}
<p v-if="isLoggedIn">歡迎，{{ userName }}！</p>

<li v-for="item in items" :key="item.id">
  {{ item.name }}
</li>

<button @click="save">儲存</button>
<input v-model="searchText" />
```

</div>


<!--
看到這裡，大家應該覺得「欸這不就是 Razor」。

對，語法幾乎是一對一的。
最大的差異是 Vue 的模板是「響應式的」，
改了資料，畫面自動更新，不需要 JavaScript 手動同步。

v-for 需要 :key，這是讓 Vue 追蹤每個列表項目用的，
就像 LINQ 裡的唯一識別符概念。
-->

---
level: 2
layout: two-cols
layoutClass: gap-6
---

# 輪各位試試

<div class="text-sm text-slate-300 mb-3">
左邊看資料與推導邏輯，右邊看同一個模型如何驅動畫面。
</div>

```vue {monaco}{maxHeight:'360px'}
<script setup>
  import { ref, computed } from 'vue'

  const firstName = ref('小明')
  const lastName  = ref('王')

  // 試試改改這裡的邏輯
  const fullName = computed(() =>
    `${lastName.value}${firstName.value}`
  )

  const greeting = computed(() =>
    fullName.value
      ? `嗨！我是 ${fullName.value} 👋`
      : '請輸入名字...'
  )
</script>

<template>
  <div class="live-demo p-5 rounded-xl border border-green-400/30 bg-green-400/5">
    <div class="text-xs text-green-400 font-mono mb-3 opacity-70">▶ 這裡必須動態即時更新</div>

    <div class="space-y-2 mb-4">
      <label class="flex items-center gap-3 text-sm">
        <span class="w-8 opacity-60">姓氏</span>
        <input
          v-model="lastName"
          class="flex-1 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-sm outline-none focus:border-green-400/60 transition-colors"
          placeholder="姓氏"
        />
      </label>
      <label class="flex items-center gap-3 text-sm">
        <span class="w-8 opacity-60">名字</span>
        <input
          v-model="firstName"
          class="flex-1 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-sm outline-none focus:border-green-400/60 transition-colors"
          placeholder="名字"
        />
      </label>
    </div>

    <div class="p-3 rounded-lg bg-white/8 border border-white/10 text-center">
      <div class="text-xs opacity-50 mb-1">computed 自動更新 →</div>
      <div class="text-lg font-bold text-green-300">{{ greeting }}</div>
    </div>
  </div>
</template>
```


::right::

<div class="mt-2 text-sm">

<div class="mb-2 font-bold text-sky-300">同樣的邏輯，正在運作：</div>

<LiveDemo />

<div class="mt-3 grid grid-cols-2 gap-2 text-xs">
  <div class="rounded border border-sky-400/30 bg-sky-400/10 px-3 py-2 text-sky-100">
    <div class="font-bold text-sky-300">ref</div>
    儲存可改變的輸入狀態。
  </div>
  <div class="rounded border border-emerald-400/30 bg-emerald-400/8 px-3 py-2 text-emerald-100">
    <div class="font-bold text-emerald-300">computed</div>
    自動推導要顯示的結果。
  </div>
</div>

</div>

<!--
左邊是可編輯的 Monaco editor（程式碼展示）。
右邊是真實運作的 LiveDemo 元件（一樣的邏輯）。

讓大家看到：code 改的東西，就是右邊在做的事情。

可以讓現場的人自己試試看。

📌 建議現場互動順序：

1. 先讓大家看右邊的 LiveDemo，在輸入框打字，觀察問候語即時變化。
   「看到了嗎？沒有一行 DOM 操作。」

2. 指著左邊的 computed：「這是唯一的邏輯，畫面只是呈現它的結果。」

3. 邀請大家可以試試：
   → 把 fullName 的順序改成 `${firstName.value}${lastName.value}`（先名後姓）
   → 把 greeting 的條件改成自己的邏輯
   → 加一個新的 computed，比如 `const nameLength = computed(() => fullName.value.length)`

4. 如果現場有時間，問大家：「如果用 jQuery 要怎麼做這件事？」
   → 讓他們感受差異，不用自己說。

💡 這一張是 Part 4 最有感的落點，確保大家在這裡「開竅」再往下走。
-->
