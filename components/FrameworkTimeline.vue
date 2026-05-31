<script setup lang="ts">
import { ref } from "vue"

interface TimelineItem {
  year: number
  name: string
  author: string
  icon: string
  color: string
  problem: string
  description: string
  isHighlighted?: boolean
  nodeBgClass?: string
}

const items: TimelineItem[] = [
  {
    year: 2006,
    name: "jQuery",
    author: "John Resig",
    icon: "i-logos:jquery",
    color: "blue",
    problem: "瀏覽器 API 各自為政，Chrome 做法不同，Firefox 做法不同",
    description:
      "一套 API 統一所有瀏覽器，讓 DOM 操作簡單到只要 $() 就搞定，鏈式呼叫到今天都還是很棒的設計",
    nodeBgClass: "bg-white/50",
  },
  {
    year: 2010,
    name: "AngularJS",
    author: "Google",
    icon: "i-logos:angular",
    color: "red",
    problem: "應用越來越大，jQuery code 像義大利麵，沒人維護得了",
    description:
      "第一個完整的前端 MVC 框架，引入雙向綁定概念，讓前端開發進入結構化時代",
  },
  {
    year: 2013,
    name: "React",
    author: "Facebook",
    icon: "i-logos:react",
    color: "cyan",
    problem: "AngularJS 的雙向綁定在大型應用中難以追蹤狀態變化",
    description:
      "虛擬 DOM + 單向資料流，讓複雜 UI 狀態可預測，元件化開發大行其道開創新時代，至今仍是前端第一大框架",
  },
  {
    year: 2014,
    name: "Vue",
    author: "Evan You",
    icon: "i-logos:vue",
    color: "green",
    problem: "Angular 太重，React 對新手來說學習曲線太陡峭，語法較不直覺原生",
    description:
      "漸進式框架，易學易用，官方提供 Router + 狀態管理完整方案，更直覺的模板語法，迅速在前端社群爆紅",
    isHighlighted: true,
  },
  {
    year: 2016,
    name: "Next.js",
    author: "Vercel",
    icon: "i-logos:nextjs-icon",
    color: "gray",
    problem: "SPA 的 SEO 問題和首頁白屏載入速度，以及前端無法控制伺服器行為和任務執行",
    description:
      "React SSR Meta 框架，讓前端進入伺服器開啟全端開發時代，Next.js 的成功也促使 Vue 社群加速推出自己的 SSR 解決方案",
  },
  {
    year: 2021,
    name: "Nuxt 3",
    author: "NuxtLabs",
    icon: "i-logos:nuxt-icon",
    color: "emerald",
    problem: "Vue SSR 配置複雜，沒有統一的全端開發規範",
    description: "Vue 生態的 Meta 框架，Vite 驅動，後端工程師的前端首選",
    isHighlighted: true,
  },
  {
    year: 2022,
    name: "Mixed Era 全面混合",
    author: "Astro / Svelte / HTMX",
    icon: "i-logos:astro",
    color: "orange",
    problem:
      "不是每個頁面都需要完整 SPA，內容型網站(CMS)、互動區塊、後端渲染各有適合的位置。",
    description:
      "Astro 強調 islands architecture，Svelte 走編譯器路線，HTMX 重新擁抱 server-rendered HTML。前端開始走向混合式、多元式的取捨。",
    nodeBgClass: "bg-white/50",
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
      <div class="absolute top-10 left-0 right-0 h-px bg-gray-500/40" />

      <!-- Nodes -->
      <div class="flex justify-between">
        <div
          v-for="item in items"
          :key="item.name"
          class="flex flex-col items-center cursor-pointer group"
          :style="{ width: `${100 / items.length}%` }"
          @click="toggleItem(item)"
        >
          <!-- Year -->
          <div class="text-xs opacity-50 mb-2 font-mono">{{ item.year }}</div>

          <!-- Logo node -->
          <div
            :class="[
              'relative z-10 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300',
              item.nodeBgClass ?? 'bg-gray-950/90',
              item.isHighlighted
                ? 'border-green-400 shadow-lg shadow-green-400/40'
                : 'border-white/25',
              activeItem?.name === item.name
                ? 'scale-125 ring-2 ring-white/35'
                : 'group-hover:scale-110',
            ]"
          >
            <div :class="[item.icon, 'h-5 w-5']" />
          </div>

          <!-- Name -->
          <div
            :class="[
              'text-xs font-bold mt-2 text-center leading-tight',
              item.isHighlighted
                ? 'text-green-400'
                : 'opacity-70 group-hover:opacity-100',
            ]"
          >
            {{ item.name }}
          </div>

          <!-- Author -->
          <div class="text-xs opacity-35 text-center mt-0.5">
            {{ item.author }}
          </div>
        </div>
      </div>
    </div>

    <!-- Detail card -->
    <Transition name="fade-slide">
      <div
        v-if="activeItem"
        class="mt-5 p-4 rounded-xl border border-gray-500/30 bg-white/5 backdrop-blur text-sm"
      >
        <div class="mb-1.5 flex items-center gap-2 font-bold text-base">
          <div :class="[activeItem.icon, 'h-5 w-5 flex-shrink-0']" />
          <span>{{ activeItem.name }}</span>
          <span class="text-xs font-normal opacity-40 ml-2"
            >{{ activeItem.year }} · {{ activeItem.author }}</span
          >
        </div>
        <div class="opacity-75 mb-1">
          <span class="text-red-400 font-semibold">痛點：</span
          >{{ activeItem.problem }}
        </div>
        <div class="opacity-75 text-green-50">
          <span class="text-green-400 font-semibold">貢獻：</span
          >{{ activeItem.description }}
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
