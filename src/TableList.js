import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import  MyVerticallyCenteredModal from './ModalTask'


import { useSelector, useDispatch } from "react-redux";
import { setselectedTask,removeTaskFromList } from './SlicePage';


function TableList(){

  const {taskList}= useSelector((state)=>state.tasks)

  const dispatch=useDispatch()

  const updateTask=(task)=>{
      console.log("Task Update");
      setModalShow(true)
      dispatch(setselectedTask(task))
      console.log(task);

  }
  const deleteTask=(task)=>{
    dispatch(removeTaskFromList(task))
    console.log("Task Deleted");
  }

  const [modalShow, setModalShow] = useState(false);
  
    return(
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Task Description</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {
          taskList && taskList.map((task,index)=>{
              return(
                              
                <tr key={task.id}>
                    <td>{index+1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                  <td>
                      <Button variant="primary" className='mx-3' onClick={()=>updateTask(task)} >
                          <i className="bi bi-pencil-square"></i>
                      </Button>

                      <Button variant="primary" onClick={()=>deleteTask(task)}>
                          <i className="bi bi-trash3-fill"></i>
                          
                      </Button>
                
                  </td>
                  </tr>
                )
          })
        }

        
        <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

      </tbody>
    </Table>
        </div>
    )
}
export default TableList;