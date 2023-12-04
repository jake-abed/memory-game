import { addImageURLToAlbums } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils/helpers';

function useAlbums(albumList, difficulty) {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        let ignore = false;
        let albumSubset = shuffleArray(albumList).slice(0, difficulty === 'easy' ? 8 : 16);

        async function fetchAlbums() {
            const albumData = await addImageURLToAlbums(albumSubset);
            if (!ignore) setAlbums(albumData);
        }

        fetchAlbums().catch(err => console.error(err));

        return () => { ignore = true };
    }, [albumList, difficulty]);

    return [albums, setAlbums];
}

export default useAlbums;