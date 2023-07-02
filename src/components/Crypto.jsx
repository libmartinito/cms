import { useState, useEffect } from "react"
import ExchangeItems from "./crypto/ExchangeItems"
import TokenItems from "./crypto/TokenItems"
import Dashboard from "./crypto/Dashboard"
import { getTokenPriceRangeHistory } from "../services/tokens"

export default Crypto = () => {
    const [selectedToken, setSelectedToken] = useState(null)
    const [selectedTokenName, setSelectedTokenName] = useState(null)
    const [tokenPriceData, setTokenPriceData] = useState([])

    useEffect(() => {
        fetchTokenPriceData(selectedToken)
    }, [])

    const fetchTokenPriceData = async (token) => {
        const tokenPriceRangeHistory = await getTokenPriceRangeHistory(token)
        const tokenPriceData = []
        for (const tokenPrice of tokenPriceRangeHistory) {
            const date = new Date(tokenPrice[0])
            const price = tokenPrice[1]
            tokenPriceData.push({ x: date, y: price })
        }
        setTokenPriceData(tokenPriceData)
    }

    const handleSelectedTokenChange = (token, name) => {
        setSelectedToken(token)
        setSelectedTokenName(name)
        fetchTokenPriceData(token)
    }

    return (
        <div>
            <div className="flex text-neutral-800 my-8">
                <ExchangeItems />
                <TokenItems handleSelectedTokenChange={handleSelectedTokenChange} />
            </div>
            <Dashboard
                tokenPriceData={tokenPriceData}
                selectedTokenName={selectedTokenName ? selectedTokenName : 'Bitcoin'}
            />
        </div>
    )
}