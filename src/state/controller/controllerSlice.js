import _ from 'lodash'



const initialState = {
    isConnected: false,
    events: {
        update_state: {}
    },
  }

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'WS_CONNECT': {
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        }
        case 'WS_MESSAGE': {
            return Object.assign({}, state, {
                todos: state.todos.concat({
                    id: action.id,
                    text: action.text,
                    completed: false
                })
            })
        }
        case 'WS_DISCONNECT': {
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if (todo.id !== action.id) {
                        return todo
                    }

                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                })
            })
        }
        case 'EDIT_TODO': {
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if (todo.id !== action.id) {
                        return todo
                    }

                    return Object.assign({}, todo, {
                        text: action.text
                    })
                })
            })
        }
        default:
            return state
    }
}