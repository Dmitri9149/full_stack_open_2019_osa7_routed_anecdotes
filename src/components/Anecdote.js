import React from 'react'
const Anecdote = ({ anecdote }) => (
  <div>
    <h2>{anecdote.content}</h2>
    <div><strong>{`has ${anecdote.votes} votes`}</strong></div>
    <div><strong>{`for more info see : `}</strong></div>
  </div>
)

export default Anecdote