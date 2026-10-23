/** 画像未設定時のダミー画像（placehold.co） */
export const placeholder = (text: string) => ({
  url: `https://placehold.co/800x500/f6dde3/a8566a?text=${encodeURIComponent(text)}`,
  width: 800,
  height: 500,
})
