import Card from "../components/Card"
import Grid from "../components/Grid"
import Text from "../components/Text"
import Title from "../components/Title"
import { API_URL } from "../config"

export default function News({ news }) {

    return (
        <>
            <Title>News</Title>
            <Text variant='title'>Daily News</Text>
            <Grid>
                {news.map(({ title, description, url, urlToImage }, i) => {
                    if (!urlToImage) return;
                    return (
                        <Card
                            key={i}
                            title={title}
                            description={description}
                            url={url}
                            imageUrl={urlToImage}
                        />
                    )
                })}
            </Grid>
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch(`${API_URL}/api/news`)
    const data = await res.json()

    return {
        props: {
            news: data.articles
        }
    }
}
