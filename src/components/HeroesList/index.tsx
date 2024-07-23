/*"use client"; //bloco renderiza do lado do servidor e utiliza hooks

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss";
import HeroPicture from "../HeroPicture";
import { motion } from "framer-motion";
import Link from "next/link";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <motion.h1
        className={`${spidermanFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Personagens
      </motion.h1>
      <motion.section
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero) => (
          <motion.div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }} //qd clica img diminui
            transition={{ duration: 0.8 }}
          >
            <Link href={`/hero/${hero.id}`}>
              <HeroPicture hero={hero} />
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}

//`${ para concatenar
//map tem key
//chave dentro de outra: objeto, propriedades
//-100 sobre, 0 desce*/

"use client"; //usar mais hooks

import Link from "next/link";
import { motion } from "framer-motion";

import HeroPicture from "../HeroPicture";

import styles from "./heroesList.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  heroes: IHeroData[]; //propriedade heroes
}

export default function HeroesList({ heroes }: IProps) {
  //componente HeroesList recebe como parametro heroes
  return (
    <>
      <motion.h1
        className={`${spidermanFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        Personagens
      </motion.h1>
      <motion.section
        className={styles.heroes}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {heroes.map((hero) => (
          <motion.div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/hero/${hero.id}`}>
              <HeroPicture hero={hero} />
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}