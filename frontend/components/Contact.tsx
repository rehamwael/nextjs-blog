import styles from "../styles/Contact.module.css";

const Contact = () => {
    return(
        <div id="Contact" className={styles.contactContainer}>
            <div className="">
                <h2>Hello ...</h2>
                <h3>Just Keep it simple! and reach me out .. :')</h3>
                <p>Email: <a href="mailto:habbasreham@outlook.com">habbasreham@outlook.com</a></p>
                <p>Social Media: <a href="https://www.linkedin.com/in/reham-habbas-614506127/" target="_blank">LinkedIn</a> / <a href="https://twitter.com/rehamhabbas" target="_blank">Twitter</a> / <a href="https://www.instagram.com/rehamhabbasdaily/" target="_blank">Instagram</a> / <a href="https://github.com/rehamwael" target="_blank">Github</a></p>
            </div>
        </div>
    )
}

export default Contact;