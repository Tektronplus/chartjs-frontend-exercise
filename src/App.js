import "./App.css";
import DonutChart from "./components/donut-chart";
import JsonStations from './data/stations.json'

function App() {
  return (
    <div>
      <DonutChart dataJSON={JsonStations}/>
    </div>
  );
}

export default App;
