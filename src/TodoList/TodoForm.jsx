import React,{ useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');

    const handleChange=(e)=>{          //to handle change in form input (when user is typing)
        setValue(e.target.value);     //e.target gives the value of current value the user is typing
    }
    const handleSubmit =(e)=>{
        e.preventDefault();            //to prevent DOM from reloading the page
        if(!value)
            return
            addTodo(value)
            setValue('');           //set the value to be empty again to get ready for next input
        }
    return (
        <div>
            
        </div>
    )
}

export default TodoForm
