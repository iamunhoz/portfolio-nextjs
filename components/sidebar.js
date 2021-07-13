import Image from 'next/image'

export default function SideBar(props) {
  return (
    <div className='sidebar'>
      <div className='profilepic'>
        <Image
          src='/profilepic.png'
          alt='Profile picture of Ivã Munhoz'
          width={180}
          height={200}
          
        />
      </div>
      <h2 className='emphatic'>Ivã Munhoz</h2>
      <a className='text' href="mailto:iamunhoz@gmail.com">iamunhoz@gmail.com</a>
      <h3 className='emphatic'>About</h3>
      <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et voluptas ad dolor minima officiis facilis nulla maxime eos possimus non distinctio obcaecati at iusto, dignissimos ratione delectus cumque est maiores expedita ex. Voluptatum quod aspernatur distinctio consectetur, iure possimus commodi impedit optio neque sed! Dolorum atque, autem ut eos alias mollitia enim reiciendis tempore at corrupti qui possimus ullam velit aliquid deserunt veniam ipsum officiis vero sit est quam quidem ad molestiae. Reiciendis delectus odio deleniti sequi vitae illum perspiciatis esse ut, quos corrupti, natus quibusdam, nesciunt quaerat sapiente ipsum odit cumque eum fugiat enim quasi impedit corporis explicabo!</p>


      <style jsx>{`
        .sidebar {
          background-color: ${props.theme.background};;
        }
        .profilepic {
          padding: 12px 16px;
        }
        a {
          text-decoration: none;
          text-transform: uppercase;
        }
        .text {
          color: ${props.theme.text};
        }
        .emphatic {
          color: ${props.theme.emphasis};
        }
      `}</style>
    </div>
  )
}