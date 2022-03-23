import { readDir } from '../../lib/fileService'
import Link from 'next/link'
import styles from '../../styles/pages/Project.module.scss'

export default function Project({ images, project_title }) {
    return (
        <div>
            <Link href="/"><a className={styles.go_back_btn}>&larr; Go Back</a></Link>
            <div className={styles.container}>
                <h1>{project_title}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {
                    images.map((img, i) => <img key={i} src={`/portfolios/${project_title}/${img}`}/>)
                }
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const projects = await readDir('/public/portfolios')

    const paths = projects.map(prj => ({
        params: { title: prj }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const project_title = params.title
    console.log(project_title)
    const images = await readDir(`/public/portfolios/${project_title}`)

    return {
        props: {
            images, project_title
        }
    }
}

// export async function getServerSideProps({ query }) {
//     const { project_title } = query
//     const images =  await readDir(`/public/portfolios/${project_title}`)

//     return {
//         props: { images, project_title }
//     }
// }

