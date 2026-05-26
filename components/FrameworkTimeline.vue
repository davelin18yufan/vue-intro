<script setup lang="ts">
import { ref } from 'vue'

interface TimelineItem {
  year: number
  name: string
  author: string
  color: string
  problem: string
  description: string
  isHighlighted?: boolean
}

const items: TimelineItem[] = [
  {
    year: 2006,
    name: 'jQuery',
    author: 'John Resig',
    color: 'blue',
    problem: '瀏覽器 API 各自為政，Chrome 做法不同，Firefox 做法不同',
    description: '一套 API 統一所有瀏覽器，讓 DOM 操作簡單到只要 $() 就搞定',
  },
  {
    year: 2010,
    name: 'AngularJS',
    author: 'Google',
    color: 'red',
    problem: '應用越來越大，jQuery code 像義大利麵，沒人維護得了',
    description: '第一個完整的前端 MVC 框架，引入雙向綁定概念',
  },
  {
    year: 2013,
    name: 'React',
    author: 'Facebook',
    color: 'cyan',
    problem: 'AngularJS 的雙向綁定在大型應用中難以追蹤狀態變化',
    description: '虛擬 DOM + 單向資料流，讓複雜 UI 狀態可預測',
  },
  {
    year: 2014,
    name: 'Vue',
    author: 'Evan You',
    color: 'green',
    problem: 'Angular 太重，React 對後端工程師來說學習曲線太陡峭',
    description: '漸進式框架，易學易用，官方提供 Router + 狀態管理完整方案',
    isHighlighted: true,
  },
  {
    year: 2016,
    name: 'Next.js',
    author: 'Vercel',
    color: 'gray',
    problem: 'SPA 的 SEO 問題和首頁白屏載入速度',
    description: 'React SSR Meta 框架，讓前後端整合更簡單',
  },
  {
    year: 2021,
    name: 'Nuxt 3',
    author: 'NuxtLabs',
    color: 'emerald',
    problem: 'Vue SSR 配置複雜，沒有統一的全端開發規範',
    description: 'Vue 生態的 Meta 框架，Vite 驅動，後端工程師的前端首選',
  },
]

const activeItem = ref<TimelineItem | null>(null)

function toggleItem(item: TimelineItem) {
  activeItem.value = activeItem.value?.name === item.name ? null : item
}
</script>

<template>
  <div class="timeline-wrapper px-2">
    <div class="relative mt-6">
      <!-- Horizontal line -->
      <div class="absolute top-7 left-0 right-0 h-px bg-gray-500/40" />

      <!-- Nodes -->
      <div class="flex justify-between">
        <div
          v-for="item in items"
          :key="item.name"
          class="flex flex-col items-center cursor-pointer group"
          style="width: 16%"
          @click="toggleItem(item)"
        >
          <!-- Year -->
          <div class="text-xs opacity-50 mb-2 font-mono">{{ item.year }}</div>

          <!-- Dot -->
          <div
            :class="[
              'w-4 h-4 rounded-full border-2 transition-all duration-300 z-10',
              item.isHighlighted
                ? 'bg-green-400 border-green-400 scale-150 shadow-lg shadow-green-400/50'
                : 'bg-gray-600 border-gray-400',
              activeItem?.name === item.name
                ? 'ring-2 ring-offset-1 ring-offset-transparent scale-150'
                : 'group-hover:scale-125',
              item.isHighlighted && activeItem?.name === item.name
                ? 'ring-green-400/60'
                : 'ring-white/40',
            ]"
          />

          <!-- Name -->
          <div
            :class="[
              'text-xs font-bold mt-2 text-center leading-tight',
              item.isHighlighted ? 'text-green-400' : 'opacity-70 group-hover:opacity-100',
            ]"
          >
            {{ item.name }}
          </div>

          <!-- Author -->
          <div class="text-xs opacity-35 text-center mt-0.5">{{ item.author }}</div>
        </div>
      </div>
    </div>

    <!-- Detail card -->
    <Transition name="fade-slide">
      <div
        v-if="activeItem"
        class="mt-5 p-4 rounded-xl border border-gray-500/30 bg-white/5 backdrop-blur text-sm"
      >
        <div class="font-bold text-base mb-1.5">
          {{ activeItem.name }}
          <span class="text-xs font-normal opacity-40 ml-2">{{ activeItem.year }} · {{ activeItem.author }}</span>
        </div>
        <div class="opacity-75 mb-1">
          <span class="text-red-400 font-semibold">痛點：</span>{{ activeItem.problem }}
        </div>
        <div class="opacity-75">
          <span class="text-green-400 font-semibold">貢獻：</span>{{ activeItem.description }}
        </div>
      </div>
    </Transition>

    <div v-if="!activeItem" class="mt-4 text-center text-xs opacity-30">
      點擊任何節點看故事 ↑
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
