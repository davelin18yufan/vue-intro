<script setup lang="ts">
interface UserCard {
  name: string
  role: string
  isAdmin?: boolean
  status: 'online' | 'busy' | 'offline'
  icon: string
}

const users: UserCard[] = [
  { name: 'Ting', role: 'Backend Engineer', isAdmin: true, status: 'online', icon: 'i-carbon-server-proxy' },
  { name: 'Kelly', role: 'Supportive Engineer', status: 'busy', icon: 'i-carbon-user-avatar' },
  { name: 'Ada', role: 'PM', status: 'offline', icon: 'i-carbon-user-profile' },
]

const statusClass: Record<UserCard['status'], string> = {
  online: 'bg-emerald-400',
  busy: 'bg-amber-400',
  offline: 'bg-slate-500',
}

const statusText: Record<UserCard['status'], string> = {
  online: 'online',
  busy: 'busy',
  offline: 'offline',
}
</script>

<template>
  <div class="rounded border border-white/15 bg-white/6 p-3">
    <div class="mb-2 flex items-center justify-between text-xs">
      <div class="font-bold text-blue-400">Team members</div>
      <div class="text-slate-400">same component, different props</div>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div
        v-for="user in users"
        :key="user.name"
        class="group rounded border border-white/15 bg-black/25 p-3 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-black/35"
      >
        <div class="mb-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div
              class="flex h-8 w-8 items-center justify-center rounded bg-white/10 transition duration-300 group-hover:rotate-6 group-hover:scale-110"
            >
              <div :class="[user.icon, 'h-5 w-5']" />
            </div>
            <div class="font-bold text-white">{{ user.name }}</div>
          </div>
          <span
            class="h-2.5 w-2.5 rounded-full transition duration-300"
            :class="[statusClass[user.status], user.status === 'online' ? 'animate-pulse' : '']"
            :title="statusText[user.status]"
          />
        </div>
        <div class="flex items-center gap-1.5 text-xs text-slate-300">
          <carbon-badge class="text-slate-500" />
          {{ user.role }}
        </div>
        <div
          v-if="user.isAdmin"
          class="mt-2 inline-flex items-center gap-1 rounded bg-violet-400/20 px-2 py-0.5 text-xs text-violet-200"
        >
          <carbon-security class="text-violet-300" />
          Admin
        </div>
      </div>
    </div>

    <div class="mt-2 text-center text-xs text-slate-400">
      父元件傳遞 <span class="text-sky-300">name</span>,
      <span class="text-sky-300">role</span>,
      <span class="text-sky-300">status</span>,
      <span class="text-sky-300">isAdmin</span> 過去每個 <code class="text-orange-400">UserCard</code> 元件。
    </div>
  </div>
</template>
