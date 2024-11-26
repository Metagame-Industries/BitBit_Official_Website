import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id="roadmap" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[40%] h-[50%] -right-[50%] rounded-full orange__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Roadmap</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          The roadmap gives you a clear view of our plans—join us on this journey!
        </p>
      </div>
    </div>

    <div className="flex flex-wrap lg:justify-between w-full feedback-container relative z-[1]">
      {feedback.map(card => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials
