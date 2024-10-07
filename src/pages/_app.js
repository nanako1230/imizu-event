import Header from "./header";
import Fotter from "./fotter";

import '@/styles/main.css'
import '@/styles/eventdetail.css'
import '@/styles/header.css'
import '@/styles/accessinfo.css'
import '@/styles/poster.css'
import '@/styles/syoukai.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Fotter/>
    </>
  )
}
