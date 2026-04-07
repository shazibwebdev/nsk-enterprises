import React, { useEffect, useRef } from 'react'
import { Truck, ShieldCheck, Headphones, RotateCcw } from 'lucide-react'
import WhyChooseUsItem from './WhyChooseUsItem'

function WhyChooseUs() {
    const features = [
        { icon: <Truck size={40} />, label: "Free Shipping over $100" },
        { icon: <ShieldCheck size={40} />, label: "Secure Payment" },
        { icon: <Headphones size={40} />, label: "24/7 Support" },
        { icon: <RotateCcw size={40} />, label: "Easy Returns" },
    ]

    const sectionRef = useRef(null)
    const cursorDivRef = useRef(null)

    useEffect(() => {
        const cursorDiv = document.createElement('div')
        cursorDiv.style.width = '40px'
        cursorDiv.style.height = '40px'
        cursorDiv.style.position = 'absolute'
        cursorDiv.style.top = '0'
        cursorDiv.style.left = '0'
        cursorDiv.style.borderRadius = '50%'
        cursorDiv.style.border = '2px solid'
        cursorDiv.style.backdropFilter = `blur(1px)`
        cursorDiv.style.opacity = `0`

        cursorDiv.style.pointerEvents = 'none'
        cursorDivRef.current = cursorDiv

        if (sectionRef.current) {
            sectionRef.current.appendChild(cursorDiv)
        }

        return () => {
            if (sectionRef.current && cursorDivRef.current) {
                sectionRef.current.removeChild(cursorDivRef.current)
            }
        }
    }, [])

    const handleMouseMove = (e) => {

        let sectionBoundingRect = sectionRef.current.getBoundingClientRect()
        let { x, y } = sectionBoundingRect

        if (cursorDivRef.current) {
            cursorDivRef.current.style.opacity = `1`
            
            cursorDivRef.current.style.left = `${e.clientX - x}px`
            cursorDivRef.current.style.top = `${e.clientY - y}px`
        }
    }

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className='w-full height relative text-center cursor-none
        flex flex-col  justify-center items-center gap-8'>
            <h1 className='w-[90%] head  font-bold text-p text-4xl md:text-5xl'>
                Why Choose Us
            </h1>

            <ul className='w-[90%] text-center flex flex-col gap-4'>
                {features.map((feature, idx) => (
                    <WhyChooseUsItem key={idx} feature={feature.label} icon={feature.icon} />
                ))}
            </ul>
        </section>
    )
}

export default WhyChooseUs
