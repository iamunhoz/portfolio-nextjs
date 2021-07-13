import Image from 'next/image'

const styles = {
  container: {
    width: '20rem',
    height: '700px',
    backgroundColor: '#ddd',
    border: '1px solid #ccc'
  }
}

export default function SideBar() {
  return (
    <div style={styles.container}>
      <Image
        src='/profilepic.png'
        alt='Profile picture of Ivã Munhoz'
        width={180}
        height={200}
      />
      <h2>Ivã Munhoz</h2>
      <a href="mailto:iamunhoz@gmail.com">iamunhoz@gmail.com</a>
      <h3>About</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et voluptas ad dolor minima officiis facilis nulla maxime eos possimus non distinctio obcaecati at iusto, dignissimos ratione delectus cumque est maiores expedita ex. Voluptatum quod aspernatur distinctio consectetur, iure possimus commodi impedit optio neque sed! Dolorum atque, autem ut eos alias mollitia enim reiciendis tempore at corrupti qui possimus ullam velit aliquid deserunt veniam ipsum officiis vero sit est quam quidem ad molestiae. Reiciendis delectus odio deleniti sequi vitae illum perspiciatis esse ut, quos corrupti, natus quibusdam, nesciunt quaerat sapiente ipsum odit cumque eum fugiat enim quasi impedit corporis explicabo!</p>


      <style jsx>{`
        a {
          text-decoration: none;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}