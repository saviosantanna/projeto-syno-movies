import styles from "./InputContato.module.css"

function InputContato(props){
    return (
        <div className={styles.inputs}>
            <p>{props.label}</p>
            <input type="text" placeholder={props.placeholder} className={styles.caixaTexto}></input>
        </div>
    )
    
}

export default InputContato