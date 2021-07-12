import lightTheme from './light-colors'
import darkTheme from './dark-colors'

const styles = {
  container: {
    width: '100%',
    height: '5rem',
    backgroundColor: '#ddd'
  }
}

export default function TopBar() {
  return (
    <div style={styles.container} className='topbar'>topbar</div>
  )
}