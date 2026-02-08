import React, { useRef, useState, useEffect } from 'react'
import * as rv from 'rough-viz/dist/roughviz.umd.js'

let lastId = 0;

const generateId = prefix => `${prefix}${'' + (++lastId)}`

const wrap = rvComp => ({ prefix, width, height, ...props }) => {
  const ref = useRef()
  const [id] = useState(generateId(prefix || 'roughviz'))

  const containerStyle = {}
  if (width !== undefined && width !== null && width !== '') {
    containerStyle.width = typeof width === 'number' ? `${width}px` : width
  }
  if (height !== undefined && height !== null && height !== '') {
    containerStyle.height = typeof height === 'number' ? `${height}px` : height
  }

  useEffect(() => {
    const { current: node } = ref
    if (node && rvComp) {
      new rvComp({
        element: '#' + id,
        width,
        height,
        ...props
      })
    }
    return () => {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild)
        }
      }
    }
  }, [id, props, ref])

  return <div id={id} ref={ref} style={containerStyle} />
}

export const Bar = wrap(rv.Bar)
export const BarH = wrap(rv.BarH)
export const Donut = wrap(rv.Donut)
export const Pie = wrap(rv.Pie)
export const Scatter = wrap(rv.Scatter)
export const Line = wrap(rv.Line)
export const StackedBar = wrap(rv.StackedBar)
