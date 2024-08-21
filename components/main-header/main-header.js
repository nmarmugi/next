import Link from "next/link";
import Image from "next/image";

import imgSrc from '@/assets/logo.png'
import styles from './main-header.module.css'
import NavLink from "../link/link";

export default function MainHeader() {

	return (
		<header className={styles.containerHeader}>
			<Link className={`${styles.linkHome} ${styles.link}`} href='/'>
				<Image src={imgSrc} alt="Immagine logo" width={60} priority />
				NEXTLEVEL FOOD
			</Link>
			<nav className={styles.navbar}>
				<NavLink classBase={styles.link} classActive={styles.active} refLink='/meals' nameLink='Browse Meals' />
				<NavLink classBase={styles.link} classActive={styles.active} refLink='/community' nameLink='Foodies Community' />
			</nav>
		</header>
	)
}