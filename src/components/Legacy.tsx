import { apple, bill, google, legacy } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id="" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={legacy} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} lg:items-center`}>
      <h2 className={`${styles.heading2} lg:text-center`}>Forge Your Legacy</h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5 lg:pl-3.5`}>
        With our unique inscription system, you're not just playing games; you're claiming a stake in the very fabric of
        the Metaverse. Your actions, your victories, your community contributions shape the future of BitRealms.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
)

export default Billing
