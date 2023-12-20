import{Sequelize} from "sequelize";

/* nombre de la debugger, user, contraseña, {donde esta alojadala db?, lenguaje db, puerto} */

const db = new Sequelize ("post_react23643", "root", "root", {
    host:"localhost",
    dialect:"mysql",
    port:3306
})

export default db