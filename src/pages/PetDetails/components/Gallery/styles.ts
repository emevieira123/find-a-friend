import styled from 'styled-components'

export const Banner = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  &:hover {
    height: 100%;
  }
`

export const GalleryContainer = styled.div`
  padding: 1.5rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

interface ImageGalleryProps {
  isActive?: boolean
}

export const ImageGallery = styled.img<ImageGalleryProps>`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;

  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.darkBlue}` : ''};
  opacity: ${(props) => !props.isActive && 0.5};
`
