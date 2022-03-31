import { useState, useEffect } from 'react';

export default function Loading() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    return (
        <header>
            {loading ? <h1>Loading...</h1> : <h1>Test component loaded succesfully.</h1>}
        </header>
    )
}
