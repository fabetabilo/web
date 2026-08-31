import Carousel from '../components/ui/Carousel/Carousel'
import EventsCarousel from '../components/ui/Carousel/EventsCarousel'
import BoldBanner from '../components/ui/Banner/BoldBanner'
import InstCarousel from '../components/ui/Carousel/InstCarousel'
import { nextEvents } from '../data/nextEvents'
import { heroSlides } from '../data/heroSlides'
import { institutions } from '../data/institutions'

export default function Home() {
  return (
    <>
      <Carousel slides={heroSlides} />
      <EventsCarousel events={nextEvents} />
      <BoldBanner outlineText="36+INSTITUCIONES" solidText="Un solo equipo" />
      <InstCarousel institutions={institutions} />
    </>
  )
}
