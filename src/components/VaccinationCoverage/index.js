// Write your code here
import './index.css'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

const VaccinationCoverage = props => {
  const {children} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${number.toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coverage-container">
      <h1 className="coverage-title">Vaccination Coverage</h1>
      <ResponsiveContainer height={300} width={1000}>
        <BarChart
          data={children}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend />
          <Bar dataKey="dose_1" name="dose1" fill="#2d87bb" barSize="20%" />
          <Bar dataKey="dose_2" name="dose2" fill=" #f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
