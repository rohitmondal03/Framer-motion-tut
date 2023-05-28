import React, { useState } from 'react'

import { motion, useScroll } from 'framer-motion'

const Tut1 = () => {

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0.5, x: '-10%' }
    }

    const [isOpen, setisOpen] = useState(true)

    const { scrollYProgress } = useScroll();

    return (

        // SCROLL LINKED ANIMATIONS
        // Scroll bar see on youtube.
        <motion.div
            // d= "M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0" 
            style={{pathLength: scrollYProgress, position: 'fixed', top: '0', left: '0', height: '10px', backgroundColor: 'red', transformOrigin: '0%'}}
        >
            {/* KEYFRAMES EXAMPLE */}
            <h1>Keyframes</h1>
            <motion.div
                animate={{
                    scale: [1, 1.5, 1.5, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    transition: {
                        duration: '2',
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 1,
                        times: [0, 0.2, 0.5, 0.8, 1],
                    }
                }}
                style={{ height: '200px', width: '200px', backgroundColor: 'white', margin: '5rem auto' }}
            />


            {/* Variants */}
            <h1 style={{ margin: '10rem auto 1rem auto' }}>Variants</h1>
            <button
                onClick={() => {
                    setisOpen(!isOpen)
                }}
            >
                Variants
            </button>

            <motion.div
                style={{ height: '200px', width: '200px', backgroundColor: 'white', margin: '0 auto' }}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            />



            {/* DRAG */}
            {/* Not done see on youtube */}
            <h1 style={{ margin: '10rem auto 1rem auto' }}>Draggable</h1>
            <motion.div
                style={{ backgroundColor: 'white', height: '200px', width: '200px', margin: '0 auto' }}
                drag='true'
                dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50
                }}
            />



            {/* SCROLL-TRIGGERED ANIMATIONS */}
            <h1 style={{ margin: '10rem auto 1rem auto' }}>Scroll Triggered animations</h1>
            <motion.div
                style={{ backgroundColor: 'white', margin: '0 auto', height: '200px', width: '200px', }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ rotate: -10 }}
                transition={{ duration: 3 }}
            />

        </motion.div>
    )
}

export default Tut1