import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUi } from "./AppUi";

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },   //tareas pendientes
  { text: 'Tomar el curso', completed: false },
  { text: 'ir al gimnasio', completed: false },   //completed false por que la tarea no se ah completado
];



function App() {
  
  
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
