import styles from "../style";
import {
  discount,
  robot,
  robot1,
  robot2,
  Animated,
  Animated1,
} from "../assets";
import { motion } from "framer-motion";

import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    // <section id='home' className={`flex  md:flex-row flex-col ${styles.paddingY}` }  style={{ backgroundImage: `url(${Animated})`, backgroundSize: 'cover',filter: 'brightness(70%)' }}>
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        position: "relative",
        // width: "100%",
      }}
    >
      {/* <div className={`${styles.boxWidth}`}> */}

      <div className="flex md:felx-center flex-col md:flex-row md:px-64 flex-center py-9">
        <div
          className={`flex-1 ${styles.flexStart} p-16 flex-col xl:px-0 sm:px-8 px-6`}
          style={{ zIndex: 1 }}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <motion.div
              // animate={{ x: -70 }}
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "anticipate", duration: 1 }}
            >
              <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">Your Trusted</span>{" "}
                <span className="text-white">
                  Trusted IT Solutions Provider
                </span>
              </p>
            </motion.div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <h1 className="flex-1 font-poppins font-semibold md:text-[72px] text-[37px] text-white md:leading-[100.8px] ">
                We Provide Services <br className="hidden" />{" "}
                <span className="text-gradient">That Light Up</span>{" "}
              </h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="sm:flex hidden md:mr-4 mr-0">
                <GetStarted />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -80}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
          <h1 className="font-poppins font-semibold md:text-[68px] text-[37px] text-white ss:leading-[100px] w-full">
            Our Clients Faces.
          </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </motion.div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 relative `}
        >
          <motion.div
            // initial={{ opacity: 1, x: 80}}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ ease: "easeOut", duration: 0.2 }}
            className=" px-9"
          >
            <img
              src={Animated}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] rounded-3xl "
            />
          </motion.div>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className={`md:invisible mt-3 ${styles.flexCenter} `}>
          <GetStarted />
        </div>
        <div
          className={`absolute top-0 bg-fixed left-0 w-full h-full bg-gradient-to-r from-transparent to-black`}
          style={{
            backgroundImage: `url(${Animated})`,
            backgroundSize: "cover",

            opacity: "0.2", // Adjust brightness percentage as needed
            zIndex: 0,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
