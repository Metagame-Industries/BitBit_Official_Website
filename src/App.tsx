import { home_bg } from './assets/shorts'
import { Footer, Hero, Navbar } from './components'
import styles from './style'

const App = () => (
  <div
    style={{
      // backgroundImage: `url(https://storage.googleapis.com/bitrealms-ai/bitbit-bg.png)`,
      backgroundImage: `url(${home_bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }}
    className="bg-primary w-full overflow-hidden border-none relative min-h-dvh h-full flex flex-col items-center justify-center  !bg-cover lg:bg-auto bg-center lg:bg-left  ">
    <div className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-10  top-0`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart} xl:pt-[40px] pt-[10px] flex items-center justify-center xs:pb-0 flex-1 `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <Footer />

    {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className="text-white font-bold text-[44px] px-5 ">Our Goal</h2>
        <Stats />
        http://localhost:7778/src/assets/robot.png
        <Business />
        <Community />
        <CardDeal />
        <Legacy />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div> */}
  </div>
)

export default App
