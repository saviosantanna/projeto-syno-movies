import styles from "./Navmenu.module.css"
import LinkMenu from "../LinkMenu";

function Navmenu(){
    return (
        <ul className={styles.menu}>
            <LinkMenu to="/" >Home</LinkMenu>
            <LinkMenu to="/sinopses">Sinopses</LinkMenu>
            <LinkMenu to="/sobrenos">Sobre Nós</LinkMenu>
            <LinkMenu to="/contato">Contato</LinkMenu>
        </ul>
    );
}

export default Navmenu
