import { addImageURLToAlbums } from './apiCalls';
import { useState, useEffect } from 'react';

export function useAlbums(albumList) {
    const [difficulty, setDifficulty] = useState('easy');
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        let ignore = false;
        let albumSubset = albumList.slice(0, difficulty === 'easy' ? 8 : 16);

        async function fetchAlbums() {
            const albumData = await addImageURLToAlbums(albumSubset);
            if (!ignore) setAlbums(albumData);
        }

        fetchAlbums().catch(err => console.error(err));

        return () => { ignore = true };
    }, [difficulty, albumList]);

    return [albums, difficulty, setDifficulty];
}
