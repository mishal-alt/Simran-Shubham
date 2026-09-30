import Gate from './components/Gate'
import ScrollProgress from './components/ScrollProgress'
import PetalRain from './components/PetalRain'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Story from './components/Story'
import Families from './components/Families'
import EventCard from './components/EventCard'
import Venue from './components/Venue'
import Blessing from './components/Blessing'
import Rsvp from './components/Rsvp'
import Footer from './components/Footer'

export default function App() {
  return (
    <Gate>
      <main className="relative bg-parchment">
        <ScrollProgress />
        <PetalRain />
        <Hero />
        <Countdown />
        <Story />
        <Families />
        <EventCard />
        <Venue />
        <Blessing />
        <Rsvp />
        <Footer />
      </main>
    </Gate>
  )
}
