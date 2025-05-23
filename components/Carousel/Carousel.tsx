'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'

interface Slide {
  id: string | number;
  imgSrc: string;
  altText: string;
  order?: number;
}

interface CarouselProps {
  slides: Slide[] | undefined,
  priority?: boolean
  loading?: boolean,
}

export default function Carousel({slides, priority, loading}: CarouselProps) {
  const settings = {
    centerMode: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'slick-dots slick-nav',
    customPaging: function(i: number) {
      if (!slides) return (<></>)

      return (
        <a className={styles.paginationTrigger}>
          <Image className={styles.carouselThumbnail} src={slides[i].imgSrc} width={30} height={20} alt={slides[i].altText} />
        </a>
      )
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const renderedSlides = slides?.map((slide) => {
    return <div key={slide.id}>
        <Image 
          className={styles.carouselImage}
          src={slide.imgSrc}
          width={500}
          height={400}
          alt={slide.altText}
          priority={priority}
        />
    </div>
  })

  const carouselContent = slides ? 
  (<Slider {...settings} className={styles.carousel}>
    { renderedSlides }
  </Slider>)
  : (<p>Images could not be displayed.</p>)
  
  return (
    <div className={`${styles.carouselContainer} ${!loading ? `${styles.isVisible}` : ''}`}>
      { carouselContent }
    </div>
  )
}
