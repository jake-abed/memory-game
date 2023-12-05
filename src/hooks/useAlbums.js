import { addImageURLToAlbums } from '../utils/apiCalls.js'
import { useState, useEffect } from 'react'
import { shuffleArray } from '../utils/helpers.js'

function useAlbums(albumList, difficulty, setLoading) {
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        let ignore = false
        const albumSubset = shuffleArray(albumList).slice(0, 6)

        async function fetchAlbums() {
            const albumData = await addImageURLToAlbums(albumSubset)
            if (!ignore) setAlbums(albumData)
        }

        fetchAlbums().catch(err => console.error(err))

        setLoading(false)

        return () => { ignore = true }
    }, [albumList, difficulty])

    return [albums, setAlbums]
}

export default useAlbums
