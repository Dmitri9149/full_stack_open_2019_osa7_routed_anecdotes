import React from 'react'
import AnecdoteList from './AnecdoteList'
import About from './About'
import Create from './CreateNew'
import Anecdote from './Anecdote'

import {
  BrowserRouter as Router,
  Route, Link, Redirect
} from 'react-router-dom'

const Menu = ({anecdotes, addNew}) => {
  const padding = {
    paddingRight: 5
  }


  const anecdoteById = (id) =>
  anecdotes.find(a => a.id === id)

  console.log('props.anecdotes', anecdotes)

  return (
    <div>
    <Router>
      <div>
        <div>
          <Link style={padding} to="/">anecdotes</Link>
          <Link style={padding} to="/create">create</Link>
          <Link style={padding} to="/about">about</Link>
        </div>
        <Route exact path="/" render={() => <AnecdoteList anecdotes = {anecdotes}/>} />
        <Route exact path="/anecdotes/:id" render={({ match }) =>
          <Anecdote anecdote={anecdoteById(match.params.id)} />} />

        <Route path="/create" render={() => <Create addNew = {addNew}/>} />
        <Route path="/about" render={() => <About />} />



      </div>
    </Router>
  </div>
  )
}

export default Menu