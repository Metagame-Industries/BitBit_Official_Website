import { cn } from '../lib/utils'
import styles from '../style'
import GetStarted from './GetStarted'
import { goTostart, pause, video_mooncity, video_poster, video_bg } from '../assets/shorts'
import { useRef, useState, useEffect } from 'react'

// const VIDEO_SOURCE = 'https://storage.googleapis.com/bitrealms-ai/media/mooncityshortdrama_compressed.mp4'
// const VIDEO_SOURCE = 'https://storage.googleapis.com/bitrealms-ai/media/bitrealmswebsite.mp4'
// const VIDEO_SOURCE = { video_poster }

const Hero = () => {
  const videoElementRef = useRef<HTMLVideoElement>(null)
  const [isPause, setIsPause] = useState(true)

  const handleTogglePlay = () => {
    if (!videoElementRef.current) return
    videoElementRef.current.paused ? videoElementRef.current.play() : videoElementRef.current.pause()
  }

  useEffect(() => {
    if (!videoElementRef.current) return
    const videoElement = videoElementRef.current
    videoElement.addEventListener('pause', () => {
      setIsPause(true)
    })
    videoElement.addEventListener('play', () => {
      setIsPause(false)
    })

    return () => {
      videoElement.removeEventListener('pause', () => {
        setIsPause(true)
      })
      videoElement.removeEventListener('play', () => {
        setIsPause(false)
      })
    }
  }, [videoElementRef])
  return (
    <section id="home" className={`flex lg:flex-row gap-[40px] px-4 flex-col py-16 xs:py-6  sm:py-16`}>
      <div className={`flex-1 ${styles.flexStart} flex-col relative sm:pl-16 pl-6`}>
        <div
          onClick={() => window.open('https://app.bitrealms.ai/', '_blank')}
          className="flex absolute top-[-40px] right-[-10px] md:mr-4 mr-0 cursor-pointer ">
          {/* <GetStarted /> */}
          <img
            src={goTostart}
            className="size-[90px] xs:size-[120px] md:size-[140px]  flex  cursor-pointer"
            onClick={handleTogglePlay}
          />
        </div>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-start items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold xl:text-[70px] ss:text-[40px] text-[30px] text-white 
          xl:leading-[100.8px] lg:leading-[75px] leading-[66px] md:leading-[50px]">
            Meme Coins
            <p>
              <span className="text-[#2FD0D6]">AI-Driven </span> Viral Videos
            </p>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold  ss:text-[40px] text-[30px] text-white xl:leading-[100.8px] lg:leading-[75px] leading-[66px] md:leading-[50px] w-full">
          Unlimited Fun
        </h1>
        <p className={`${styles.paragraph} w-full  mt-5`}>
          Harness the power of AI to turn creativity into value. On BitBit, viral videos spark meme coins. Create,
          share, trade, and enjoy!
        </p>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-9`}>
          BitRealms is evolving into a cutting-edge virtual world, anchored by blockchain and AI technologies, with its
          entertainment offerings fully embedded within the Bitcoin ecosystem. The platform is set to host an array of
          deeply engaging virtual content, enabling users worldwide to dive into the metaverse through state-of-the-art
          VR technology.
        </p> */}
      </div>

      <div className={`flex-1  flex flex-col justify-center items-center md:my-0 my-10 relative px-4 gap-1 md:gap-3 `}>
        <div className={` flex  justify-center items-center relative w-full h-full`}>
          <div className="w-full h-full  z-[5] object-contain aspect-[1.50086207] bg-primary">
            <video
              // poster={'https://storage.googleapis.com/bitrealms-ai/video_poster.png'}
              // poster={'https://storage.googleapis.com/bitrealms-ai/media/274.png'}
              poster={video_bg}
              src={video_mooncity}
              className="w-full h-full  object-contain "
              ref={videoElementRef}
              webkit-playsinline=""
              playsInline
              x-webkit-airplay="allow"
            />
          </div>

          <div onClick={() => handleTogglePlay()} className="absolute inset-0 z-10">
            <img
              // src={'https://storage.googleapis.com/bitrealms-ai/Group%20412.png'}
              src={pause}
              alt=""
              className={cn(
                'size-[80px] select-none object-contain max-w-[16%] lg:size-[121px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer ',
                isPause ? '' : 'hidden',
              )}
            />
          </div>

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
        <div className="flex flex-col justify-center items-center text-[#2FD0D6] text-blueGradient text-sm xs:text-[16px] lg:text-[20px] gap-1 md:gap-3 text-center  ">
          <p>Back to the Future: King of Bitcoin</p>
          <p>Explore the First Web3 Short Drama. Watch and Earn Rewards</p>
        </div>
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  )
}

export default Hero
