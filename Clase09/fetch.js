const getNameFetch = (idPost) =>{
    //dentro del fetch esta el endPoint
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      //hago la consulta y guardo la informacion en la variable res y la convierto  a json
      .then((res) => {
        /* console.log(res); */
        return res.json();
      })
      //ese jsoan ahora guardalo en la variable post
.then((post) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            /* console.log(res); */
            return res.json();
          })
          .then((user) => {
            console.log(
              `${user.name} vive en la calle:${user.address.street} `
            );
          });
      });
    
}
getNameFetch(48)

/* FETCH trabaja con URLs */
