'use client'

// import ScrollCarousel from 'scroll-carousel-react'
import { Carousel } from '@trendyol-js/react-carousel'
import Card from '../Card'

const anyValue = () => {
  return Math.random() * (100 - 0) + 0
}

const Array = [
  {
    title: 'Sorteio Iphone XR',
    percentage: anyValue()
  },
  {
    title: 'Sorteio Iphone 12',
    percentage: anyValue()
  },
  {
    title: 'Sorteio Iphone 13',
    percentage: anyValue()
  }
]

export default function CreatedRaffles() {
  return (
    <aside>
      <Carousel show={2} slide={2} swiping={true}>
        {Array.map(({ title, percentage }) => (
          <Card title={title} percentage={percentage} />
        ))}
      </Carousel>
    </aside>
  )
}
