<template>
  <router-link :to="to" class="block group cursor-pointer">
    <div class="aspect-square rounded-lg overflow-hidden bg-slate-200 mb-3 shadow-sm group-hover:shadow-lg transition-shadow">
      <img :src="coverUrl" :alt="title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div class="text-sm font-medium text-slate-900 truncate">{{ title }}</div>
    <div class="text-xs text-slate-500 mt-1 truncate">{{ subtitle }}</div>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  coverUrl: String,
  to: { type: String, default: '/' }
})
</script>
