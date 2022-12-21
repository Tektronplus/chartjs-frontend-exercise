import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import _ from "lodash";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ dataJSON }) => {
  //To group stations by number of chargers
  var groupByChargers = _.groupBy(dataJSON, "chargers.length");

  //To get the labels of chart
  var labelsCharger = _.keys(groupByChargers);

  //To convert object to array, getting values
  var valuesCharger = _.values(groupByChargers);

  //Counting the length of each array
  var lengthCharger = valuesCharger.map((arr) => _.size(arr));

  const data = {
    labels: labelsCharger,
    datasets: [
      {
        label: "My First Dataset",
        data: lengthCharger,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DonutChart;
