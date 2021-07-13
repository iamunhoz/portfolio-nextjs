import {useState} from 'react'
import Head from 'next/head'
import TopBar from './topbar'
import SideBar from './sidebar'
import darkTheme from './dark-colors'
import lightTheme from './light-colors'


export default function Layout({children}) {
  // Dark/Light Mode logic
  const [colors, setColors] = useState(darkTheme)
  const [isDarkEnabled, setIsDarkEnabled] = useState(true)
  

  function toggleLights () {
    if (isDarkEnabled) {
      setColors(lightTheme)
      setIsDarkEnabled(false)
    } else {
      setColors(darkTheme)
      setIsDarkEnabled(true)
    }
  }
  
  return (
  <div>
    <Head>
      <title>Ivã Munhoz's Porfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopBar theme={colors} setTheme={toggleLights} isDark={isDarkEnabled}/>
    <div className='contentBox'>
      <SideBar theme={colors}/>
      <div className='actualContent'>{children}</div>
    </div>
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .contentBox {
          display: grid;
          grid-template-columns: 1fr 4fr;
          background-color: ${colors.background};
        }

        .actualContent {
          margin: 2rem 2rem;
          background-color: ${colors.surface};
        }
      `}
    </style>
  </div>)
}