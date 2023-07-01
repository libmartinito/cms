import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import conversions from "../../data/conversions"

const ExchangeItem = (props) => {
    const { conversion, index } = props
    const { currency, value, percentage } = conversion

    return (
        <Stack className={`${index % 2 === 0 ? 'bg-neutral-50' : ''}`}>
            <div className="flex gap-2 justify-between py-2 px-4">
                <div>{currency}</div>
                <div>{value}</div>
                <div>{percentage}</div>
            </div>
        </Stack>
    )
}

const ExchangeItems = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <div className="font-bold text-xl text-center py-2">Exchange</div>
                    <div className="flex flex-col gap-2">
                        {conversions.map((conversion, index) =>
                            <ExchangeItem key={conversion.currency} index={index} conversion={conversion} />
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ExchangeItems