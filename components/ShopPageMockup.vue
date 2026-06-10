<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ step?: number }>()

interface Product { id: number; name: string; price: number; emoji: string }
interface CartItem extends Product { cartId: number }

const products: Product[] = [
  { id: 1, name: 'Vue Mug', price: 580, emoji: '☕' },
  { id: 2, name: 'Pinia Bag', price: 480, emoji: '🛍️' },
  { id: 3, name: 'Vue Shirt', price: 680, emoji: '👕' },
]

const cartItems = ref<CartItem[]>([
  { id: 1, name: 'Vue Mug', price: 580, emoji: '☕', cartId: 0 },
])
let nextId = 1
const total = computed(() => cartItems.value.reduce((sum, i) => sum + i.price, 0))
const cartCount = computed(() => cartItems.value.length)

function addToCart(p: Product) {
  cartItems.value.push({ ...p, cartId: nextId++ })
}
function removeFromCart(cartId: number) {
  cartItems.value = cartItems.value.filter(i => i.cartId !== cartId)
}

type Zone = 'root' | 'navbar' | 'grid' | 'card' | 'cart'

const stepOf: Record<Zone, number> = { root: 1, navbar: 2, grid: 3, card: 4, cart: 5 }
const palette: Record<Zone, { ring: string; badge: string }> = {
  root:   { ring: 'ring-sky-400',     badge: 'bg-sky-400 text-slate-900' },
  navbar: { ring: 'ring-violet-400',  badge: 'bg-violet-400 text-slate-900' },
  grid:   { ring: 'ring-emerald-400', badge: 'bg-emerald-400 text-slate-900' },
  card:   { ring: 'ring-amber-400',   badge: 'bg-amber-400 text-slate-900' },
  cart:   { ring: 'ring-rose-400',    badge: 'bg-rose-400 text-slate-900' },
}

const s = computed(() => props.step ?? 0)

function ring(zone: Zone): string {
  if (s.value === stepOf[zone])
    return `ring-2 ring-offset-1 ring-offset-slate-950 transition-all duration-300 ${palette[zone].ring}`
  if (s.value >= 6)
    return `ring-1 ring-offset-1 ring-offset-slate-950 transition-all duration-300 ${palette[zone].ring}/50`
  return 'transition-all duration-300'
}

function showBadge(zone: Zone): boolean {
  return s.value === stepOf[zone] || s.value >= 6
}
</script>

