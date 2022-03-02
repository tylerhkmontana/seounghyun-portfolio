import styles from './styles/frame.module.scss'
import Image from 'next/image'
export default function frame({imgSrc, title}) {

    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.img}>
                    <Image 
                        src={imgSrc}
                        layout="fill"
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    )
    
}