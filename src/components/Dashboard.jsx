import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { getTokenPriceRangeHistory } from "../services/tokens";
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

const Dashboard = () => {
    const [tokenPriceData, setTokenPriceData] = useState([])

    useEffect(() => {
        const fetchTokenPriceData = async () => {
            const tokenPriceRangeHistory = await getTokenPriceRangeHistory()
            const tokenPriceData = []
            for (const tokenPrice of tokenPriceRangeHistory) {
                const date = new Date(tokenPrice[0])
                const price = tokenPrice[1]
                tokenPriceData.push({ x: date, y: price })
            }
            setTokenPriceData(tokenPriceData)
        }
        fetchTokenPriceData()
    }, [])

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
                text: 'Bitcoin'
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