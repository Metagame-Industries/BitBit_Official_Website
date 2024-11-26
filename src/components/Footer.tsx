import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section
    className={`flex justify-center bg-primary lg:bg-primary/60 items-center  flex-col lg:absolute bottom-0 w-full z-50`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] px-[4%] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[16px] text-white">
        Copyright Ⓒ 2024 BitBit.All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer
