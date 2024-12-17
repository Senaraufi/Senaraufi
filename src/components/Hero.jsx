import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaShieldAlt } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaShieldAlt className="text-cyan-500 text-4xl" />
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Cybersecurity Student
            </h2>
          </div>
          <p className="text-gray-400 py-4 max-w-md text-xl">
            Aspiring cybersecurity professional with a strong foundation in computer science, networking, and Java programming. 
            Currently focusing on network security, system architecture, and secure software development.
          </p>

          <div className="flex gap-6 items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-1" />
              </span>
            </motion.button>
            
            <div className="flex items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Senaraufi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub size={30} className="text-gray-400 hover:text-white duration-300" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/sena-raufi-610187293/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} className="text-gray-400 hover:text-white duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
