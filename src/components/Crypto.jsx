import ExchangeItems from "./crypto/ExchangeItems"
import TokenItems from "./crypto/TokenItems"

export default Crypto = () => {
    return (
        <div className="flex text-neutral-800 my-8">
            <ExchangeItems />
            <TokenItems />
        </div>
    )
}