import '@/styles/globals.css'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
