import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {collection,addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

export const Create =()=>{
    //estados
    const[name, setName] = useState("Ingresa un nombre")
    const[lastName, setLastName] = useState("Ingresa un apellido")
    const[specialty, setSpecialty] = useState("ingresa una especialidad")

    //navegacion luego que se ejecute una funcion
    const navigate = useNavigate();

    //referenciamos a la db de firestore
    const heroesCollection = collection(db, "heroes");

    //function para crear un heroe
    const createHeroe= async (e)=>{
        e.preventDefault();
        await addDoc (heroesCollection,{
            name: name,
            lastName: lastName,
            specialty :  specialty
        })
        navigate("/")
      }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Create Heroe</h1>
                    <form onSubmit={createHeroe}>{/* onSubmit lleva entre llaves la funcion que se va a ejecutar al presiorar cualquier submit */}
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                            onChange={(e)=>setName(e.target.value)}
                            /* console.log(e.target) */
                            className="form-control"
                            type="text" 
                            placeholder={name}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">LastName</label>
                            <input 
                            onChange={(e)=>setLastName(e.target.value)}
                            /* console.log(e.target) */
                            className="form-control"
                            type="text" 
                            placeholder={lastName}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Specialty</label>
                            <input 
                            onChange={(e)=>setSpecialty(e.target.value)}
                            /* console.log(e.target) */
                            className="form-control"
                            type="text" 
                            placeholder={specialty}
                            />
                        </div>   
                        <button type="submit" className="btn btn-primary">Create</button>
                        <Link to="/" className="btn btn-danger">
                            Cancel
                        </Link>    
                    </form>
                </div>
            </div>
        </div>
    )
}