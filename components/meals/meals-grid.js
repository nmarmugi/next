import MealsItem from "./meals-item";
import styles from './meals-grid.module.css'

export default function MealsGrid({meals}) {
	return (
		<div className={styles.containerMeals}>
			{
				meals.map((meal => (<MealsItem key={meal.id} {...meal} />)))
			}
		</div>
	)
}