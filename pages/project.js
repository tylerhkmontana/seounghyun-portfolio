import { useRouter } from "next/router"
import { readDir } from '../lib/fileService'

export default function Project({ images }) {
    const router = useRouter()
    const { project_title } = router.query

    console.log(images)

    return (
        <div>
            <h1>{project_title}</h1>
            {
                images.map(img => <p>{img}</p>)
            }
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const { project_title } = query
    const images =  await readDir(`/public/portfolios/${project_title}`)

    return {
        props: { images }
    }
}