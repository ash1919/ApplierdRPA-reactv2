import React from 'react'
import Lottie from 'react-lottie'
import networkSpeed from '../Lotte/networkSpeed.json'
import servicequality from '../Lotte/servicequality.json'
import premiumquality from '../Lotte/premiumquality.json'
import projectdashboard from '../Lotte/projectdashboard.json'

const WhatWeDoForYou = () => {
    return (
        <section className="bg-rpaLightBlue-100">
            <div className="container mx-auto px-6 max-w-7xl py-20">
                <h2 className="heading_2">What We Do For You</h2>
                <div className="flex flex-col md:flex-row gap-x-20 flex-wrap gap-y-20 items-center justify-center pt-20">
                    <div className="card_what_we_do">
                        <div className=" w-40 md:w-60">
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: networkSpeed,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                            />
                        </div>
                        <h5 className="card_what_we_do_heading">
                            Save time and effort
                        </h5>
                        <p className="paragraph">
                            Overwhelmingly greater speed of implementation and
                            response to changes, speed in producing results, and
                            speed of operation.
                        </p>
                    </div>
                    <div className="card_what_we_do">
                        <div className=" w-40 md:w-60">
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: servicequality,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                            />
                        </div>
                        <h5 className="card_what_we_do_heading">
                            Enhance customer experiences
                        </h5>
                        <p className="paragraph">
                            Humans are freed from routine work, able to engage
                            instead in work with high added value.
                        </p>
                    </div>
                    <div className="card_what_we_do">
                        <div className=" w-40 md:w-60">
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: premiumquality,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                            />
                        </div>
                        <h5 className="card_what_we_do_heading">
                            Improved Quality
                        </h5>
                        <p className="paragraph">
                            Capable of more continuous, reliable, and high
                            quality task implementation than human labor.
                        </p>
                    </div>
                    <div className="card_what_we_do">
                        <div className=" w-40 md:w-60">
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: projectdashboard,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    },
                                }}
                            />
                        </div>
                        <h5 className="card_what_we_do_heading">
                            Improved Efficiency
                        </h5>
                        <p className="paragraph">
                            Because a large number of tasks are automated, work
                            can be carried out in parallel with virtually no
                            resource constraints.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDoForYou
