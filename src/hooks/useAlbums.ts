import { addImageURLToAlbums } from '../utils/apiCalls.js'
import { useState, useEffect } from 'react'
import { Album } from '../utils/types.ts'

function useAlbums(albumSubset: Array<Album>) {
    const [albums, setAlbums] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false

        async function fetchAlbums() {
            const albumData = await addImageURLToAlbums(albumSubset) as Array<Album>
            //@ts-ignore
            if (!ignore) setAlbums(albumData)
        }

        fetchAlbums().catch(err => console.error(err))

        setTimeout(() => setLoading(false), 1000);

        return () => { ignore = true }
    }, [albumSubset])

    return [albums, loading, setLoading]
}

export default useAlbums
