import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({ title, description, url, imageUrl }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    )
}
