import Image from 'next/image'
import styles from './ImageContainer.module.scss'
interface ImageContainerProps {
  images: Image[] | undefined,
}

export default function ImageContainer ({ images }: ImageContainerProps) {
  const renderedImages = images?.map((image) => {
    return <div key={image.id} className={styles.imageItem}>
      <Image width={300} height={300} key={image.id} src={image.imgSrc} alt={image.altText} />
      </div>
  })

  return (
    <div className={styles.imageContainer}>
      { renderedImages ? renderedImages : <p>Images could not be displayed.</p> }
    </div>
  )
}