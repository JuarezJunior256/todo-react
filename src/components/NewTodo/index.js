import React, {useState} from 'react'
import PropTypes from 'prop-types'

import './style.css'

const NewTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState('')

  const erase = () => {
    setValue("")
  }
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onKeyDown = (event) => {
    if (event.which === 13) {
      if(onNewTodo) {
        onNewTodo(value)
        erase()
      }
    } else if (event.which === 27) {
      erase()
    }
  }
  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

// eslint-disable-next-line react/no-typos
NewTodo.PropTypes = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo
