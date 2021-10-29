import React, {useState} from "react"
import axios from "axios"

function CreateNote(){
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event){
        const {name, value} = event.target

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault()
        // console.log(input);
        const newNote ={
            title: input.title,
            content: input.content
        }
        try{
            axios.post("http://localhost:3001/create", newNote)
        }catch(err){
            console.error(err)
            
        }
        
    }




    return <div className="container">
        <h1>Create a note page</h1>

        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="What's the title?"></input>
            </div>
            
            <div className="form-group">
                <textarea onChange={handleChange} name="content" value ={input.content} autoComplete="off" className="form-control" placeholder="add notes here"> </textarea>
            </div>

            <div>
                <button onClick={handleClick} className="btn btn-lg btn-info">Add a new Note</button>
            </div>

        </form>
    </div>
}

export default CreateNote