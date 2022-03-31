import style from '../styles/Grid.module.css'

export default function Grid(props) {
    return(
        <div className={style.grid}>
            {props.children}
        </div>
    )
}
