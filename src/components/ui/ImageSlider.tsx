import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { CmsImage } from '@/types'

type Props = {
  images: CmsImage[]
  alt: string
}

export function ImageSlider({ images, alt }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      loop={images.length > 1}
      spaceBetween={16}
    >
      {images.map((image, i) => (
        <SwiperSlide key={image.url}>
          <img
            src={image.url}
            alt={`${alt}（${i + 1}/${images.length}）`}
            width={image.width}
            height={image.height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
