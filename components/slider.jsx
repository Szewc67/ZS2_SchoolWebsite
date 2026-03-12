'use client'

import './style/slider.scss'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import BlurDataUrl from './blurDataUrl'

export default function Slider({ images, interval = 3000, className }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(slideInterval)
  }, [images.length, interval])

  return (
    <div className={`slider  ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider__slide ${
            index === currentIndex ? 'slider__slide--active' : ''
          }`}
        >
          <Image
            src={image}
            alt="Slider"
            width={500}
            height={400}
            placeholder="blur"
            blurDataURL={BlurDataUrl()}
          />
        </div>
      ))}
    </div>
  )
}
