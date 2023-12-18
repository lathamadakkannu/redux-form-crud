import { createSlice } from '@reduxjs/toolkit'


const initialState={
    taskList:[],
    selectedTask:{}
}

const tasksSlice = createSlice(
    {
        name:'tasksSlice',
        initialState,
        reducers: {

            addTaskToList:(state,action)=>{
                const id=Math.random*100
                let task={...action.payload,id}
                state.taskList.push(task)
            },

            removeTaskFromList:(state,action)=>{
                //state.taskList=state.taskList.filter((task)=>task.id !== action.payload.id)
                state.taskList=state.taskList.filter((task)=>task.title !== action.payload.title)
            },

            updateTaskInList:(state,action)=>{
                // state.taskList=state.taskList.map((task)=>
                //     task.id === action.payload.id ? action.payload :task
                state.taskList=state.taskList.map((task)=>
                    task.title === action.payload.title ? action.payload :task
                // state.taskList=state.taskList.map((task)=>
                //     task.description === action.payload.description ? action.payload :task
                )
            },

            setselectedTask:(state,action)=>{
                    state.selectedTask=action.payload
            }

        }

    })

  export const { addTaskToList,removeTaskFromList,updateTaskInList,setselectedTask }=tasksSlice.actions

 export default tasksSlice.reducer;