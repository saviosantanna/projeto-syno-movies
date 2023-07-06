import style from "./Header.module.css";

function Header(){
return (
    <div className={style.conteiner}>
        <h1 className={style.titulo}>Syno Movies</h1>
        <p className={style.subtitulo}>A sinopse de todos os seus filmes</p>
    </div>
)
}

export default Header