import styles from './styles/nav.module.scss'


export default function Nav() {
    return(
        <div className={styles.nav}>
            <h2>Seounghyun Jacob Lee</h2>
            <div className={styles.menu_container}>
                <a href="#work"><span>work</span></a>
                <a href="#about"><span>about</span></a>
            </div>
        </div>
    )
}