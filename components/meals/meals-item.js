import Image from "next/image"
import Link from "next/link"
import styles from './meals-item.module.css'

export default function MealsItem({title, slug, image, summary, creator}) {
	return (
		<div className={styles.meal}>
			<div className={styles.containerImg}>
				<Image className={styles.img} src={image} alt={title} fill />
			</div>
			<div className={styles.padding}>
				<h2 className={styles.highlight}>{title}</h2>
				<p className={styles.creator}>by {creator}</p>
			</div>
			<div className={styles.padding}>
				<p className={styles.summary}>{summary}</p>
				<Link className={styles.link} href={`/meals/${slug}`}>View Details</Link>
			</div>
		</div>
	)
}