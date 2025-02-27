'use client'

const { createContext, useContext, useState, Children, useEffect } = require("react")


const MortgageContext = createContext() 


export function MortgageProvider ({children}) {
    const [monthly, setMonthly] = useState({main : '', add : ''})
    const [values, setValues] = useState({
        homePrice: "200000",   
        downPayment: "189440", 
        zipCode: "11025", 
        interestRate: "6.5", 
        timePeriod: "30 years",
        taxes: "265",
        insurance: "132",
        hoa: "132",
        utilities: "100",
    });
    
    useEffect(() => {
        console.log("Updated Values", values)
        const calculateMortgage = () => {
            const totalPrincipal = parseFloat(values.homePrice) - parseFloat(values.downPayment) 
            const finalInterest = parseFloat(values.interestRate) / 1200 
            const finalTime = parseFloat(values.timePeriod.slice(0, 2)) * 12 

            const variable = (finalInterest * ((1 + finalInterest) ** finalTime)) / (((1 + finalInterest) ** finalTime) - 1) 
            const addition = parseInt(values.taxes) + parseInt(values.insurance) + parseInt(values.hoa) + parseInt(values.utilities)
            const finalMonthlyPayment = parseInt((totalPrincipal * variable) + addition).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 

            setMonthly((prev) => ({
                main : finalMonthlyPayment,
                initial : (variable * totalPrincipal).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
            })) 
            console.log(totalPrincipal, variable)

        }
        calculateMortgage()
    }, [values])

    return (
        <MortgageContext.Provider value={{values, setValues, monthly}}>
            {children}
        </MortgageContext.Provider>
    )
} 

export const useMortgage = () => useContext(MortgageContext)