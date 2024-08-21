import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import styles from './page.module.css'

export default async function MealsPage() {

	const meals = await getMeals()

	return (
		<>
			<h2 className={styles.title}>Delicious meals, created <span className={styles.spanTitle}>by you</span></h2>
			<p className={styles.paragraph}>Choose your favorite recipe and coock it yourself. It is easy and fun!</p>
			<Link className={styles.link} href='/meals/share'>Share Your Favorite Recipe</Link>
			<MealsGrid meals={meals} />
		</>
	)
}