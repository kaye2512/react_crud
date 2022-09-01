import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function CreateUser(){
    const Navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const handleChange = (event)  => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/projet/React_projet/react_crud/api/index.php/save', inputs).then(function(response){
            console.log(response.data);
            Navigate('/');
        });
        
    }
    return(
        <div>
            <h1>Create Users</h1>
            <form onSubmit= {handleSubmit}>
                <table cellSpacing ="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </form>
        </div>
        
    )
}

export default CreateUser