import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../../styles.js";
import {
  fadeIn,
  textVariant,
  floatFromRightVariant,
} from "../../utils/motion.js";
import Axios from "axios";

const AstroPic = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [astroPicData, setAstroPicData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAstroPic = async () => {
      try {
        // const response = await Axios.get(
        //   "http://localhost:3001/astro-pic"
        // );
        const response = await Axios.get(
          "https://portfoliowebsite-31rf.onrender.com/astro-pic"
        );
        console.log(response.data);
        setAstroPicData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Astronomy Picture of the Day:", error);
        setLoading(false);
      }
    };
    getAstroPic();
  }, []);

  return (
    <section id="astro-pic" className="overflow-hidden">
      <div className="bg-background1 relative z-1 bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-24 sm:pb-20">
        <div className="mx-auto px-5">
          <p className={styles.sectionSubText + styles.paddingX}>Daily NASA</p>
          <h2 className={styles.sectionHeadText + styles.paddingX}>
            Astronomy Picture
          </h2>

          <motion.div
            className="flex flex-col justify-center w-[90%] md:w-full mx-auto mt-10 sm:mt-0"
            variants={floatFromRightVariant}
            initial="initial"
            ref={ref}
            // animate={isInView ? "animate" : "initial"}
            whileInView="animate"
          >
            {/* <p className="text-center text-secondary"><span className="underline">Note:</span> If you can't see the astro pic of the day, please give it a minute to complete its stellar journey to your screen!</p> */}
            {loading ? (
              <div className="flex justify-center items-center mx-auto h-96">
                <div className="w-16 h-16 border-4 border-t-4 border-t-primary border-tertiary rounded-full animate-spin"></div>
              </div>
            ) : (
              astroPicData && (
                <div className="flex flex-col items-center text-center justify-center mx-auto">
                  <h2 className="text-primary text-2xl font-bold p-5 uppercase text-center">
                    {astroPicData.title}
                  </h2>
                  <div className="w-full flex justify-center text-center mx-auto">
                  <a
                    href={astroPicData.hdurl}
                    target="_blank"
                    rel="noreferrer"
                    alt="Astronomy Picture of the Day Link"
                    className="w-full md:w-[60%] h-auto"
                  >
                    <img
                      src={astroPicData.url}
                      alt={astroPicData.title}
                      className="rounded-xl text-center w-full h-auto"
                    />
                  </a>
                  </div>
                  <div className="w-full md:w-[60%] mx-auto text-white p-2">
                    <p className="pt-5 px-2 pb-2">{astroPicData.explanation}</p>
                    <p className="p-2">
                      <span className="font-bold">Copyright:</span>{" "}
                      {astroPicData.copyright}
                    </p>
                    <p className="p-2">
                      <span className="font-bold">
                        NASA "Astronomy Picture of the day" source:{" "}
                      </span>{" "}
                      <a
                        href="https://apod.nasa.gov/apod/astropix.html"
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary hover:text-primary cursor-pointer underline"
                      >
                        click here
                      </a>
                    </p>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AstroPic;
