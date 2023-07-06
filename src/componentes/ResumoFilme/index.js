import { NavLink } from "react-router-dom"
import styles from "./ResumoFilme.module.css"

function ResumoFilme(props) {
       return (
        <div className={styles.filme}>
            <img className={styles.imagens} src={`../../images/filme${props.infos.id}.jpg`} alt={`imagem-filme-${props.infos.rota}`} />
            <div className={styles.infoFilme}>
                <h2 className={styles.subtitulo}>{props.infos.nome}</h2>
                <p className={styles.sinopse}>{props.infos.resumo}</p>
                <NavLink to={`/sinopses/${props.infos.rota}`} >[Ver Mais]</NavLink>
            </div>
        </div>
    )
}

export default ResumoFilme