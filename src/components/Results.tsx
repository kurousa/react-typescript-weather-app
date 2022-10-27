type ResultsStateType = {
  result: {
    country: string,
    cityName: string,
    temprature: string,
    conditionText: string,
    icon: string
  }
}
export default function Results({ result }: ResultsStateType) {
  return (
    <div>
      {result.country && <div>{result.country}</div>}
      {result.cityName && <div>{result.cityName}</div>}
      {result.temprature && <div>{result.temprature} <span>℃</span></div>}
      {result.conditionText &&
        <div>
          <img src={result.icon} alt="icon" />
          <span>{result.conditionText}</span>
        </div>
      }
    </div>
  )
}
