import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import {Provider} from 'react-redux'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
      <AddTodo/>
      <Todos/>
    </Provider>
)
