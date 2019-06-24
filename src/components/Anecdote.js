import React from 'react'
const Anecdote = ({ anecdote }) => (
  <div>
    {console.log('anecdote is called')}
    <h2>{anecdote.content}</h2>
    <div><strong>{`has ${anecdote.votes} votes`}</strong></div>
    <div><strong>
      for more info see : 
      <a href = {anecdote.info} > {anecdote.info} </a>
    </strong></div>
  </div>
)

export default Anecdote