import { useState, useEffect } from "react"
import Card from "../components/Card"
import Grid from "../components/Grid"
import Text from "../components/Text"
import Title from "../components/Title"
import { API_URL } from "../config"

export default function News() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_URL}/api/news`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.articles)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <Title>News</Title>
            <Text variant='title'>Daily News</Text>
            {isLoading ? <Text variant='description'>Loading...</Text> :
                <Grid>
                    {data.length > 0 && data.map(({ title, description, url, urlToImage }, i) => {
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
            }
        </>
    )
}
