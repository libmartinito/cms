import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"

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
    const conversions = [
        {
            currency: 'USD',
            value: '1.000',
            percentage: '0.00%'
        },
        {
            currency: 'EUR',
            value: '0.914',
            percentage: '0.18%'
        },
        {
            currency: 'JPY',
            value: '141.650',
            percentage: '-0.14%'
        },
        {
            currency: 'GBP',
            value: '0.780',
            percentage: '0.01%'
        },
        {
            currency: 'AUD',
            value: '1.457',
            percentage: '0.09%'
        },
        {
            currency: 'CAD',
            value: '1.321',
            percentage: '-0.19%'
        },
        {
            currency: 'CHF',
            value: '0.893',
            percentage: '0.01%'
        },
        {
            currency: 'PHP',
            value: '55.740',
            percentage: '-0.06%'
        },
    ]

    return (
        <div>
            <Card>
                <CardContent>
                    <div className="font-bold text-xl text-center py-2">Exchange</div>
                    <div className="flex flex-col gap-2">
                        {conversions.map((conversion, index)=>
                            <ExchangeItem key={conversion.currency} index={index} conversion={conversion} />
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ExchangeItems