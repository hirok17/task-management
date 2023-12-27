import axios from "axios";
import { useEffect, useState } from "react";

const ManageTask = () => {
    const [tasks, setTasks]=useState([]);
    useEffect(()=>{
        axios.get('https://task-server-silk.vercel.app/alltask')
        .then(res=>{
            setTasks(res.data);
        })
    },[])
    return (
         <section>
            <div className="container mx-auto px-5 mt-10 grid grid-cols-3 gap-4 ">
                 <div className="border">
                    <h2 className="text-center text-white text-2xl font-semibold py-2 bg-[#651DFF] rounded-lg">To-do Task</h2>
                    <div className="space-y-4 mt-3">
                        {
                            tasks?.map(task=><>
                            <div className="border border-[#F51F7E] rounded-lg pl-2">
                                <h3>{task.title}</h3>
                                <p>Deadline:{task.deadline}</p>
                                <p>Priority:{task.Priority}</p>
                            </div>
                            </>)
                        }
                    </div>
                 </div>
                 <div>
                 <h2 className="text-center text-white text-2xl py-2 font-semibold bg-[#009DFF] rounded-lg">Ongoing task</h2>
                 </div>
                 <div>
                 <h2 className="text-center text-white text-2xl py-2 font-semibold bg-[#F51F7E] rounded-lg">Completed Task</h2>
                 </div>
            </div>
         </section>
    );
};

export default ManageTask;