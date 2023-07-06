import InputContato from "../../componentes/InputContato"
import InputContato2 from "../../componentes/InputContato2"
import styles from "./Contato.module.css"

function Contato(){
    return (
        <div className={styles.contato}>
            <h1 className={styles.titulo}>Contato</h1>
            <p className={styles.texto}>Entre em contato conosco:</p>

            <div className={styles.formulario}>
            <InputContato label="Nome:" placeholder="Nome Completo"/>
            <InputContato label="E-mail:" placeholder="exemplo@gmail.com"/>
            <InputContato2 label="Texto:" placeholder="Digite seu texto aqui ..."/>
            <button>Enviar</button>
            </div>
        </div>
        
    )
    
}

export default Contato

/*

<InputContato label="E-mail:"/>
            <InputContato label="Texto:"/>

*/