<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-2">精选</h1>
    <p class="text-slate-500 mb-10">来自华语经典的推荐</p>

    <section class="mb-12">
      <h2 class="text-xl font-bold mb-6">推荐专辑</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <AlbumCard v-for="album in albums" :key="album.id" :title="album.title" :subtitle="album.artist + ' · ' + album.year" :coverUrl="album.coverUrl" :to="'/album/' + album.id" />
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-bold mb-6">精选歌单</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <AlbumCard v-for="playlist in playlists" :key="playlist.id" :title="playlist.title" :subtitle="playlist.description" :coverUrl="playlist.coverUrl" to="/playlists" />
      </div>
    </section>
  </div>
</template>

<script setup>
import AlbumCard from '../components/AlbumCard.vue'
import { albums, playlists } from '../data/library.js'
</script>
