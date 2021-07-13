import Link from 'next/link'
import Image from 'next/image'

export default function TopBar(props) {
  return (
    <div className='topbar'>
      <span>Ivã Munhoz</span>
      
      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/projects'>
        <a>projects</a>
      </Link>
      
      <Link href='/aboutme'>
        <a>About Me</a>
      </Link>
      
      <Link href='/resume'>
        <a>Resume</a>
      </Link>
      
      <Link href='/contact'>
        <a>Contact</a>
      </Link>

      <button 
        onClick={props.setTheme}
        className='toggleLights'
      >
        <Image
          src="/lightdarktoggle.png"
          alt="button to switch between Light and Dark Mode"
          width={20}
          height={20}
        />
      </button>

      <style jsx>{`
        a {
          text-decoration: none;
          text-transform: uppercase;
          color: ${props.theme.text};
        }

        .topbar {
          width: 100%;
          height: 5rem;
          background-color: ${props.theme.surface};
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}