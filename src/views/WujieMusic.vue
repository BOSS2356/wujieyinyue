<template>
  <div class="h-screen flex flex-col bg-slate-50 text-slate-900">
    <div class="flex-1 flex overflow-hidden">
      <Sidebar />
      <main class="flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
    <MiniPlayer />
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import MiniPlayer from '../components/MiniPlayer.vue'
</script>
