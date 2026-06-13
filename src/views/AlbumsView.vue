<template>
  <div class="p-8">
    <h2 class="text-3xl font-bold mb-8">专辑</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <AlbumCard
        v-for="album in albums"
        :key="album.id"
        :title="album.title"
        :subtitle="album.artist + ' · ' + album.year"
        :coverUrl="album.coverUrl"
        :to="'/wujie-music/album/' + album.id"
      />
    </div>
  </div>
</template>

<script setup>
import AlbumCard from '../components/AlbumCard.vue'
import { albums } from '../data/library.js'
</script>
