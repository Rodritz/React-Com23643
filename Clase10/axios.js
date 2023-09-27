//axios me trae toda la busqueda en json
let getNameAxios = async (idPost)=>{

    try {
        let resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        //console.log(resPost.data);

        let resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
        console.log(resUser.data);
        document.write(`${resUser.data.name} escribio el post ${resPost.data.title} y vive en ${resUser.data.address.city}`)
    } catch (error) {
        console.log(error);
    }
}
getNameAxios(8)