import styles from '../styles/pages/Home.module.scss'
import Nav from '../components/nav'
import { readDir } from '../lib/fileService'
 

export default function Home({ portfolios }) {
  return (
    <>
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
          {
            portfolios.map((project, i) => <div key={i} className={styles.project}>
              <div className={styles.frame}><img src={`/portfolios/${project.title}/${project.images[0]}`}/></div>
              <p>{project.title}</p>
              </div>)
          }
        </div>
     
        <div id="about" className={styles.profile}>
          <h1>Seounghyun Lee | Profile</h1>
          <p>This is a sample Text</p>
        </div>
{/* 
        <div class="btn-group">
          <button>Copy</button>
          <button>Paste</button>
          <button>Cut</button>
        </div> */}
      </div>
    </>
  )
}

export async function getServerSideProps() {
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