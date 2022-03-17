import React from "react";
import { v4 } from "uuid";
import { actionTypes } from "./actionTypes";
import { Reducer } from "./Reducer";

const initialState = {
    tasks: [
        {
            id: "1",
            title: "Wednesday",
            description: "Comic Book Day!",
            done: false,
        },
        {
            id: "2",
            title: "Thursday",
            description: "Tomorrow is Workshop",
            done: false
        }
    ]
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = 
    React.useReducer(Reducer, initialState);

    function createTask(task) {
        dispatch({
            type: actionTypes.CREATE_TASK,
            payload: {
                ...task,
                id: v4(),
                done: false
            },
        })
    };

    function updateTask(updatedTask) {
        dispatch({
            type: actionTypes.UPDATE_TASK,
            payload: updatedTask,
        })
    };

    function deleteTask(id) {
        dispatch({
            type: actionTypes.DELETE_TASK,
            payload: id
        })
    };

    function toggleTaskDone(id) {
        dispatch({
            type: actionTypes.TOGGLE_TASK_DONE,
            payload: id,
        })
    };

    return (
        <GlobalContext.Provider
            value={{
                tasks: state.tasks,
                createTask,
                updateTask,
                deleteTask,
                toggleTaskDone
            }}
        >
            { children }
        </GlobalContext.Provider>
    );
};




