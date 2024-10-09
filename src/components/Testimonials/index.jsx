import Carousel from '../Carousel'

const Testimonials = () => (
  <div className="w-full px-[4.5%]">
    <div className="flex flex-row justify-center items-center gap-x-0 md:gap-x-2 lg:gap-x-4 mb-20 font-montserrat">
      <div className="">
        <h2 className="font-bold text-4xl leading-amd tracking-tight text-orange text-center  max-w-[180px] md:max-w-none md:leading-trend md:text-trend lg:whitespace-nowrap ">
          {' '}
          Testimonials
        </h2>
        <h3 className="font-normal text-base  tracking-tight text-black/70 text-center  max-w-[180px] md:max-w-none mt-10 whitespace-nowrap">
          {' '}
          Statements from satisfied clients
        </h3>
      </div>
    </div>
    <Carousel />
  </div>
)

export default Testimonials
