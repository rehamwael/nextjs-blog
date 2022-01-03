import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
    return(
        <div id="About" className={styles.aboutContainer}>
            <div className={styles.dFlex}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src="https://res.cloudinary.com/maf/image/upload/v1640549387/full-image-reham_ubnpa0.jpg"
                    alt="Reham Habbas"
                    width={520}
                    height={650}
                />
                </div>
                <div className={styles.about}>
                    <h2>Front End Engineer | Full-Stack Developer</h2>
                    <p>I am Jordanian based in Amman, Computer Science Graduated from University of Jordan with GPA Very Good.</p><p> I am interested in web development, specially the front end field.</p>
                    <p>- Specialist on converting creative designs into a real website with modern CSS and Clear UI and good UX.</p>
                    <p>- Working with Modern FE technologies Angular 2+ Developer | TypeScript | ReactJS | VueJS | NuxtJs | Tailwind CSS | NodeJS | REST API’s</p>
                    <p>- A passionate full-stack developer that always seek to learn. Worked as Backend developer on PHP | Yii2 | WordPress | C# | .Net | Umbraco | Magento with E-commerce and Logistics background.</p>
                </div>

            </div>
        </div>
    )
}

export default About;