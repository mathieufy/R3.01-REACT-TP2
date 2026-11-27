import StatBars from "./components/StatBars.jsx";
import './App.css'

export default function App() {
  return <StatBars stats={[
  {
    name: "John",
    current: "15",
    max: "20",
    type: "stamina"
  },
  {
    name: "Mathieu",
    current: "20",
    max: "20",
    type: "hp"
  },

  ]}
  />

}