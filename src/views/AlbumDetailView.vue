<template>
  <div v-if="album" class="p-8">
    <div class="flex flex-col md:flex-row gap-8 mb-10">
      <div class="w-full md:w-64 flex-shrink-0">
        <img :src="album.coverUrl" :alt="album.title" class="w-full aspect-square rounded-lg shadow-lg object-cover" />
      </div>
      <div class="flex-1 flex flex-col justify-end">
        <div class="text-sm font-medium uppercase text-slate-500 mb-2">专辑</div>
        <h1 class="text-4xl font-bold mb-3">{{ album.title }}</h1>
        <p class="text-slate-600 mb-6">{{ album.artist }} · {{ album.year }}</p>
        <p class="text-slate-500 text-sm mb-6">{{ album.description }}</p>
        <div class="flex gap-3">
          <button @click="playAll" class="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition">▶ 播放全部</button>
          <button class="px-6 py-2 border border-slate-300 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-100 transition">+ 添加到歌单</button>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-200">
      <div v-for="(song, idx) in albumSongs" :key="song.id" @click="playSingle(song, idx)" class="flex items-center gap-4 px-4 py-3 hover:bg-slate-100 rounded cursor-pointer transition group">
        <div class="w-6 text-sm text-slate-400 group-hover:hidden">{{ song.trackNumber }}</div>
        <div class="w-6 text-sm text-slate-900 hidden group-hover:block">▶</div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-slate-900 truncate">{{ song.title }}</div>
          <div class="text-xs text-slate-500">{{ song.artist }}</div>
        </div>
        <div class="text-xs text-slate-400">{{ formatDuration(song.duration) }}</div>
      </div>
    </div>
  </div>
  <div v-else class="p-8 text-slate-500">未找到该专辑</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getAlbumById, getSongsByAlbum } from '../data/library.js'
import { playSongList, togglePlay } from '../stores/player.js'

const route = useRoute()
const album = computed(() => getAlbumById(route.params.id))
const albumSongs = computed(() => getSongsByAlbum(route.params.id))

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function playAll() {
  if (albumSongs.value.length > 0) {
    playSongList(albumSongs.value, 0)
    togglePlay()
  }
}

function playSingle(song, idx) {
  playSongList(albumSongs.value, idx)
  togglePlay()
}
</script>
