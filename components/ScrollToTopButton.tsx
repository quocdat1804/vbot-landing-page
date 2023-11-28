"use client"

import { useEffect, useState } from "react"
import { ChevronUpIcon } from "@chakra-ui/icons";
import {
    IconButton,

} from "@chakra-ui/react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // if the user scrolls down, show the button
            window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
        }
        // listen for scroll events
        window.addEventListener("scroll", toggleVisibility)

        // clear the listener on component unmount
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    // handles the animation when scrolling to the top
    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
    }

    return <div>
        {isVisible && (

            <IconButton
                isRound
                position={"fixed"}
                bottom={"50px"}
                right={"50px"}
                height={"50px"}
                width={"50px"}
                onClick={scrollToTop}
                aria-label="Scroll To Top"
            >
                <ChevronUpIcon boxSize={8} />
            </IconButton>
        )}
    </div>

}

export default ScrollToTopButton