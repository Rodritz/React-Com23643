
function Card({apellido, nacimiento, clubes, mundial, late}){

    return (
        <>
        <h2 className={mundial?"dorado":"plateado"}>{apellido}</h2>
        {/* <h2 style={{backgroundColor:mundial?"gold":"silver"}}>{apellido}</h2> */}
        <small>{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial ? "Gano un mundial 🥇🏆 " : "Sigue participando 😭"}</p>
        <p>{late ? "Late ✔️" : "Nola ❌"}</p>
        </>
    )
}

export default Card