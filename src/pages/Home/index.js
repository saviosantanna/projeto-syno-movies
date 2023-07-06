import styles from "./Home.module.css"

function Home(){
    return (
        <div className={styles.home}>
            <h1 className={styles.titulo}>Home</h1>
            <p className={styles.texto}>Bem-vindo ao Syno Movies, o seu destino online para descobrir sinopses de filmes! Aqui você encontrará uma coleção abrangente de histórias emocionantes que o transportarão para universos cinematográficos fascinantes.</p>

            <p className={styles.texto}>Nossa equipe de cinéfilos está constantemente em busca das sinopses mais envolventes para que você possa mergulhar no enredo de cada filme antes mesmo de assisti-lo. Oferecemos sinopses cuidadosamente elaboradas, destacando os elementos mais importantes e intrigantes de cada história. Quer você seja um ávido fã de cinema ou alguém que adora acompanhar as últimas tendências, o Syno Movies é o seu guia definitivo.</p>
            
            <p className={styles.texto}>Navegue pelas sinopses, encontre aquela que captura sua imaginação e mergulhe em uma experiência cinematográfica única. Prepare a pipoca, acomode-se e comece a explorar as sinopses incríveis que o Syno Movies tem a oferecer. Desvende segredos, desvende mistérios e mergulhe em mundos imaginários, tudo a partir de uma pequena prévia das histórias que você está prestes a descobrir. O Syno Movies é a sua porta de entrada para a magia do cinema. Prepare-se para uma jornada cinematográfica inesquecível!</p>
        </div>
    )
}

export default Home;