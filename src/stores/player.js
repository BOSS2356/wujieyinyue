import { reactive } from 'vue'

export const player = reactive({
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.7,
  queue: [],
  queueIndex: 0
})

export function playSongList(songs, index = 0) {
  player.queue = songs
  player.queueIndex = index
  if (songs.length > 0) {
    player.currentSong = songs[index]
  }
}

export function nextSong() {
  if (player.queueIndex < player.queue.length - 1) {
    player.queueIndex++
    player.currentSong = player.queue[player.queueIndex]
  }
}

export function prevSong() {
  if (player.queueIndex > 0) {
    player.queueIndex--
    player.currentSong = player.queue[player.queueIndex]
  }
}

export function setVolume(val) {
  player.volume = val
}

export function togglePlay() {
  player.isPlaying = !player.isPlaying
}
