import { Saira } from 'next/font/google'
import './globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const font = Saira({ 
  subsets: ['latin'],
  weight:["100","200","300","400","500","600","700","800","900"]
})

export const metadata = {
  title: 'Student Form'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className} >{children}</body>
    </html>
  )
}
