import styles from '../styles/Text.module.css'

export default function Text({ children, variant }) {

    const isValidVariant = ['standard', 'title', 'description', 'code', 'highlight'].includes(variant);

    return (
        <div className={isValidVariant ? styles[variant] : styles.standard}>
            {children}
        </div>
    )
}

Text.defaultProps = {
    variant: 'standard'
}
