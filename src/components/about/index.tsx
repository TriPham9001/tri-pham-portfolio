'use client';

import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <div className="flex h-auto w-full flex-col gap-y-5 py-4 xl:h-[500px] xl:flex-row">
      <div className="flex h-full w-full items-center justify-center xl:hidden">
        <div className="relative">
          <div className="absolute -right-2 top-3 aspect-square w-80 rounded-full bg-yankees-blue/70 blur-md backdrop-blur" />
          <LazyLoadImage
            src="/assets/images/my-avatar.jpg"
            className="aspect-square w-80 rounded-full object-cover object-top"
            effect="blur"
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 xl:w-2/3 xl:items-start">
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-5xl font-bold text-yankees-blue">
            Hi, I&apos;m Tri!
          </p>
          <motion.div
            className="text-5xl"
            animate={{
              rotate: [30, 0, 30, 0, 30],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.4, 0.6, 0.8],
              repeat: Infinity,
            }}
          >
            👋🏼
          </motion.div>
        </div>
        <p className="w-2/3 text-center text-base font-light text-yankees-blue xl:text-start">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div>
          <Button radius="md" size="lg" className="bg-primary text-white">
            DOWNLOAD MY RESUME
          </Button>
        </div>
      </div>
      <div className="hidden h-full w-1/3 items-center justify-center xl:flex">
        <div className="relative">
          <div className="absolute -right-2 top-3 aspect-square w-80 rounded-full bg-yankees-blue/70 blur-md backdrop-blur" />
          <LazyLoadImage
            src="/assets/images/my-avatar.jpg"
            className="aspect-square w-80 rounded-full object-cover object-top"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
