"use client";

import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Episodes",
    hash: "#episodes",
  },
  {
    name: "Resources",
    hash: "#resources",
  },
  {
    name: "Contact",
    hash: "contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <header className={styles.navContainer}>
      <motion.div
        className={styles.navbar}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className={styles.nav}>
          <ul className={styles.navUl}>
            {links.map((link) => (
              <motion.li
                className={styles.navLink}
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link href={link.hash}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
      {/* RESPONSIVE MENU */}
      <div className={styles.responsiveNav}>
        <button
          className={styles.responsiveButton}
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={styles.buttonLineTop}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={styles.buttonLineMid}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className={styles.buttonLineLast}
          ></motion.div>
        </button>
      </div>
    </header>
  );
};

export default Header;
