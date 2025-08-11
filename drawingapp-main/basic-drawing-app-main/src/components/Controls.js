import React from 'react'
import { useStore } from '../store'
import './control.css'

export default function Controls({ shapeType, setShapeType }) {
  const {
    selectedId,
    shapes,
    updateShape,
    deleteShape,
    saveDrawing,
    loadDrawing,
  } = useStore()

  const selected = shapes.find((s) => s.id === selectedId)

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">🎨</span>
          <span className="title">Drawing App</span>
        </div>
        <div className="nav-right">
          <button className="save" onClick={saveDrawing}>Save</button>
          <button className="load" onClick={loadDrawing}>Load Last</button>
        </div>
      </nav>

      {/* Main UI below navbar */}
      <div className="main-ui">
        <div className="shape-selector">
          <label>Draw Your Shape:</label>
          <button className={shapeType === 'rectangle' ? 'active' : ''} onClick={() => setShapeType('rectangle')}>🟥</button>
          <button className={shapeType === 'circle' ? 'active' : ''} onClick={() => setShapeType('circle')}>⚪</button>
          <button className={shapeType === 'line' ? 'active' : ''} onClick={() => setShapeType('line')}>\</button>
          <button className={shapeType === 'triangle' ? 'active' : ''} onClick={() => setShapeType('triangle')}>🔺</button>
        </div>

        {/* Optional controls */}
        {selected && (
          <div className="removing-colors">
            {shapeType !== 'line' && (
              <div className="fill-color">
                <label>Fill Color:</label>
                <input
                  type="color"
                  value={selected.fillColor || '#ff0000'}
                  onChange={(e) =>
                    updateShape(selectedId, { fillColor: e.target.value })
                  }
                />
              </div>
            )}
            <button className="delete" onClick={() => deleteShape(selectedId)}>🗑️ Delete Shape</button>
          </div>
        )}
      </div>
    </>
  )
}
