import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from "react-redux";
import { updateTaskInList } from './SlicePage';

function MyVerticallyCenteredModal(props) {

    const  {selectedTask}=useSelector((state)=>state.tasks)

    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")

    const[id,setId]=useState(0)
    const dispatch=useDispatch()

    const updateTask=()=>{
      props.onHide()

      dispatch(updateTaskInList({id,title,description}))
    }
    
    useEffect(()=>{
      if(Object.keys(selectedTask).length !==0){
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)
        setId(selectedTask.id)
      }
     
    },[selectedTask])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal Task
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
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

            </Form>
        </Modal.Body>

        <Modal.Footer>

        <Button variant="primary" type="submit" onClick={(e)=>updateTask(e)}> Update Task </Button>

         <Button onClick={props.onHide}>Close</Button>

        </Modal.Footer>

      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;