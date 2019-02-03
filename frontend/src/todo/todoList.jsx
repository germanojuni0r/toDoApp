import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton';
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className='tableActions'>
                    <IconButton style='success' icon='check'
                        onClick={() => props.markAsDone(todo)}
                        done={todo.done}></IconButton>
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.markAsPending(todo)}
                        done={!todo.done}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.remove(todo)}
                        done={!todo.done}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)