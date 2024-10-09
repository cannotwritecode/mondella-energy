import mainLogo from '../../assets/logo-white.png'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <div className="flex flex-col justify-start bg-black text-white font-montserrat py-12 px-4 gap-y-7 md:px-[4.5%]">
      <div className=" flex flex-col gap-y-7 md:flex-row md:gap-y-0 md:gap-x-7 md:justify-between">
        <div className="">
          <img
            src={mainLogo}
            alt="mondella-energy-logo-white"
            className="w-[159.75px] h-[47px]"
          />
          <div className="text-left text-white text-sm mt-7 md:mt-5">
            <p className="max-w-[396px]">
              An incorporated petroleum product trading and supply company
              shaped to provide seamless product supplies with commitment and
              reliability across the nation
            </p>
          </div>
        </div>

        <div className="font-montserrat text-white">
          <div className="font-bold text-xl text-left mb-4">Company</div>
          <Link to={ROUTES.ABOUT}>
            <div className="font-normal text-sm text-left mb-4 hover:text-white/80">
              About Us
            </div>
          </Link>
          <Link to={ROUTES.SERVICES}>
            <div className="font-normal text-sm text-left mb-4 hover:text-white/80">
              Services
            </div>
          </Link>
          <Link to={ROUTES.TEAM}>
            <div className="font-normal text-sm text-left hover:text-white/80">
              Management Team
            </div>
          </Link>
        </div>
        <div className="font-montserrat text-white">
          <div className="font-bold text-xl text-left mb-4">Quick Link</div>
          <Link to={ROUTES.CONTACT}>
            <div className="font-normal text-sm text-left mb-4 hover:text-white/80">
              Contact Us
            </div>
          </Link>

          <Link to={ROUTES.POLICY}>
            <div className="font-normal text-sm text-left hover:text-white/80">
              Privacy Policy
            </div>
          </Link>
        </div>
        <div className="font-montserrat text-white">
          <div className="font-bold text-xl text-left mb-4">Head Office</div>
          <a href="https://maps.app.goo.gl/XXKKTRkFZmrLDKBQ9">
            <div className="font-normal text-sm text-left mb-4 md:max-w-[285px] hover:text-white/80">
              25A Elitor Street,Woji, Portharcourt, Rivers State, Nigeria
            </div>
          </a>

          <div className="flex items-center gap-x-4 mb-4">
            <a href="mailto:mondellaenergyltd@gmail.com" className="">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
                  fill="white"
                />
              </svg>
            </a>
            <p className="font-normal text-sm text-left hover:text-white/80">
              mondellaenergyltd@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <a href="tel:+2348035665782" className="">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 3C0.5 2.20435 0.81607 1.44129 1.37868 0.87868C1.94129 0.316071 2.70435 0 3.5 0L12.5 0C13.2956 0 14.0587 0.316071 14.6213 0.87868C15.1839 1.44129 15.5 2.20435 15.5 3V21C15.5 21.7956 15.1839 22.5587 14.6213 23.1213C14.0587 23.6839 13.2956 24 12.5 24H3.5C2.70435 24 1.94129 23.6839 1.37868 23.1213C0.81607 22.5587 0.5 21.7956 0.5 21V3ZM9.5 19.5C9.5 19.1022 9.34196 18.7206 9.06066 18.4393C8.77936 18.158 8.39782 18 8 18C7.60218 18 7.22064 18.158 6.93934 18.4393C6.65804 18.7206 6.5 19.1022 6.5 19.5C6.5 19.8978 6.65804 20.2794 6.93934 20.5607C7.22064 20.842 7.60218 21 8 21C8.39782 21 8.77936 20.842 9.06066 20.5607C9.34196 20.2794 9.5 19.8978 9.5 19.5Z"
                  fill="white"
                />
              </svg>
            </a>
            <p className="font-normal text-sm text-left hover:text-white/80">
              +2348035665782
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white">
        <hr className="text-white mb-4" />
        <p className="text-sm font-normal">&copy; {year} Mondella Energy</p>
      </div>
    </div>
  )
}

export default Footer
