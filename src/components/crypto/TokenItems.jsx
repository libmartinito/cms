import { useState, useEffect } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { getTokenHistoryArr } from "../../services/tokens"

const TokenItem = (props) => {
    const { token } = props
    const { name, symbol, value } = token
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateStr = `${month}/${day}/${year}`

    return (
        <Card style={{ height: 'fit-content' }}>
            <CardContent>
                <div className="font-bold">{name}</div>
                <div className="text-sm font-light text-neutral-400">{symbol.toUpperCase()}</div>
                <div className="text-2xl font-bold py-2">${value.toFixed(2)}</div>
                <div className="text-sm font-light text-neutral-400">Last updated on {dateStr}</div>
            </CardContent>
        </Card>
    )
}

const TokenItems = () => {
    const [tokens, setTokens] = useState([])

    useEffect(() => {
        const fetchTokenHistoryArr = async () => {
            const tokenHistoryArr = await getTokenHistoryArr()
            const tokens = tokenHistoryArr.map(tokenHistory => {
                const { data } = tokenHistory
                const { id, name, symbol } = data
                return {
                    id,
                    name,
                    symbol,
                    value: data.market_data.current_price.usd,
                }
            })
            setTokens(tokens)
        }
        fetchTokenHistoryArr()
    }, [])

    return (
        <div className="flex flex-wrap max-w-fit gap-4 items-center justify-center">
            {tokens && tokens.map(token =>
                <TokenItem key={token.id} token={token} />
            )}
        </div>
    )
}

export default TokenItems