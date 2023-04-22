'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />

        <div className="hidden sm:block absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="hidden sm:block absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="hidden sm:block absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="hidden sm:block absolute top-1/3 left-[20%] w-[196px] h-[150px] p-[6px]">
          <img
            src="card-01.png"
            alt="card"
            className="w-full h-full object-cover rounded-[40px]"
          />
          <p className="absolute bottom-2 left-7 text-[16px]  text-white font-bold">
            The Upside Down
          </p>
        </div>
        <div className="hidden sm:block absolute top-10 right-[20%] w-[196px] h-[150px] p-[6px]">
          <img
            src="card-02.png"
            alt="card"
            className="w-full h-full object-cover rounded-[40px]"
          />
          <p className="absolute bottom-2 left-11 text-[16px]  text-white font-bold">
            Hawkins Labs
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
