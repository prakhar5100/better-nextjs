import './globals.css'
import { Poppins } from 'next/font/google'

const poppins  = Poppins({
    weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style : "normal",
    subsets : ["latin"],
    variable : '--font-poppins'
})

export default function RootLayout({children}) {

    return (
        <html lang="en" className={poppins.variable}>
            <body> {children} </body>
        </html>
    )
}