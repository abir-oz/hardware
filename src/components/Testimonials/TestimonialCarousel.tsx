import Testimonial from "./Testimonial"

const TestimonialCarousel = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://www.nke.at/templates/yootheme/cache/64/NKE_NB_11-64f7a1ac.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative"
    >
      <div className="absolute bg-blue-900 opacity-80 top-0 bottom-0 right-0 left-0"></div>
      <Testimonial />
    </div >
  )
}

export default TestimonialCarousel