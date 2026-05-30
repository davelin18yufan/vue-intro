<script setup lang="ts">
interface PreviewProduct {
  name: string
  price: string
  accent: string
}

const products: PreviewProduct[] = [
  { name: 'Vue Mug', price: '$18', accent: 'bg-emerald-400' },
  { name: 'Pinia Tote', price: '$24', accent: 'bg-sky-400' },
]
</script>

<template>
  <div class="rounded border border-white/20 bg-slate-950/95 p-3 text-xs shadow-lg shadow-black/30">
    <div class="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
      <div class="flex items-center gap-2 font-bold text-white">
        <div class="i-logos:vue h-4 w-4" />
        AppLayout
      </div>
      <div class="rounded bg-white/10 px-2 py-0.5 text-slate-300">組合後畫面</div>
    </div>

    <div class="mb-2 grid grid-cols-2 gap-2">
      <div
        v-for="product in products"
        :key="product.name"
        class="rounded border border-white/12 bg-white/6 p-2"
      >
        <div class="mb-2 h-10 rounded" :class="product.accent" />
        <div class="font-bold text-white">{{ product.name }}</div>
        <div class="mt-1 flex items-center justify-between text-slate-300">
          <span>{{ product.price }}</span>
          <button class="rounded bg-sky-400/25 px-2 py-0.5 text-sky-100">add</button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between rounded bg-white/8 px-2 py-1 text-slate-300">
      <span>Footer</span>
      <span class="text-amber-300">ProductCard x {{ products.length }}</span>
    </div>
    <p class="text-end">By Dave</p>
  </div>
</template>
