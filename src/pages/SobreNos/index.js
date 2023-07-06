import styles from "./SobreNos.module.css"

function SobreNos() {
    return (
        <div className={styles.sobrenos}>
            <h1 className={styles.titulo}>Sobre Nós</h1>
            <div className={styles.texto}>
                <img className={styles.imgLogo} alt="imagem-logo" src="../../images/logo.png"/>
                Aqui, queremos compartilhar um pouco sobre nossa paixão pelo cinema e nossa missão de fornecer as melhores sinopses de filmes. Somos uma equipe de entusiastas do cinema, apaixonados por histórias envolventes que nos fazem rir, chorar e refletir. Nosso objetivo é trazer essa paixão para você, fornecendo sinopses cuidadosamente elaboradas que capturam a essência de cada filme.<br/><br/>
                Acreditamos que as sinopses são uma forma de abrir as portas para a magia do cinema, permitindo que os espectadores mergulhem na história antes mesmo de assistirem ao filme. Queremos despertar sua curiosidade e entusiasmo, ajudando você a escolher os filmes que mais lhe interessam.
                Nossa equipe está sempre buscando sinopses emocionantes, abrangendo uma ampla variedade de gêneros e estilos cinematográficos. Queremos oferecer uma seleção diversificada de filmes, desde os clássicos até as últimas estreias, para atender a todos os gostos.<br/><br/>
                Acreditamos que as sinopses são uma forma de abrir as portas para a magia do cinema, permitindo que os espectadores mergulhem na história antes mesmo de assistirem ao filme. Queremos despertar sua curiosidade e entusiasmo, ajudando você a escolher os filmes que mais lhe interessam.
                Nossa equipe está sempre buscando sinopses emocionantes, abrangendo uma ampla variedade de gêneros e estilos cinematográficos. Queremos oferecer uma seleção diversificada de filmes, desde os clássicos até as últimas estreias, para atender a todos os gostos.
            </div>
        </div>
    )
}

export default SobreNos;