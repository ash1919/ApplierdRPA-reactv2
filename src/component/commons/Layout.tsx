import React from 'react'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import NavBar from './NavBar'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
    const { children } = props
    return (
        <div>
            <main>
                <ScrollToTop />
                <NavBar />
                {children}
            </main>
            <footer className="text-white">sds</footer>
        </div>
    )
}

export default layout
