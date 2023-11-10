import {useState, useEffect} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"
import {getDoc, updateDoc, doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

export const Edit =()=>{
    //estados
    const[name, setName] = useState("")
    const[lastName, setLastName] = useState("")
    const[specialty, setSpecialty] = useState("")

    //navegacion luego que se ejecute una funcion
    const navigate = useNavigate();

    //destructuro los parametrosy traigo el id
    const {id} = useParams(); 

    //funcion para actualizar un domumento
    const update= async(e)=>{
        e.preventDefault();
        const heroeDoc = doc(db,"heroes", id);

        const data = {
            name: name,
            lastName: lastName,
            specialty: specialty,
        }
    
        await updateDoc(heroeDoc, data)
        navigate("/")        
    }

    //function que trae un doc por su id
    const getHeroesById = async(id)=>{
        const heroeById = doc(db, "heroes", id)
        const heroeDoc = await getDoc(heroeById);
        
        if(heroeDoc.exists()){
            setName(heroeDoc.data().name);
            setLastName(heroeDoc.data().lastName);
            setSpecialty(heroeDoc.data().specialty);
        }else{
            console.log("no existe ese dato en la DB");
        }
    };

    // use effect 
    useEffect(() => {
        getHeroesById(id);
      }, []);

      
      return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Edit Heroe</h1>
                    <form onSubmit={update}>{/* onSubmit lleva entre llaves la funcion que se va a ejecutar al presiorar cualquier submit */}
                        
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            /* console.log(e.target) */
                            className="form-control"
                            type="text" 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">LastName</label>
                            <input 
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            /* console.log(e.target) */
                            className="form-control"
                            type="text" 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Specialty</label>
                            <input 
                            value={specialty}
                            onChange={(e)=>setSpecialty(e.target.value)}
                            /* console.log(e.target) */
                            className="form-control"
                            type="text" 
                            />
                        </div>   
                        <button type="submit" className="btn btn-primary">Edit</button>
                        <Link to="/" className="btn btn-danger">
                            Cancel
                        </Link>    
                    </form>
                </div>
            </div>
        </div>
    )
}

