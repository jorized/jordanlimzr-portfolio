import { useState } from 'react';
import profilePic from "../assets/jordanhero.jpg"
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"

// Variants remain the same...
const containerVariants = { /* ... */ };
const childVariants = { /* ... */ };


const Hero = () => {
  const [isImageAnimationComplete, setIsImageAnimationComplete] = useState(false);

  const imageAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const borderContainerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: imageAnimation.transition.duration }
  };

  // Define the wrapper size including padding (450px + 0.5rem)
  // NOTE: If your p-1 maps to a different value (e.g., 4px), adjust "0.5rem" accordingly (e.g., "8px")
  const wrapperWidth = "calc(450px + 0.5rem)";
  const wrapperHeight = "calc(450px + 0.5rem)";

  return (
    <div className=" border-neutral-900 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                {/* Parent flex container controls alignment */}
                <div className="flex justify-center lg:justify-end lg:p-8">
                    {/* Border Wrapper - Set explicit size */}
                    <motion.div
                        className={`
                            p-2 /* Keep padding */
                            rounded-3xl
                            border border-transparent
                            /* Apply calculated width and height */
                            w-[${wrapperWidth}] h-[${wrapperHeight}]
                            /* Background layers */
                            [background:linear-gradient(45deg,theme(colors.neutral.950),theme(colors.neutral.800)_50%,theme(colors.neutral.950))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.neutral.700/.5)_80%,#D4145A_86%,#FBB03B_90%,#D4145A_94%,theme(colors.neutral.700/.5))_border-box]
                            /* Conditional animation */
                            ${isImageAnimationComplete ? 'animate-border' : ''}
                        `}
                        initial={borderContainerAnimation.initial}
                        animate={borderContainerAnimation.animate}
                        transition={borderContainerAnimation.transition}
                    >
                        <motion.img
                            src={profilePic}
                            alt="Jordan Lim"
                            // Keep w-full/h-full to fill the sized container
                            className="rounded-3xl brightness-90 w-full h-full object-cover"
                            // Width/Height props less critical now but good practice
                            width={350}
                            height={350}
                            initial={imageAnimation.initial}
                            animate={imageAnimation.animate}
                            transition={imageAnimation.transition}
                            onAnimationComplete={() => {
                                setIsImageAnimationComplete(true);
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            {/* Text Section ... */}
            <div className="w-full lg:w-1/2">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center lg:items-start mt-10 lg:mt-0"
                >
                   {/* ... h2, span, p, a tags ... */}
                   <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl bg-gradient-to-r from-[#D4145A] to-[#FBB03B] bg-clip-text text-transparent"> Jordan Lim</motion.h2>
                    <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-light text-transparent text-center lg:text-left">Aspiring Full Stack Developer </motion.span>
                    <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-2xl leading-relaxed tracking-tighter text-center lg:text-left">{HERO_CONTENT}</motion.p>
                    <motion.a
                        variants={childVariants}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="relative inline-block bg-white rounded-full py-3 px-6 text-sm font-medium text-stone-800 mb-10 overflow-hidden group transition-colors duration-300 hover:text-white"
                    >
                        <span className="relative z-10">Download Resume</span>
                        <span
                            className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#D4145A] to-[#FBB03B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                            style={{ zIndex: 0 }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero;