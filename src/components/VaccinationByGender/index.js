// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const vaccinationByGender = props => {
  const {children} = props
  const reversedList = [...children].reverse()

  return (
    <div className="gender-container">
      <h1 className="gender-title">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={reversedList}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Others" fill="#2cc6c6" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Male" fill="#f54394" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default vaccinationByGender
