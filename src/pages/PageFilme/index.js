import { NavLink, useParams } from "react-router-dom";
import styles from "./PageFilme.module.css"
import dados from "../../filmes.json"



function PageFilme() {

    const parametros = useParams()
    const item = dados.find((e) => e.rota === parametros.rota)
    return (
        <div className={styles.pagefilme}>
            <h1 className={styles.titulo}>{item.nome}</h1>
            <div className={styles.container}>
                <div className={styles.conteudo}>
                <img className={styles.imagem} src={`../../images/filme${item.id}.jpg`} alt={`imagem-filme-${item.rota}`} />
                <p className={styles.infosFilme}>Ano: {item.ano}</p>
                <p className={styles.infosFilme}>Duração: {item.duracao}</p>
                <p className={styles.infosFilme}>Título Original: {item.nomeOriginal}</p>
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.texto}>{item.sinopse}</p>
                    <NavLink to="/sinopses">[Voltar]</NavLink>
                </div>

            </div>
        </div>
    )
}

export default PageFilme