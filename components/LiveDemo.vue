<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('小明')
const lastName = ref('王')
const fullName = computed(() => `${lastName.value}${firstName.value}`)

const greeting = computed(() =>
  fullName.value ? `嗨！我是 ${fullName.value} 👋` : '請輸入名字...'
)
</script>

<template>
  <div class="live-demo p-5 rounded-xl border border-green-400/30 bg-green-400/5">
    <div class="text-xs text-green-400 font-mono mb-3 opacity-70">▶ 這是活的！你可以改</div>

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
