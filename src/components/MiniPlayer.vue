<template>
  <div class="h-20 bg-white border-t border-slate-200 flex items-center px-4 gap-4 flex-shrink-0">
    <template v-if="player.currentSong">
      <div class="flex items-center gap-3 w-48">
        <div class="w-12 h-12 rounded bg-slate-200 flex-shrink-0 flex items-center justify-center">🎵</div>
        <div class="min-w-0">
          <div class="text-sm font-medium text-slate-900 truncate">{{ player.currentSong.title }}</div>
          <div class="text-xs text-slate-500 truncate">{{ player.currentSong.artist }}</div>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-1 justify-center">
        <button @click="prevSong" class="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition">⏮</button>
        <button @click="togglePlay" class="w-10 h-10 flex items-center justify-center bg-slate-900 text-white hover:bg-slate-700 rounded-full transition text-sm">{{ player.isPlaying ? '⏸' : '▶' }}</button>
        <button @click="nextSong" class="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition">⏭</button>
      </div>
      <div class="flex items-center gap-2 w-48 justify-end">
        <span class="text-xs text-slate-500">🔊</span>
        <input type="range" min="0" max="1" step="0.01" :value="player.volume" @input="e => setVolume(parseFloat(e.target.value))" class="w-24 h-1 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900" />
      </div>
    </template>
    <template v-else>
      <div class="w-full text-center text-sm text-slate-500">选择一首歌开始播放</div>
    </template>
  </div>
</template>

<script setup>
import { player, togglePlay, nextSong, prevSong, setVolume } from '../stores/player.js'
</script>
