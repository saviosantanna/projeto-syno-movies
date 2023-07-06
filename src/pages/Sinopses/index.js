import ResumoFilme from "../../componentes/ResumoFilme";
import styles from "./Sinopses.module.css"
import dados from "../../filmes.json"

function Sinopses() {
    return (
        <div className={styles.sinopses}>
            <h1 className={styles.titulo}>Sinopses</h1>
            {
                dados.map((e)=>
                   <ResumoFilme infos={e}/>
                )
            }  
        </div>
    )
}

export default Sinopses;