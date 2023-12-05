//IMPORTAR EL MODELO
import postModel from "../models/postModel.js"

/* mostrar todos los registros */

export const getAllPost = async(req,res)=>{
    try {
        const posts = await postModel.findAll()
        res.json(posts)
    } catch (error) {
        res.json({message:error.message})
    }
}
