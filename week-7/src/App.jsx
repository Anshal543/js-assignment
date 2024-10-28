import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

const App = () => {
  return (
    <div>
      <Count />
    </div>
  )
}

export default App

function Count(){
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}



function CountRenderer(){
  const count  = useRecoilValue(countAtom)
  return (
    <div>
      <b>{count}</b>
      <EventCountRenderer />
    </div>
  )
}

function EventCountRenderer(){
  const isEven  = useRecoilValue(evenSelector)
  console.log("event count renderer re-rendered")
  return (
    <div>
      <b>{isEven?"it is even":null}</b>
    </div>
  )
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  console.log("buttons re-rendered")
  return (
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Increment</button>
      <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
    </div>
  )
}
