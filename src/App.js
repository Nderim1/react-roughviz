import React from 'react'
import { Bar, Donut, Pie, StackedBar } from './lib'

export default function App() {
  return <>
    <h1>Fun with roughViz</h1>
    <div style={{
      display: 'flex',
      flex: 'wrap',
      order: 'row'
    }}>
      <Bar
        data='https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv'
        labels='flavor'
        values='price'
        title='hwllo this is'
      />
      <Donut data={{
        labels: ['Norths', 'South', 'East', 'West'],
        values: [40, 5, 8, 3]
      }} y1='deaths' y2='years' />
      <Pie
        data={{
          labels: ['Norths', 'South', 'East', 'West'],
          values: [30, 5, 8, 3]
        }}
        title='Regions'
        colors={['red', 'orange', 'blue', 'skyblue']}
        legend
        roughness={2}
        strokeWidth={1}
        height={550}
        width={300}
        fillStyle='dots'
      />
      <StackedBar
        data={[
          { month: 'Jan', A: 20, B: 5, C: 10 },
          { month: 'Feb', A: 25, B: 10, C: 20 },
          { month: 'March', A: 30, B: 50, C: 10 }
        ]}
        labels='month'
        title='Monthly Revenue'
      />
    </div>
  </>
}
