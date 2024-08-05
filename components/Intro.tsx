"use client";

import React from "react";
import styles from "@/styles/Intro.module.css";
import Image from "next/image";
import roseImg from "@/public/neonrose.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaSpotify } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

const Intro = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image className={styles.pic} src={roseImg} alt="rose neon sign" />
          </motion.div>
          <motion.span
            className={styles.hand}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className={styles.introText}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        This will be the website for the new amazing podcast, Guaranteed
        Analysis!! Two pet nutrition specialists will cover all topics related
        to nutrition for our 4-legged kids - including, but not limited to,
        debunking myths, updates on research, and what's trending.
      </motion.p>

      <motion.div
        className={styles.buttons}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" className={styles.contactButton}>
          Contact me here <BsArrowRight />{" "}
        </Link>
        <a className={styles.cvLink}>
          Download CV <HiDownload />
        </a>
        <a className={styles.linkedInButton}>
          <FaSpotify />
        </a>
        <a className={styles.linkedInButton}>
          <SiApplepodcasts />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
