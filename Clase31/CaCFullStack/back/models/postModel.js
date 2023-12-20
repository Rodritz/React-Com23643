/* importo db  para conectarme a la db*/
import db from "../database/db.js";

import { DataTypes } from "sequelize";

/* defino la tabla */
const postModel = db.define("posts",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})
    
export default postModel
