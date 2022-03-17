import { actionTypes } from "./actionTypes";

export const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        case actionTypes.UPDATE_TASK: {
            const updatedTask = action.payload;
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    updatedTask.done = task.done;
                    return updatedTask;
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks
            }
        };

        case actionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload)
            };

        case actionTypes.TOGGLE_TASK_DONE:
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks
            }

        default:
            return state;
    };
};




