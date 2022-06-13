import React from 'react'
import AboutRpa from './AboutRpa/AboutRpa'
import Layout from './commons/Layout'
import Hero from './Hero/Hero'
import WhatWeDoForYou from './WhatWeDoForYou/WhatWeDoForYou'

const AppliedRpaLandingpage = () => {
    return (
        <Layout>
            <Hero />
            <AboutRpa />
            <WhatWeDoForYou />
        </Layout>
    )
}

export default AppliedRpaLandingpage
