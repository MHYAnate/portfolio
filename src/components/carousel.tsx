"use client"

import { useState, useEffect, useCallback } from "react"

export interface CarouselItem {
  id: string
  image: string
  title: string
  description: string
  company?: string
}

interface PortfolioCarouselProps {
  items: CarouselItem[]
  className?: string
  autoSlide?: boolean
  autoSlideInterval?: number
}

export function PortfolioCarousel({
  items,
  className = "",
  autoSlide = true,
  autoSlideInterval = 5000,
}: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoSlide)

  useEffect(() => {
    if (!isPlaying || items.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [isPlaying, items.length, autoSlideInterval])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }, [items.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }, [items.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-xl border">
        <p className="text-muted-foreground">No portfolio items to display</p>
      </div>
    )
  }

  const currentItem = items[currentIndex]

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div className="relative overflow-hidden bg-card border rounded-xl shadow-2xl">
        <div className="relative aspect-[16/10] sm:aspect-video bg-muted">
          <img
            src={currentItem.image || "/placeholder.svg"}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-all duration-500 ease-out"
          />

          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-10 sm:size-12 bg-background/90 backdrop-blur-md hover:bg-background border rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={goToPrevious}
            disabled={items.length <= 1}
            aria-label="Previous image"
          >
            <svg className="size-4 sm:size-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-10 sm:size-12 bg-background/90 backdrop-blur-md hover:bg-background border rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={goToNext}
            disabled={items.length <= 1}
            aria-label="Next image"
          >
            <svg className="size-4 sm:size-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {items.length > 1 && (
            <button
              className="absolute top-2 sm:top-4 left-2 sm:left-4 size-10 sm:size-12 bg-background/90 backdrop-blur-md hover:bg-background border rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <svg className="size-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="size-4 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          )}

          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border shadow-lg">
            <span className="text-primary">{currentIndex + 1}</span>
            <span className="text-muted-foreground mx-1">/</span>
            <span className="text-muted-foreground">{items.length}</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Title and company */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-balance">
              {currentItem.title}
            </h3>
            {currentItem.company && (
              <p className="text-primary font-semibold text-sm sm:text-base">{currentItem.company}</p>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-pretty">
            {currentItem.description}
          </p>

   
        </div>
      </div>

      {items.length > 1 && (
        <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`size-2.5 sm:size-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background hover:scale-125 ${
                index === currentIndex
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
