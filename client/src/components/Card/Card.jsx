import styles from 'Cards.css';

const Card = (props) =>{



    return(
    <div>
        <id>Id : {props.id}</id>
        <p>Nombre : {props.nombre}</p>
        <img src="{img}" alt='{props.nombre}'/>
        <p>Vida : {props.vida}</p>
        <p>Ataque : {props.ataque}</p>
        <p>Defensa : {props.defensa}</p>
        <p>Velocidad : {props.velocidad}</p>
        <p>Altura : {props.altura}</p>
        <p>Peso : {props.peso}</p>
        {/* Velocidad altua y peso rend cond */}
        <p>Tipo : {props.tipo}</p>

    </div>
    )
}
export default Card;