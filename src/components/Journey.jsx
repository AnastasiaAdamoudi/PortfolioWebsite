import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion.js";
import { Chrono } from "react-chrono";
import { timelineItems } from "../constants/constants.js";

const Journey = () => {
  return (
    <section id="journey">
      <div className="bg-background1 relative bg-cover w-full  top-0 left-0 right-0 bottom-0">
        <div className="mx-auto px-5">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText + styles.paddingX}>My coding</p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              Journey
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
            className={
              styles.padding + "text-white text-[17px] max-w-7xl leading-[30px]"
            }
          >
          <div style={{ width: "100%", height: "90vh" }}>
            <Chrono
              items={timelineItems}
              mode="VERTICAL_ALTERNATING"
              showSingleMode
              itemWidth={400}
              itemHeight={500}
              cardWidth={550}
              cardHeight={150}
              focusActiveItemOnLoad
              scrollable
              theme={{
                primary: "#2B96B1",
                secondary: "#a855f7",
                cardBgColor: "#E0D4F8",
                cardTitleColor: "#2B96B1",
                cardDetailsColor: "#3b0764",
                iconBackgroundColor: "#CCB2FF",
                titleColorActive: "#83F8F5",
                titleColor: "#83F8F5",
              }}
            />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;