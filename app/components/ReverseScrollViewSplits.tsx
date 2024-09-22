import React from "react";
import {useScroll, useTransform, motion} from "framer-motion";


const ReverseScrollViewSplits = (): React.ReactNode => {

    const ref: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start 1.2", "center 0.35"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], ["-10deg", "0deg"]);
    const x = useTransform(scrollYProgress, [0, 1], ["-20rem", "0rem"]);

    const y = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"]);
    return (
        <div
            ref={ref}
            className={`w-full h-[50vh] flex justify-between items-center`}>


            <motion.div
                style={{rotate, x}}
                className={`bg-white transition-all duration-300 ease-out origin-bottom-left rounded-2xl h-full flex-[1.5]`}>

            </motion.div>

            <motion.div
                style={{y}}
                className={`flex-1 text-white h-full`}>
                <h1 className={`text-[3rem] font-bold uppercase text-right`}>TIktok</h1>
                <p className={`font-normal text-right`}>UI/UX Design, Web Motion</p>
                <div className={`w-full flex justify-end mt-5`}>
                     <button className={`p-5 px-10 rounded-full border-[0.25px] border-white`}>See More</button>
                </div>
            </motion.div>
        </div>
    )
}

export default ReverseScrollViewSplits;