//IMPORTAR EL MODELO
import postModel from "../models/postModel.js"

/* mostrar todos los registros */

export const getAllPost = async(req,res)=>{
    try {
        const post = await postModel.findAll()
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }
}

/* mostrar un registro */

export const getPost = async(req,res)=>{
    try {
        const {id} = req.params
        const post = await postModel.findByPk(id)
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    }
}

/* crear un post */

export const createPost = async (req,res)=>{
    try {
        await postModel.create(req.body)
        res.json({
            "message": "registro creado correctamente"
        })        
    } catch (error) {
        res.json({message:error.message})
    }
}

/* actualizar un post */

export const updatePost = async (req,res)=>{
    try {
        await postModel.update(req.body,{
            where :{id:req.params.id}
        } )
        res.json({
            "message": "registro actualizado correctamente"
        })        
    } catch (error) {
        res.json({message:error.message})
    }
}

/* eliminamos un post */

export const deletePost = async(req,res)=>{
    try {
        await postModel.destroy({
            where :{id:req.params.id
            }})
        res.json({
            "message": "registro elimninado correctamente"
        }) 
    } catch (error) {
        res.json({message:error.message})
    }
}