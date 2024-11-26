import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Discover Unparalleled Gaming</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Embrace a diverse array of gaming experiences, from thrilling PVE battles and competitive PVP matchups to rich
        social interactions. BitRealms is not just a platform; it's a revolution.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal
