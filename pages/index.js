import styles from '../styles/pages/Home.module.scss'
import Nav from '../components/nav'


export default function Home() {
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
          <h1>Gallery</h1>
          <p>This is where my works will be presented</p>
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
