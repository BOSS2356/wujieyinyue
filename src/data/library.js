export const albums = [
  {
    id: 'gao-bie-de-nian-dai',
    title: '告别的年代',
    artist: '罗大佑',
    year: 1989,
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d572641?w=400&h=400&fit=crop',
    description: '罗大佑经典专辑，收录《恋曲1990》《穿过你的黑发的我的手》等名曲。'
  },
  {
    id: 'zhi-hu-zhe-ye',
    title: '之乎者也',
    artist: '罗大佑',
    year: 1982,
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    description: '罗大佑首张专辑，华语流行音乐的里程碑之作。'
  },
  {
    id: 'lian-qu-1990',
    title: '恋曲1990',
    artist: '罗大佑',
    year: 1990,
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: '经典情歌合集，收录多首传唱至今的作品。'
  },
  {
    id: 'si-ben',
    title: '私奔',
    artist: '陈升',
    year: 1991,
    coverUrl: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&h=400&fit=crop',
    description: '陈升代表作专辑，《把悲伤留给自己》《最后一盏灯》等经典。'
  },
  {
    id: 'bie-rang-wo-ku',
    title: '别让我哭',
    artist: '陈升',
    year: 1992,
    coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop',
    description: '陈升经典专辑，收录《北京一夜》等代表作。'
  },
  {
    id: 'yong-ji-de-le-yuan',
    title: '拥挤的乐园',
    artist: '陈升',
    year: 1988,
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    description: '陈升首张个人专辑，《拥挤的乐园》《凡人的告白书》等。'
  }
]

export const songs = [
  { id: 's-001', title: '告别的年代', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 1, duration: 253 },
  { id: 's-002', title: '弹唱词·别后', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 2, duration: 218 },
  { id: 's-003', title: '沉默的表示', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 3, duration: 196 },
  { id: 's-004', title: '爱人同志', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 4, duration: 273 },
  { id: 's-005', title: '恋曲1990', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 5, duration: 268 },
  { id: 's-006', title: '思念', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 6, duration: 245 },
  { id: 's-007', title: '穿过你的黑发的我的手', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 7, duration: 238 },
  { id: 's-008', title: '野百合也有春天', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 8, duration: 212 },
  { id: 's-009', title: '家(II)', artist: '罗大佑', albumId: 'gao-bie-de-nian-dai', trackNumber: 9, duration: 289 },
  { id: 's-010', title: '鹿港小镇', artist: '罗大佑', albumId: 'zhi-hu-zhe-ye', trackNumber: 1, duration: 276 },
  { id: 's-011', title: '之乎者也', artist: '罗大佑', albumId: 'zhi-hu-zhe-ye', trackNumber: 2, duration: 208 },
  { id: 's-012', title: '乡愁四韵', artist: '罗大佑', albumId: 'zhi-hu-zhe-ye', trackNumber: 3, duration: 248 },
  { id: 's-013', title: '童年', artist: '罗大佑', albumId: 'lian-qu-1990', trackNumber: 1, duration: 264 },
  { id: 's-014', title: '光阴的故事', artist: '罗大佑', albumId: 'lian-qu-1990', trackNumber: 2, duration: 228 },
  { id: 's-015', title: '把悲伤留给自己', artist: '陈升', albumId: 'si-ben', trackNumber: 1, duration: 285 },
  { id: 's-016', title: '我喜欢私奔和我自己', artist: '陈升', albumId: 'si-ben', trackNumber: 2, duration: 242 },
  { id: 's-017', title: '最后一盏灯', artist: '陈升', albumId: 'si-ben', trackNumber: 6, duration: 268 },
  { id: 's-018', title: '别让我哭', artist: '陈升', albumId: 'bie-rang-wo-ku', trackNumber: 1, duration: 256 },
  { id: 's-019', title: 'One Night in Beijing', artist: '陈升', albumId: 'bie-rang-wo-ku', trackNumber: 5, duration: 312 },
  { id: 's-020', title: '拥挤的乐园', artist: '陈升', albumId: 'yong-ji-de-le-yuan', trackNumber: 1, duration: 276 }
]

export const playlists = [
  {
    id: 'luo-dayou-best',
    title: '罗大佑精选',
    description: '罗大佑经典歌曲合集',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d572641?w=400&h=400&fit=crop',
    songIds: ['s-001', 's-005', 's-007', 's-010', 's-013', 's-014']
  },
  {
    id: 'chen-sheng-best',
    title: '陈升精选',
    description: '陈升经典歌曲合集',
    coverUrl: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&h=400&fit=crop',
    songIds: ['s-015', 's-017', 's-018', 's-019', 's-020']
  }
]

export function getAlbumById(id) {
  return albums.find(a => a.id === id)
}

export function getSongsByAlbum(albumId) {
  return songs.filter(s => s.albumId === albumId)
}

export function getSongById(id) {
  return songs.find(s => s.id === id)
}

export function getSongsByIds(ids) {
  return ids.map(id => getSongById(id)).filter(Boolean)
}
