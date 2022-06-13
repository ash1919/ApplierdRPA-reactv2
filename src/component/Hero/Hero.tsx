import React from 'react'
import Lottie from 'react-lottie'
import robotHi from '../Lotte/robotHi.json'

const Hero = () => {
    return (
        <section className="hero_bg bg-rpaBlue-900 text-white -mt-[8.9rem] lg:-mt-[8.8rem] ">
            <div className="container mx-auto px-6 pb-40 pt-52 lg:pt-40  max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-5xl lg:text-6xl font-bold">
                            We&apos;re Applied RPA
                        </h1>
                        <p className="text-xl lg:text-2xl text-rpaBlack-300 pt-2">
                            <em>
                                Time is short let&apos;s make it even shorter
                            </em>
                        </p>
                    </div>
                    <div>
                        {/* <img src="/images/hero-1.png" alt="hero-img" /> */}
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: robotHi,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
