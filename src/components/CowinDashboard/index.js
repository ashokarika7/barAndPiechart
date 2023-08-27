// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiConstantStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class CowinDashboard extends Component {
  state = {
    last7DaysVaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
    apiStatus: apiConstantStatus.initial,
  }

  componentDidMount() {
    this.getTheVaccinationResults()
  }

  getTheVaccinationResults = async () => {
    this.setState({apiStatus: apiConstantStatus.pending})

    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()

      this.setState({
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
        apiStatus: apiConstantStatus.success,
      })
    } else {
      this.setState({apiStatus: apiConstantStatus.failure})
    }
  }

  renderSuccessView = () => {
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = this.state

    return (
      <div className="co-win-container">
        <div className="img-logo-container">
          <img
            className="img-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <p className="logo-title">Co-WIN</p>
        </div>
        <h1 className="co-win-title">CoWin vaccination in India</h1>
        <VaccinationCoverage>{last7DaysVaccination}</VaccinationCoverage>
        <VaccinationByGender>{vaccinationByGender}</VaccinationByGender>
        <VaccinationByAge>{vaccinationByAge}</VaccinationByAge>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        className="failure-img"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1 className="failre-title">Something went wrong</h1>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstantStatus.success:
        return this.renderSuccessView()
      case apiConstantStatus.pending:
        return this.renderLoader()
      case apiConstantStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default CowinDashboard
