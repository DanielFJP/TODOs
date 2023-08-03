import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS-V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length; // !! nos dice si una funcion es verdadera o (!)falsa 
    const totalTodos = todos.length;                                     // length cuanto contenido hay


    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();  //text en minuscula
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);              // INCLUDES PARA SABER SI UNA PARTE DEL TEXTO SI SE INCLUYE ALO QUE SE ESTA BUSCANDO
        })
    }

    //METODO PARA ELIMINAR Y MARCAR COMO COMPLETADOS TODOS


    const addTodo = (text) => {
        const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text,
        });
        saveTodos(newTodos);
  };
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);                        //splice para borrar elementos
        saveTodos(newTodos);
    };

  // efectos react 

    /*console.log('Render (antes del use effect)');
  
    React.useEffect(() => {      //dependiendo la condicion se ejecuta o no la pagina
      
      console.log('use effect');
     
    },[totalTodos]);
    
    console.log('Render (despues del use effect)');*/


    return (
        <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
        searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
        }}>                   
          {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

