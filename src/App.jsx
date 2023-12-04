import './App.css';
import useAlbums from './assets/hooks/useAlbums';
import useGameState from './assets/hooks/useGameState';

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
	const [gameState, setGamestate] = useGameState();
	const [albums] = useAlbums(albumList, gameState.difficulty);

	return (
		<>
			<div>
				{albums
					? albums.map((album) => (
							<img key={album.album} src={album.imageUrl} />
					  ))
					: null}
			</div>
			<p>{gameState.difficulty}</p>
		</>
	);
}

export default App;
