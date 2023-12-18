import React from "react";

import { useSelector } from "react-redux";

function Header(){

    const {taskList}=useSelector((state)=>state.tasks)
    console.log(taskList);

    return(
        <div>
            <h1 className="head-style text-center my-4">Task</h1>
            <p className="text-center ">{`Currently ${taskList.length} task Pending`}</p>
        </div>
    )
}
export default Header;