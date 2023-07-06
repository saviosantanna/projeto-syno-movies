import styles from "./Body.module.css"


function Body(props){
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Body