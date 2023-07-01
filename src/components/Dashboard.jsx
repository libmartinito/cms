import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            label: 'Price',
            data: [36421, 34380, 32529, 36781, 34398, 30480],
            fill: false,
            borderColor: '#27272a',
            tension: 0.1,
        }
    ]
}

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Bitcoin'
        }
    }
}

const Dashboard = () => {
    return (
        <div className="my-8">
            <Card className="p-4">
                <CardContent>
                    <Line data={data} options={options} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard