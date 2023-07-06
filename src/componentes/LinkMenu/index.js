import { NavLink, useLocation } from "react-router-dom"
import styles from "./LinkMenu.module.css"

function LinkMenu(props) {
    const localizacao = useLocation();
    let link = localizacao.pathname;

    return (
        <li>
            <NavLink to={props.to} className={`${styles.itemMenu} ${link === props.to ? styles.linkAtivo : ""} ${link.includes(props.to) && props.to !== "/"? styles.linkAtivo : ""}`}>
                {props.children}
            </NavLink>

        </li>
    )
}

export default LinkMenu