<template>
  <div
    class="rounded-lg bg-slate-950 border border-white/15  select-none text-white"
    :class="ring('root')"
  >
    <!-- ShopPage badge -->
    <div
      v-if="showBadge('root')"
      class="flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold leading-none"
      :class="palette.root.badge"
    >
      ShopPage
    </div>

    <!-- NavBar -->
    <header
      class="flex items-center gap-2 bg-slate-800/70 px-2.5 py-1.5 border-b border-white/10"
      :class="ring('navbar')"
    >
      <div
        v-if="showBadge('navbar')"
        class="flex-shrink-0 rounded px-1.5 py-0.5 text-[8px] font-bold leading-none"
        :class="palette.navbar.badge"
      >
        NavBar
      </div>
      <div class="flex items-center gap-1.5 font-bold text-emerald-400 text-[11px] flex-1">
        <div class="i-logos:vue h-3 w-3" />
        VueShop
      </div>
      <div class="flex items-center gap-2.5 text-[10px] text-slate-300">
        <span class="opacity-60">商品</span>
        <span class="opacity-60">關於</span>
        <div class="flex items-center gap-0.5">
          <span>🛒</span>
          <span class="rounded-full bg-rose-500 px-1 text-[8px] text-white min-w-[14px] text-center leading-tight font-bold">
            {{ cartCount }}
          </span>
        </div>
      </div>
    </header>

    <!-- Main layout -->
    <div class="flex">

      <!-- ProductGrid -->
      <div class="flex-1 p-2" :class="ring('grid')">
        <div
          v-if="showBadge('grid')"
          class="inline-block rounded px-1 py-0.5 text-[8px] font-bold leading-none mb-1"
          :class="palette.grid.badge"
        >
          ProductGrid
        </div>
        <div class="text-[9px] text-slate-400 mb-1.5" :class="{ 'mt-0.5': !showBadge('grid') }">
          商品列表
        </div>
        <div class="grid grid-cols-3 gap-1.5">
          <div
            v-for="(p, idx) in products"
            :key="p.id"
            class="rounded bg-slate-800/80 p-1.5"
            :class="ring('card')"
          >
            <div
              v-if="showBadge('card') && idx === 0"
              class="inline-block rounded px-1 py-0.5 text-[7px] font-bold leading-none mb-0.5 whitespace-nowrap"
              :class="palette.card.badge"
            >
              ProductCard
            </div>
            <div class="text-sm leading-none">{{ p.emoji }}</div>
            <div class="text-[9px] font-semibold text-white mt-0.5 leading-tight">{{ p.name }}</div>
            <div class="text-[8px] text-slate-400">NT${{ p.price }}</div>
            <button
              class="mt-1 w-full rounded bg-emerald-500/20 text-emerald-300 text-[8px] py-0.5 hover:bg-emerald-500/35 active:scale-95 transition-all cursor-pointer"
              @click.stop="addToCart(p)"
            >
              加入
            </button>
          </div>
        </div>

        <!-- Step-specific hint labels -->
        <div v-if="s === 3" class="mt-1.5 text-[8px] text-emerald-300 opacity-80">
          :products="[...3 items]"
        </div>
        <div v-if="s === 4" class="mt-1.5 text-[8px] text-amber-300 opacity-80">
          emit('add-cart', product) ↑
        </div>
      </div>

      <!-- CartSidebar -->
      <div
        class="w-[108px] flex-shrink-0 border-l border-white/10 bg-slate-800/40 p-2"
        :class="ring('cart')"
      >
        <div
          v-if="showBadge('cart')"
          class="inline-block rounded px-1 py-0.5 text-[8px] font-bold leading-none mb-1 whitespace-nowrap"
          :class="palette.cart.badge"
        >
          CartSidebar
        </div>
        <div class="font-semibold text-rose-300 text-[10px] mb-1.5" :class="{ 'mt-0.5': !showBadge('cart') }">
          🛒 購物車
        </div>
        <div
          v-for="item in cartItems"
          :key="item.cartId"
          class="flex items-center justify-between text-[9px] text-slate-300 mb-0.5"
        >
          <span class="truncate max-w-[72px]">{{ item.emoji }} {{ item.name }}</span>
          <button
            class="text-slate-500 hover:text-rose-400 text-[12px] leading-none flex-shrink-0 cursor-pointer transition-colors"
            @click.stop="removeFromCart(item.cartId)"
          >
            ×
          </button>
        </div>
        <div v-if="cartItems.length === 0" class="text-[9px] text-slate-500 italic">
          空的
        </div>
        <div class="mt-2 pt-1 border-t border-white/10 text-right text-amber-300 text-[9px]">
          NT$ {{ total }}
        </div>
        <button class="mt-1 w-full rounded bg-sky-500/20 text-sky-300 text-[8px] py-0.5 hover:bg-sky-500/30 transition-colors cursor-pointer">
          結帳
        </button>
        <div v-if="s === 5" class="mt-1 text-[8px] text-rose-300 opacity-80">
          :cart-items="[...]"
        </div>
      </div>
    </div>

    <!-- Step 6+: data flow footer -->
    <div
      v-if="s >= 6"
      class="border-t border-white/10 bg-black/30 px-3 py-1 flex items-center justify-around"
    >
      <span class="text-[9px] text-sky-300 font-mono">props ↓ 資料往下傳</span>
      <span class="text-white/20 text-[10px]">|</span>
      <span class="text-[9px] text-amber-300 font-mono">emit ↑ 意圖往上送</span>
    </div>
  </div>
</template>
