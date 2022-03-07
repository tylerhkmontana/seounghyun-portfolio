import styles from '../styles/pages/Home.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
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
          <h1>Seounghyun Lee | Profile</h1>
          <p>This is a sample Text</p>
        </div>
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