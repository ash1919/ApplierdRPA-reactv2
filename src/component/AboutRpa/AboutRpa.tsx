import React from 'react'
import Lottie from 'react-lottie'
import robot3d from '../Lotte/robot3d.json'

const AboutRpa = () => {
    return (
        <section>
            <div className="container mx-auto px-6 py-20 max-w-7xl ">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div>
                        <Lottie
                            height={400}
                            width={400}
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: robot3d,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice',
                                },
                            }}
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-rpaPurple-500 text-center lg:text-left">
                            Robotic Process Automation
                        </h2>
                        <p className="text-center lg:text-left pt-8 text-rpaBlack-600 text-base lg:text-xl">
                            {' '}
                            Robotic process automation (RPA) is a software
                            technology that makes it easy to build, deploy, and
                            manage software robots that emulate humans actions
                            interacting with digital systems and software. Just
                            like people, software robots can do things like
                            understand what’s on a screen, complete the right
                            keystrokes, navigate systems, identify and extract
                            data, and perform a wide range of defined actions.
                            But software robots can do it faster and more
                            consistently than people, without the need to get up
                            and stretch or take a coffee break.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutRpa
