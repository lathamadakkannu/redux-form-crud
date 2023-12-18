import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addTaskToList } from "./SlicePage";
import { useDispatch } from "react-redux";


function AddTask(){

    const dispatch=useDispatch()

    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")

    const addTask=(e)=>{
        e.preventDefault()
        console.log(title,description);

        dispatch(addTaskToList({title,description}))
        setTitle("")
        setDescription("")
    }

    return(
        <div>
            <section className="my-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter Task Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task Name" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Task Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Task Description" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}

                        />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
                        Submit
                    </Button>
                </Form>
            </section>

        </div>
    )
}
export default AddTask;