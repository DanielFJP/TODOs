import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmplyTodos } from "../EmplyTodos";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { todoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateToButton";
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";

function AppUi() { 
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
            
        
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

            <TodoCounter/>
            <TodoSearch />
            
            
            <TodoList>
                
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmplyTodos/>}
                {/*error && <p className="principio">Hubo un error</p>}
                {loading && <p className="container">Cargando</p>}
    {(!loading && !searchedTodos.length) && <p className="principio">¡Crea tu primer TODO!</p>*/}

                        {searchedTodos.map(todo => (    //aqui se itera por cada elemnto que halla en el array de todos
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                   <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
            setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}
            


export { AppUi };