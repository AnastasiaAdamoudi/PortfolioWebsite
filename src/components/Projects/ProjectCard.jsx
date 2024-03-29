import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../utils/motion.js';

const ProjectCard = ({ index, image, name, description, date, techStack, repoLink, repoLink2, websiteLink, status, isOpen, toggleOpen }) => {
    return (
      <div className="xs:w-[350px] sm:w-[350px] md:w-[450px] lg:w-[450px] xl:w-[450px]">
        <motion.div
          layout
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          exit="closed"
          variants={{
            open: { width: '100%', right: '0', zIndex: 2 },
            closed: { width: '100%', right: '0', zIndex: 1 },
          }}
          className={`cursor-pointer w-full xs:w-[350px] sm:w-[350px] md:w-[450px] lg:w-[450px] xl:w-[450px] card bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-card`}
        >
          <motion.div
          className="bg-background rounded-2xl flex justify-evenly items-center flex-col"
          variants={fadeIn('left', 'spring', 0.5, 1.25)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full rounded-2xl" />
            <br />
            <div className="text-background1 text-center text-[20px] max-w-[350px] leading-[30px] font-bold">
              {name}
            </div>
  
            {!isOpen && (
            <div className="text-background1 text-center text-[14px] underline cursor-pointer pt-1"
            onClick={toggleOpen}
            alt="click to read more about this project"
            >
            <p>read more</p>
            </div>
            )}
            
            {isOpen && (
              <div className="text-background1 text-center text-[14px] underline cursor-pointer pt-1"
            onClick={toggleOpen}
            alt="click to read less about this project"
            >
            <p>read less</p>
            </div>
            )}
  
          </motion.div>
          <br />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 50 },
                }}
                className="flex justify-evenly items-center flex-col"
              >
                <div className="text-background1 text-center text-[14px] max-w-[350px] leading-[30px] flex justify-evenly gap-2">
                  <p><strong>Links:</strong></p>
                  {repoLink && (
                    <div className="underline">
                      <a href={repoLink} alt="code" target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </div>
                  )}
                  {repoLink2 && (
                    <div className="underline">
                      <a href={repoLink2} alt="more code" target="_blank" rel="noopener noreferrer">
                        More Code
                      </a>
                    </div>
                  )}
                  {websiteLink && (
                    <div className="underline">
                      <a href={websiteLink} alt="website" target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </div>
                  )
                  }
                </div>
                <br />
                <div className="text-background1 text-center text-[14px] max-w-[350px] leading-[30px]">
                  <p><strong>Date:</strong> {date}</p>
                  <br />
                  <p><strong>The challenge:</strong> {description.challenge}</p>
                  <br />
                  <p><strong>The solution:</strong> {description.solution}</p>
                  <br />
                  <p><strong>Key takeaways:</strong></p>
                  <ul>
                    {description.learnings.map((learning, idx) => (
                      <li key={idx}>★ {learning}</li>
                    ))}
                  </ul>
                  <br />
                  <p><strong>Roadmap:</strong></p>
                  <ul>
                    {description.roadmap && (
                      description.roadmap.map((roadmap, idx) => (
                        <li key={idx}>★ {roadmap}</li>
                      ))
                    )
                      }
                  </ul>
                  <br />
                  <p><strong>Technologies used:</strong></p>
                  <ul>
                    {techStack.map((tech, index) => (
                      <li key={index}>★ {tech}</li>
                    ))}
                  </ul>
                  <br />
                  <p><strong>Status:</strong> {status}</p>
                  <br />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  };

export default ProjectCard;