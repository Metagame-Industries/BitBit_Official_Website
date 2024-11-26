import styles from '../style'

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} size-[90px] xs:size-[120px] md:size-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-sm xs:text-[18px] leading-[23.4px]">
          <span className="text-gradient">Adventure</span>
        </p>
      </div>

      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-sm xs:text-[18px] leading-[23.4px]">
          <span className="text-gradient">Starts</span>
        </p>
        {/* <img src={arrowUp} alt="arrow-up" className="size-[18px] xs:size-[23px] object-contain" /> */}
      </div>
    </div>
  </div>
)

export default GetStarted
