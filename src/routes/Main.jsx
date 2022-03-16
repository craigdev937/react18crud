import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../containers/TaskForm";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/add" element={<TaskForm />} />
                <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


