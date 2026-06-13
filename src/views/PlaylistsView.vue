<template>
  <div class="p-8">
    <h2 class="text-3xl font-bold mb-8">歌单</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <AlbumCard
        v-for="playlist in playlists"
        :key="playlist.id"
        :title="playlist.title"
        :subtitle="playlist.description"
        :coverUrl="playlist.coverUrl"
        to="/wujie-music/playlists"
      />
    </div>
  </div>
</template>

<script setup>
import AlbumCard from '../components/AlbumCard.vue'
import { playlists } from '../data/library.js'
</script>
