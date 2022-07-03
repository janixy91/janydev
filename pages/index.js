import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={"home"}>
      <Head>
        <title>Maquetadora freelance react</title>
        <meta name="description" content="Janire Noguerol. Ayudo a sacar adelante tu proyecto adelantando la maquetación de las pantallas, en proyectos react." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"home__main"}>
        <div className="home__image-container">
          <img className="home__image" src="/yo.jpg" />
        </div>
        <div className="home__text-container">
          <div className="home__main-container">
            <h1 className="home__title">Maquetadora freelance React</h1>
            <h2 className="home__description">
              - Te ayudo a sacar adelante tu trabajo maquetando las pantallas de tu
              proyecto -
            </h2>
            <span className="home__subtitle">¿Cómo funciona?</span>
            <p>
              Envíame <a href="mailto:janire.ng@gmail.com">aquí </a>
              tus diseños, en un zeplin, un figma... y te enviaré un presupuesto
              y una fecha de entrega sin compromiso
            </p>{" "}
            <p>
              El resultado final será un{" "}
              <span className="keyword">Storybook </span>
              con las páginas que hemos acordado, perfectamente maquetadas y
              componetizadas. Uso <span className="keyword">Sass</span> y
              metodología <span className="keyword">BEM</span>.
            </p>
            <p>
              Si tienes unos estándares que quieres que siga házmelo saber en el
              correo
            </p>
            <div className="home__easy-container">
              <span className="home__easy-text">Fácil</span>
              <img className="home__happy-img" src="/caritafeliz.png" />{" "}
            </div>
          </div>
          <footer className={"home__footer"}>
            <img src="/react.png" />
            <img className="home__storybook-img" src="/storybook.png" />
            <img className="home__storybook-img-mobile"  src="/storybook-mobile.png" />
            <img src="/sass.png" />
          </footer>
        </div>
      </main>
    </div>
  );
}
