import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import 'chartjs-adapter-date-fns'

Chart.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = (props) => {
  const { tokenPriceData, selectedTokenName } = props

  const data = {
    datasets: [
      {
        label: 'Price',
        data: tokenPriceData,
        fill: false,
        borderColor: '#27272a',
        tension: 0.1,
      }
    ]
  }

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM yyyy',
          },
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Price'
        }
      }
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: selectedTokenName
      }
    }
  }

  return (
    <div className="my-8">
      {tokenPriceData &&
        <Card className="p-4">
          <CardContent>
            <Line data={data} options={options} />
          </CardContent>
        </Card>
      }
    </div>
  )
}

export default Dashboard