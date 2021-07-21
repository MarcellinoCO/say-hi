import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function SayHiApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default SayHiApp
