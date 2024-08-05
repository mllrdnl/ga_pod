import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
    </main>
  );
}
