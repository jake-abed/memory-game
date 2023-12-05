import { addImageURLToAlbums } from '../utils/apiCalls.js'
import { useState, useEffect } from 'react'

function useAlbums(albumSubset) {
    const [albums, setAlbums] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false

        async function fetchAlbums() {
            const albumData = await addImageURLToAlbums(albumSubset)
            if (!ignore) setAlbums(albumData)
        }

        fetchAlbums().catch(err => console.error(err))

        setTimeout(() => setLoading(false), 1000);

        return () => { ignore = true }
    }, [albumSubset])

    return [albums, loading, setLoading]
}

export default useAlbums
