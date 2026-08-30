import Carousel from '../components/ui/Carousel/Carousel'
import EventsCarousel from '../components/ui/Carousel/EventsCarousel'
import BoldBanner from '../components/ui/Banner/BoldBanner'

export default function Home() {
  return (
    <>
      <Carousel />
      <EventsCarousel />
      <BoldBanner outlineText="36+INSTITUCIONES" solidText="Un solo equipo"/>
    </>
  )
}
