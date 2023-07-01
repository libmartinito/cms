import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const TokenItem = (props) => {
    const { token } = props
    const { name, shorthand, value, change } = token
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateStr = `${month}/${day}/${year}`

    return (
        <Card style={{ height: 'fit-content' }}>
            <CardContent>
                <div className="font-bold">{name}</div>
                <div className="text-sm font-light">{shorthand}</div>
                <div className="text-xl font-bold">${value}</div>
                <div className="text-sm font-light">{change}%</div>
                <div className="text-sm font-light">Last updated on {dateStr}</div>
            </CardContent>
        </Card>
    )
}

const TokenItems = () => {
    const tokens = [
        {
            name: 'Bitcoin',
            shorthand: 'BTC',
            value: 30429.87,
            change: 0.10,
        },
        {
            name: 'Ethereum',
            shorthand: 'ETH',
            value: 1916.24,
            change: 0.02,
        },
        {
            name: 'Tether',
            shorthand: 'USDT',
            value: 0.99,
            change: -0.01,
        },
        {
            name: 'BNB',
            shorthand: 'BNB',
            value: 242.48,
            change: 0.5,
        },
        {
            name: 'USD Coin',
            shorthand: 'USDC',
            value: 0.99,
            change: 0.10,
        },
        {
            name: 'XRP',
            shorthand: 'XRP',
            value: 0.47,
            change: 0.10,
        },
    ]

    return (
        <div className="flex flex-wrap max-w-fit gap-2 p-8 items-center justify-center">
            {tokens.map(token =>
                <TokenItem key={token.name} token={token} />
            )}
        </div>
    )
}

export default TokenItems