/*en programacion el asincronismo consiste en poder iniciar una accion 
sin depender de la finalizacion de acciones anteriores, es decir, el programa puede seguir 
avanzando sin esperar que cada accion termine*/

//hago un pedido asyncrono pasando un argumento y lo guardo en la variable
let getNameAsync = async(idPost)=>{

    try {
        //en la variable espero me llegue esta respuesta
        let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        //en la variable espero guardar el json de la respuesta anterior
        let post = await resPost.json()
        console.log(post);

        let resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let user = await resUser.json()
        console.log(user);

        console.log(`${user.name} vive en la calle ${user.address.street} y escribio el post ${idPost}: ${post.title}`);
        document.write(`${user.name} vive en la calle ${user.address.street} y escribio el post ${idPost}: ${post.title}`)

    } catch (error) {
        console.log(error);
    }
}

getNameAsync(14)