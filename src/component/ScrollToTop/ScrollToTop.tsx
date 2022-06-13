import React from 'react'
import { BiUpArrowCircle } from 'react-icons/bi'

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', toggleVisible)
        }
    }, [])

    return (
        <div className="scroll__to__top">
            {visible && (
                <div
                    className="scroll__to__top__inner"
                    aria-hidden="true"
                    onClick={scrollToTop}
                >
                    <BiUpArrowCircle className="text-green-500" />
                </div>
            )}
        </div>
    )
}

export default ScrollToTop
