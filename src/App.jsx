import './App.css';
import useAlbums from './hooks/useAlbums';
import useGameState from './hooks/useGameState';
import useLoading from './hooks/useLoading';
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
	const [loading, setLoading] = useLoading(true);
	const [gameState, setGamestate] = useGameState();
	const [albums] = useAlbums(albumList, gameState.difficulty, setLoading);

	return (
		<>
			{loading ? (
				<div id='loading-screen'>
					<h1>LOADING</h1>
				</div>
			) : null}
			<div className='background'></div>
			<div className='header'>
				<h1>Memories of Music</h1>
			</div>
			<div className='album-wrapper'>
				{albums
					? shuffleArray(albums).map((album) => (
							<img key={album.album} src={album.imageUrl} />
					  ))
					: null}
			</div>
			<p>
				{'Current Score: ' +
					gameState.currentScore +
					' | Hi-Score: ' +
					gameState.highScore}
			</p>
		</>
	);
}

export default App;
