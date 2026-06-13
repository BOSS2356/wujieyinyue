import { createRouter, createWebHistory } from 'vue-router'
import WujieMusic from '../views/WujieMusic.vue'

const routes = [
  {
    path: '/',
    component: WujieMusic,
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: () => import('../views/HomeView.vue') },
      { path: 'albums', component: () => import('../views/AlbumsView.vue') },
      { path: 'album/:id', component: () => import('../views/AlbumDetailView.vue') },
      { path: 'playlists', component: () => import('../views/PlaylistsView.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
