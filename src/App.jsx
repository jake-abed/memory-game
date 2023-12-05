import './App.css';
import { useState } from 'react';
import useAlbums from './hooks/useAlbums';
import useGameState from './hooks/useGameState';
import { shuffleArray } from './utils/helpers';

const albumList = [
	{ artist: 'JPEGMAFIA & Danny Brown', album: 'Scaring the Hoes' },
	{ artist: 'Sprain', album: 'As Lost Through Collision' },
	{
		artist: 'Denzel Curry',
		album: 'Melt My Eyez, See Your Future',
	},
	{ artist: 'Herbie Hancock', album: 'Head Hunters' },
	{ artist: 'The Mars Volta', album: 'Frances the Mute' },
	{ artist: 'black midi', album: 'Hellfire' },
	{ artist: 'Charles Mingus', album: 'The Clown' },
	{ artist: 'The Weeknd', album: 'Dawn FM' },
	{ artist: 'The Armed', album: 'Only Love' },
	{ artist: 'Frank Zappa', album: 'Hot Rats' },
	{ artist: 'Andre 3000', album: 'New Blue Sun' },
	{ artist: 'Swans', album: 'The Glowing Man' },
	{ artist: 'Tkay Maidza', album: 'Sweet Justice' },
	{ artist: 'Sufjan Stevens', album: 'Javelin' },
	{ artist: 'Danny Brown', album: 'Quaranta' },
	{ artist: 'Black Country, New Road', album: 'Ants from Up There' },
	{ artist: 'Bjork', album: 'Volta' },
	{ artist: 'Oneohtrix Point Never', album: 'Again' },
	{ artist: 'Death Grips', album: 'Year of the Snitch' },
];

function App() {
	const [shuffledAlbums, setShuffledAlbums] = useState(
		shuffleArray(albumList).slice(0, 6)
	);
	const [gameState, setGamestate] = useGameState();
	const [albums, loading, setLoading] = useAlbums(shuffledAlbums);

	function handleAlbumClick(e) {
		const album = e.target.alt;
		console.log(gameState.selectedAlbums);
		if (gameState.selectedAlbums.includes(album)) {
			setGamestate({ ...gameState, gameOver: true, message: 'You Lose!' });
		} else if (gameState.selectedAlbums.length === 5) {
			setGamestate({
				...gameState,
				selectedAlbum: [],
				currentScore: gameState.currentScore + 1,
				highScore:
					gameState.currentScore + 1 > gameState.highScore
						? gameState.currentScore + 1
						: gameState.highScore,
				gameOver: true,
				message: 'You Win!',
			});
		} else {
			setGamestate({
				...gameState,
				selectedAlbums: [...gameState.selectedAlbums, album],
				currentScore: gameState.currentScore + 1,
				highScore:
					gameState.currentScore + 1 > gameState.highScore
						? gameState.currentScore + 1
						: gameState.highScore,
			});
		}
	}

	function restartGame() {
		setLoading(true);
		setGamestate({
			...gameState,
			currentScore: 0,
			gameOver: false,
			selectedAlbums: [],
		});
		setShuffledAlbums(shuffleArray(albumList).slice(0, 6));
	}

	function continueGame() {
		setLoading(true);
		setGamestate({
			...gameState,
			gameOver: false,
			selectedAlbums: [],
		});
		setShuffledAlbums(shuffleArray(albumList).slice(0, 6));
	}

	return (
		<>
			{loading ? (
				<div id='loading-screen'>
					<h1>LOADING</h1>
				</div>
			) : null}
			{gameState.gameOver ? (
				<div id='loading-screen'>
					<h1>{gameState.message}</h1>
					{gameState.message === 'You Lose!' ? (
						<div className='button-wrapper'>
							<button onClick={restartGame}>RESTART</button>
						</div>
					) : (
						<div className='button-wrapper'>
							<button onClick={continueGame}>CONTINUE STREAK</button>
							<button onClick={restartGame}>NEXT ROUND</button>
						</div>
					)}
				</div>
			) : null}
			<div className='background'></div>
			<div className='header'>
				<h1>Memories of Music</h1>
			</div>
			<div className={'album-wrapper ' + (loading ? 'loading' : '')}>
				{albums
					? shuffleArray(albums).map((album) => (
							<div className='album' key={album.album}>
								<img
									src={album.imageUrl}
									alt={album.album + ' by ' + album.artist}
									onClick={handleAlbumClick}
								/>
							</div>
					  ))
					: null}
			</div>
			<p className='score-info'>
				{'Current Score: ' +
					gameState.currentScore +
					' | Hi-Score: ' +
					gameState.highScore}
			</p>
		</>
	);
}

export default App;
