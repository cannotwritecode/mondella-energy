import Dropdown from '../Dropdown'

const Faq = () => {
  return (
    <div className="font-montserrat flex flex-col gap-y-20 my-20 lg:my-40">
      <div className="flex flex-row justify-center items-center space-x-0 md:space-x-2 lg:gap-x-4">
        <div className="">
          <h2 className="font-bold text-4xl leading-amd tracking-tight text-orange text-center  max-w-[180px] md:max-w-none md:leading-trend md:text-trend lg:whitespace-nowrap">
            {' '}
            FAQs
          </h2>
          <h3 className="font-normal text-base  tracking-tight text-black/70 text-center  max-w-[180px] md:max-w-none mt-10 whitespace-nowrap">
            {' '}
            Got questions? We’ll help you out
          </h3>
        </div>
      </div>
      <div className="w-full">
        <Dropdown
          question="How do i get started"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        />
        <Dropdown
          question="Do i need to own a truck"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        />

        <Dropdown
          question="Do you do refunds on failed transaction"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        />
        <Dropdown
          question="Where are you located"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
        />
      </div>
    </div>
  )
}

export default Faq
