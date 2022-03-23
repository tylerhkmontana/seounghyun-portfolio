import styles from '../styles/pages/Home.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'
import { readDir } from '../lib/fileService'
 

export default function Home({ portfolios }) {
  return (
    <>
    <Head>
      <title key="title">SH Jacob Lee | Portfolio</title>
    </Head>
    <Nav />
    <div className={styles.container}>

        <div className={styles.image}></div>
        <div className={styles.content}>
          <p className={styles.slogan}>IMPOSSIBLE &hArr; NOTHING</p>
          <p>
            Design is a great tool to make things that are impossible possible. <br></br>
            I am a graphic designer with the best tool in the industry.
          </p>
        </div>

        <div id="work" className={styles.gallery}>          
          <div className={styles.gallery_container}>
            {
                portfolios.map((project, i) => <div key={i} className={styles.project}>
                  <div className={styles.project_info}>
                    <h4>{project.title}</h4>
                    <p>this is a sample text for project description.</p>
                    <Link href={{ pathname: '/project', query: { project_title: project.title } }}><button>explore</button></Link>
                  </div>
                <img src={`/portfolios/${project.title}/${project.images[0]}`}/>
                  </div>)
              }
          </div>
        </div>
     
        <div id="about" className={styles.profile}>
          <img src="/user.png" />
          <h1>Seounghyun Lee</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await readDir('/public/portfolios')
  let portfolios = []
  res.forEach(async (project, i) => {
    portfolios.push({
      title: project,
      images: await readDir(`/public/portfolios/${project}`)
    })
  })
  return { props: { portfolios } }
}