import React from "react";
import './TodoItem.css'
import { GoChecklist } from "react-icons/go";
import { GoX } from "react-icons/go";
function TodoItem(props) {

     return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
                 <GoChecklist />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>
                 <GoX/>
            </span>
        </li>
    );
    
}

export {TodoItem};