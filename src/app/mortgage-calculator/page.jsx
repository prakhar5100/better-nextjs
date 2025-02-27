import MortgageCalculator from '../../ui/MortgageCalculator'
import PaymentBreakDown from '@/ui/PaymentBreakDown'
import {MortgageProvider} from '../../contexts/MotgageProvider'

export default function Page() {
    return (
        <MortgageProvider>
        <div>
        <MortgageCalculator /> 
        <PaymentBreakDown />
        </div>
        </MortgageProvider>
    )
}