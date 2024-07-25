import React from 'react'
import '../css/App.css'
import { CounterGame } from './CounterGame'
import EventsList from './FlexBox'

export default function App() {
  return (
    <>
      <CounterGame />
      <EventsList />
    </>
  )
}
