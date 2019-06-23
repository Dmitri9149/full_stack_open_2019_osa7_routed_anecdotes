import React from 'react'
import AnecdoteList from './AnecdoteList'
import About from './About'
import CreateNew from './CreateNew'
import Anecdote from './Anecdote'

import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

const Menu = (props) => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
    <Router>
      <div>
        <div>
          <Link style={padding} to="/">anecdotes</Link>
          <Link style={padding} to="/create">create</Link>
          <Link style={padding} to="/about">about</Link>
        </div>
        <Route exact path="/" render={() => <AnecdoteList anecdotes = {props.anecdotes}/>} />
        <Route path="/create" render={() => <CreateNew addNew = {props.addNew}/>} />
        <Route path="/about" render={() => <About />} />
      </div>
    </Router>
  </div>
  )
}

export default Menu