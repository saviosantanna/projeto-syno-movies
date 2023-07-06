import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css"
import { Icon } from '@iconify/react';

function Footer(){
    return (
        <div className={styles.footer}>
            <p>Desenvolvido por Sávio Sant’anna</p>
           <div className={styles.icones}>
            <NavLink to="https://www.figma.com/file/wO6FST75WWqFszh1XHkmN3/Syno-Movies?type=design&node-id=0-1&mode=design&t=cIRbmSmvrlU93D9N-0" target="_blank"><Icon className={styles.icone} icon="logos:figma" /></NavLink>
            <NavLink to="https://github.com/saviosantanna" target="_blank"><Icon className={styles.icone}  icon="ri:github-fill" /></NavLink>
            <NavLink to="https://www.linkedin.com/in/saviosantannadesa/" target="_blank"><Icon className={styles.icone}  icon="mdi:linkedin" /></NavLink>
            </div>
        </div>
        
    )
}

export default Footer;