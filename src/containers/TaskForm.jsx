import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../global/GState";

const initialState = {
    id: "",
    title: "",
    description: ""
};

export const TaskForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = React.useState(initialState);
    const { tasks, createTask, updateTask } = 
    React.useContext(GlobalContext);

    const handleChange = (event) => {
        setTask({...task, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!task.id) {
            createTask(task);
        } else {
            updateTask(task);
        };
        navigate("/");
    };

    React.useEffect(() => {
        const taskFound = tasks.find(
            (task) => task.id === params.id);
        if (taskFound) {
            setTask({
                id: taskFound.id,
                title: taskFound.title,
                description:taskFound.description,
            });
        }
    }, [params.id, tasks]);

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <h2>
                    {task.id ? "update " : "Create "}
                    A Task
                </h2>
                <section>
                    <input 
                        autoFocus
                        type="text"
                        name="title"
                        placeholder="Write a title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <textarea 
                        rows="2"
                        name="description" 
                        placeholder="Write a description"
                        value={task.description}
                        onChange={handleChange}
                    />
                </section>
                <button>
                    {task.id ? "Update Task" : "Create Task"}
                </button>
            </form>
        </React.Fragment>
    );
};



