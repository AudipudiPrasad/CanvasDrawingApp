import React, { useState } from 'react'
import Canvas from './components/Canvas'
import Controls from './components/Controls'

function App() {
  const [shapeType, setShapeType] = useState('rectangle')

  return (
    <div style={{ padding: '1rem' }}>
      <Controls shapeType={shapeType} setShapeType={setShapeType} />
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Canvas selectedShapeType={shapeType} />
      </div>
    </div>
  )
}

export default App
