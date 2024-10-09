import { useState } from 'react'
import PropTypes from 'prop-types'

const Dropdown = (props) => {
  const [drop, setDrop] = useState(false)

  return (
    <div
      className="dropdown flex flex-col  justify-between gap-y-4 border border-nav pb-7 mb:pb-12 mb:w-7/12 pt-6 px-4 w-10/12 text-left mx-auto  md:space-y-8  transition-all ease-in-out duration-500 mt-4"
      onClick={() => setDrop(!drop)}
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-semibold text-sm   tracking-tight text-nav max-w-[280px] md:max-w-none">
          {`${props.question} ?`}
        </h3>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: drop ? 'rotateX(180deg)' : 'none',
          }}
        >
          <path
            d="M16.497 0.789094L8.99999 8.09709L1.50299 0.789094C1.36905 0.65825 1.18924 0.584996 1.00199 0.584996C0.814748 0.584996 0.634933 0.65825 0.500992 0.789094C0.436135 0.852641 0.384611 0.928489 0.349436 1.0122C0.314261 1.09591 0.296143 1.18579 0.296143 1.27659C0.296143 1.36739 0.314261 1.45728 0.349436 1.54099C0.384611 1.6247 0.436135 1.70055 0.500992 1.76409L8.47649 9.54009C8.61655 9.67661 8.8044 9.75302 8.99999 9.75302C9.19558 9.75302 9.38343 9.67661 9.52349 9.54009L17.499 1.76559C17.5643 1.702 17.6162 1.62596 17.6517 1.54198C17.6871 1.45799 17.7054 1.36775 17.7054 1.27659C17.7054 1.18543 17.6871 1.0952 17.6517 1.01121C17.6162 0.927222 17.5643 0.851188 17.499 0.787594C17.3651 0.656749 17.1852 0.583496 16.998 0.583496C16.8107 0.583496 16.6309 0.656749 16.497 0.787594V0.789094Z"
            fill="#0574BC"
          />
        </svg>
      </div>
      {drop && (
        <h3 className="font-montserrat tracking-tight text-xs leading-tight md:text-carousel text-nav w-11/12  ease-in-out duration-500">
          {`${props.answer} ?`}
        </h3>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

export default Dropdown
