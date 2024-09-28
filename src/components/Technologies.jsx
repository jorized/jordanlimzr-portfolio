import { RiReactjsFill, RiNodejsFill } from "react-icons/ri"
import { SiSpringboot, SiMysql  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5}}
            className="my-20 text-center text-4xl bg-gradient-to-r from-[#D4145A] to-[#FBB03B] bg-clip-text text-transparent">
                Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4">
                <RiReactjsFill className="text-7xl text-[#1ADBFF]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                <SiSpringboot className="text-6xl text-[#72B648]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <RiNodejsFill className="text-7xl text-[#57A149]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="p-4">
                <DiRedis className="text-7xl text-[#D9362E]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                <BiLogoPostgresql className="text-7xl text-[#3A6C94]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                <SiMysql className="text-7xl text-[#00758F]" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies