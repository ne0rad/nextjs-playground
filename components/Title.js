import Head from "next/head";

export default function Title(props) {
    return (
        <Head>
            <title>{typeof props.children === 'string' ? props.children + ' - Next.js Playground' : 'Next.js Playground'}</title>
            <meta name="description" content="NextJS playground app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
