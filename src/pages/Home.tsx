import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const homeImages = [
  '/src/assets/home1.jpg',
  '/src/assets/home2.jpg',
  '/src/assets/home3.jpg',
  '/src/assets/home4.jpg',
]

const Home = () => {
  return (
    <div className="home-page">
      <Swiper spaceBetween={0} slidesPerView={1}>
        {homeImages.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`School photo ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="home-intro">
        <h1>Welcome to [School Name]</h1>
        <p>
          Short description about the school goes here — mission,
          what makes it special, and an invitation to explore the site.
        </p>
      </section>
    </div>
  )
}

export default Home