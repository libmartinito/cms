import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import tokens from "../../data/tokens"

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
    return (
        <div className="flex flex-wrap max-w-fit gap-2 p-8 items-center justify-center">
            {tokens.map(token =>
                <TokenItem key={token.name} token={token} />
            )}
        </div>
    )
}

export default TokenItems