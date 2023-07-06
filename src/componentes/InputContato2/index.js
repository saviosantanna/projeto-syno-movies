import styles from "./InputContato2.module.css"

function InputContato2(props){
    return (
        <div className={styles.inputs}>
            <p>{props.label}</p>
            <input type="text" placeholder={props.placeholder} className={styles.caixaTexto}></input>
        </div>
    )
    
}

export default InputContato2