import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../global/GState";

export const TaskList = () => {
    const { tasks, deleteTask, toggleTaskDone } = 
    React.useContext(GlobalContext);

    return (
        <React.Fragment>
        {tasks.length > 0 ? (
            <main>
            {tasks.map((task) => (
                <aside key={task.id}>
                    <section className="text-left">
                        <h1>{task.title}</h1>
                        <h6>{task.id}</h6>
                        <p>{task.description}</p>
                        <button 
                            onClick={() => toggleTaskDone(task.id)}
                            >{task.done ? "Undone" : "Done"}
                        </button>
                        <div>
                            <Link
                                to={`/edit/${task.id}`}
                                >Edit   
                            </Link>
                            <button
                                onClick={() => deleteTask(task.id)}
                                >Delete
                            </button>
                        </div>
                    </section>
                </aside>
            ))}
            </main>
        ) : (
            <p>No Tasks yet</p>
        )}
        </React.Fragment>
    );
};



