'use strict'

const LASTFM_KEY = import.meta.env.VITE_LASTFM_KEY

const grabAlbumImageURL = async (artistName, albumName) => {
	const reqUrl = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LASTFM_KEY}&artist=${artistName}&album=${albumName}&format=json`

	const reqOptions = {
		method: 'GET',
		redirect: 'follow',
		cache: 'force-cache'
	}

	try {
		const res = await fetch(reqUrl, reqOptions)
		const resData = await res.json()
		return resData.album.image[2]['#text']
	} catch (err) {
		console.error('Error fetching album image URL - Check Params')
		console.error(err)
	}
}

const addImageURLToAlbums = async (albumList) => {
	const updatedAlbums = albumList.map(async album => {
		const albumImageURL = await grabAlbumImageURL(album.artist, album.album)
		return {
			artist: album.artist,
			album: album.album,
			imageUrl: albumImageURL
		}
	})

	const albumData = await Promise.all(updatedAlbums)
	return albumData
}

export {
	addImageURLToAlbums
}
