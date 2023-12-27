import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Tasks = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://task-server-silk.vercel.app/alltask', data)
        .then(res=>{
            if(res.data.insertedId){
                toast.success('Task add successfully');
                reset();
                
            }
            
        })
    };
    
    return (
        <section>
            <div className='w-[50%] mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <label className="label">
                        <span className="label-text">Task Name:</span>
                    </label>
                    <input type="text" placeholder="Task name" className='input input-bordered block w-full' {...register("title", {})} />
                    <label className="label">
                        <span className="label-text">Deadline:</span>
                    </label>
                    <input type="date" placeholder="Date" className='input input-bordered block w-full' {...register("deadline", {})} />
                    <label className="label">
                        <span className="label-text">Priority:</span>
                    </label>
                    <select className='input input-bordered block w-full' {...register("Priority")}>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                    </select>
                    <label className="label">
                        <span className="label-text">Description:</span>
                    </label>
                    <textarea className='input input-bordered block w-full' {...register("description", {})} />

                    <input className='btn btn-primary' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default Tasks;