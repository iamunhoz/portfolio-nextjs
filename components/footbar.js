import Image from 'next/image'
import useState from 'react'

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

export default function FootBar() {
  return (
    <footer>
    <button 
      onClick={toggleLights}
      className='toggleLights'
    >
    <Image
      src="/lightdarktoggle.png"
      alt="button to switch between Light and Dark Mode"
      width={20}
      height={20}
    />
      </button>
   
  </footer>
  )
}