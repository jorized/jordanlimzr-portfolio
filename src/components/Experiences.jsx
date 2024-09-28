import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experiences = () => {
  return (
    <div className="pb-4">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl bg-gradient-to-r from-[#D4145A] to-[#FBB03B] bg-clip-text text-transparent">
                Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                            {experience.year}
                        </p>
                        {/* Image under the year */}
                        {experience.image && (
                            <img 
                                src={experience.image} 
                                alt={`${experience.company} logo`} 
                                className="mt-2 h-36 w-36 object-contain"
                            />
                        )}
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {experience.role} - {" "}
                            <span className="text-sm text-stone-500">{experience.company}</span>
                        </h3>
                        <p className="mb-4 text-stone-400">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                                <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences
