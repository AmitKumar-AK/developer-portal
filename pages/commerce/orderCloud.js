import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const orderCloud = await getMarkdownData("orderCloud.md");

    return {
        props: {
            orderCloud,
        },
    };
}

export default function OrderCloud({ orderCloud }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Commerce - OrderCloud</title>
                <meta name="description" content="Commerce with OrderCloud" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Commerce - OrderCloud
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>

                    <div className={styles.productCategoryCardLarge}>
                        <ReactMarkdown>{orderCloud.markdown}</ReactMarkdown>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>General Commerce Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Commerce things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>

                </div>
            </main>

            <Footer />

        </div>)
}

