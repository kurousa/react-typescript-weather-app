import { useState } from "react"

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
}
export default function Form({ setCity, getWeather}: FormProps) {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="City Name"
        onChange={e => setCity(e.target.value)} />

      <button type="submit">Get Weather</button>
    </form>
  )
}
