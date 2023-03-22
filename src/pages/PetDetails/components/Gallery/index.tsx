import { useState } from 'react'
import { useGetPetGallery } from '../../hooks/useGetPetGallery'
import { Banner, GalleryContainer, ImageGallery } from './styles'

interface GalleryProps {
  petId: string
  imgInitial?: string
}

export function Gallery({ petId, imgInitial }: GalleryProps) {
  const [active, setActive] = useState<number>(1)

  const { data: dataGallery } = useGetPetGallery(petId)

  const [img, setImg] = useState<string | undefined>(imgInitial)

  return (
    <>
      <Banner src={img || imgInitial} alt="" />
      <GalleryContainer>
        {dataGallery?.map((gallery: any, index: number) => {
          return (
            <ImageGallery
              key={index + 1}
              src={gallery?.photo_url}
              alt=""
              onClick={() => {
                setActive(index + 1)
                setImg(gallery?.photo_url)
              }}
              isActive={active === index + 1 && true}
            />
          )
        })}
      </GalleryContainer>
    </>
  )
}