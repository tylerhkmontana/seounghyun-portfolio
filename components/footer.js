import styles from './styles/footer.module.scss'


export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.sns_icons}>
                <a href='#'><img src='/facebook.png' /></a>
                <a href='#'><img src='/instagram.png' /></a>
                <a href='#'><img src='/linkedin.png' /></a>
            </div>
            <p>&copy; Copyright Seounghyun Lee. All Rights Reserved.</p>
            <p>Powered by <a className={styles.powered_by} href='https://github.com/tylerhkmontana'>tylerhkmontana</a></p>
        </div>
    )
}