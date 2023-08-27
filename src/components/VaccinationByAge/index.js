// Write your code here
import './index.css'
import {ResponsiveContainer, Pie, PieChart, Legend, Cell} from 'recharts'

const vaccinationByAge = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="age-container">
      <h1 className="age-title">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={children}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default vaccinationByAge
