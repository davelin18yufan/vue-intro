---
layout: section
transition: fade
---

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
  $('#greeting').text('你好！')  // ← 忘記這行就 Bug，問過就知道
})
</script>
```

```vue {*|4-8|11-16}
<!-- Vue 方式：你只管資料，DOM 的事 Vue 處理 -->
<script setup>
import { ref, computed } from 'vue'

// 資料就是唯一的真相
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

<arrow v-click="3" x1="440" y1="330" x2="280" y2="390" color="#10b981" width="2" arrowSize="1" />

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

```ts {1|3-4|6-8|10-13|all}
import { ref } from 'vue'

// ref() 把一個普通值包裝成「響應式」的
const count = ref(0)

// 在 script 中：要用 .value 存取
console.log(count.value)  // 0
count.value++             // 改了！Vue 知道要更新畫面

// 在 template 中：自動解包，不用 .value
// <p>{{ count }}</p>  ← 直接寫，Vue 自己處理
// <button @click="count++">  ← 也可以！
```

<div class="mt-4 text-sm space-y-2">
  <div v-click="2">
    <span v-mark.circle.orange="2">ref(0)</span>
    → 把 <code>0</code> 包成一個「可追蹤的容器」
  </div>
  <div v-click="3">
    <span v-mark.underline.blue="3">.value</span>
    → script 裡存取必須加，template 裡不用
  </div>
  <div v-click="4">
    <span v-mark.box.green="4">template 自動解包</span>
    → Vue 偵測到你在模板裡用 ref，自動幫你加 .value
  </div>
</div>

::right::

<div class="mt-2">

**看個活的：**

<Counter :count="3" m="t-4" />

<div class="mt-4 text-xs opacity-50">
↑ 這個 Counter 元件就是用 ref() 做的
</div>

```vue
<!-- Counter.vue 簡化版 -->
<script setup>
import { ref } from 'vue'
const props = defineProps(['count'])
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

# computed()：懶人必備

懶得重複計算？讓 Vue 幫你：

````md magic-move {lines: true}
```ts
import { ref } from 'vue'

// 原始資料
const price    = ref(299)
const quantity = ref(3)
```

```ts {*|7-9}
import { ref, computed } from 'vue'

const price    = ref(299)
const quantity = ref(3)

// computed：從現有資料「推導」出新值
// price 或 quantity 只要其中一個變，total 就自動重算
const total = computed(() => price.value * quantity.value)
// total.value 現在是 897
```

```ts {*|10-12|13-14}
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

<div v-click="3" class="mt-3 text-sm opacity-60 text-center">
  改 <code>price.value = 399</code> → <code>total</code> 自動更新 → <code>tax</code> 自動更新 → <code>summary</code> 自動更新 ✨
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

你寫過 Razor，你已經懂一半了：

| Razor | Vue 模板 | 意思 |
|-------|----------|------|
| `@if (cond) { }` | `v-if="cond"` | 條件渲染 |
| `@else { }` | `v-else` | 否則 |
| `@foreach (x in list)` | `v-for="x in list"` | 列表渲染 |
| `@Model.Name` | `{{ name }}` | 顯示值 |
| `onclick="fn()"` | `@click="fn"` | 點擊事件 |
| `@bind` (Blazor) | `v-model` | 雙向綁定 |
| `href="@url"` | `:href="url"` | 動態屬性 |
| `class="@cls"` | `:class="cls"` | 動態 class |

::right::

<div v-click class="mt-2">

**實際對比：**

```cshtml
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

<div v-click class="mt-3">

```vue
<!-- Vue template -->
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

# 來，你試試看

<div class="text-sm opacity-70 mb-4">
  左邊是可以編輯的 code，右邊是同一份程式的實際運作
</div>

```vue {monaco}
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
```

::right::

<div class="mt-6">

**同樣的邏輯，正在運作：**

<LiveDemo />

<div class="mt-4 text-xs opacity-40 italic">
  → 改了 ref 的值，computed 自動重算，畫面自動更新<br/>
  → 這就是響應式系統的運作方式
</div>

</div>

<!--
左邊是可編輯的 Monaco editor（程式碼展示）。
右邊是真實運作的 LiveDemo 元件（一樣的邏輯）。

讓大家看到：code 改的東西，就是右邊在做的事情。

可以讓現場的人自己試試看。
-->
