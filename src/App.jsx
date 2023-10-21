import { create } from 'zustand'

const useStore  = create (set => (
  { 
    count: 5, 
    increment: () => set(state => ({count: state.count + 1}))
  }
))

function App() {
  const { count, increment } = useStore()

  function onKeyDown(e) {
    e.preventDefault()
    if (e.keyCode === 13) {
      //A pulsado el enter
    }
  }

  return (
    <>
      <h1 onClick={increment} onKeyUp={onKeyDown}>
        Cuenta: {count}
      </h1>
    </>
  )
}

export default App
