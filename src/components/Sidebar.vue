<template>
  <aside class="w-60 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col">
    <div class="p-6 border-b border-slate-100">
      <h1 class="text-xl font-bold text-slate-900">无界音乐</h1>
      <p class="text-xs text-slate-500 mt-1">WUJIE MUSIC</p>
    </div>
    <nav class="flex-1 p-3">
      <div class="text-xs font-medium text-slate-400 uppercase tracking-wider px-3 mb-2">资料库</div>
      <router-link to="/home" v-slot="{ isActive, navigate }">
        <button @click="navigate" :class="['w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm mb-1 transition-colors', isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100']">
          <span>🏠</span>
          <span>精选</span>
        </button>
      </router-link>
      <router-link to="/albums" v-slot="{ isActive, navigate }">
        <button @click="navigate" :class="['w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm mb-1 transition-colors', isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100']">
          <span>💿</span>
          <span>专辑</span>
        </button>
      </router-link>
      <router-link to="/playlists" v-slot="{ isActive, navigate }">
        <button @click="navigate" :class="['w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm mb-1 transition-colors', isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100']">
          <span>📋</span>
          <span>歌单</span>
        </button>
      </router-link>
    </nav>
    <div class="p-4 text-xs text-slate-400 border-t border-slate-100">
      © 2026 无界音乐
    </div>
  </aside>
</template>

<script setup>
</script>
