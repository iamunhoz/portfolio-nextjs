import Layout from '../components/layout'

export default function Projects() {
  return (
    <Layout className="container">
      <main>
        <h1 className="title">
          Check out some of my projects
        </h1>
        <p className="description">
          Applications, Landing Pages and Games
        </p>

       
        <div className="grid">
          <a href="https://noam.netlify.app/" className="card">
            <h3>Noam &rarr;</h3>
            <p>An educational tool to generate Simplified Syntax Trees.</p>
          </a>

          <a href="https://agora-social.herokuapp.com/" className="card">
            <h3>Agora Social Media &rarr;</h3>
            <p>A social media web app for tight-knit communities</p>
          </a>

          <a
            href="#"
            className="card"
          >
            <h3>EnglishToCode() &rarr;</h3>
            <p>Natural Language topics through the lenses of coding</p>
          </a>

          <a
            href="#"
            className="card"
          >
            <h3>Little Apps &rarr;</h3>
            <p>
              Snake, <br/> Drummer Hero
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: '#ccc';
          color: '#eee';
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #bbb;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color: #aaa;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .toggleLights {
          background-color: rgba(0,0,0,0);
          border: 0px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  )
}
