import styles from './loading.module.css'

export default function Loading() {
	return <div className={styles.containerLoading}>
		<div className={styles.loading}></div>
		<p className={styles.loadingText}>Loading meals . . .</p>
	</div>
}