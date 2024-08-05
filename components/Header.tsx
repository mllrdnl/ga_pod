"use client";

import React from "react";
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
    </header>
  );
};

export default Header;
