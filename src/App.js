
import './App.css';
import React,{useState} from 'react';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './component/Filter';



function App() {

  const [TitleFilter, setTitleFilter] = useState('')
  const [RateFilter, setRateFilter] = useState(1)

  const [movie,setMovie]=useState([
    {
    title:"CÉLIBATAIRES",
    rate:5, 
    posterUrl:"https://fr.web.img3.acsta.net/medias/nmedia/18/36/02/60/18478319.jpg",
    description:"Trois amis font le serment de rester célibataire. Mais l'un d'entre eux va tomber amoureux"
  },
  {
    title:'Première Année de Fac',
    rate: 3,
    posterUrl:"https://imgr.cineserie.com/2018/11/avant-4.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1",
    description:"ntoine entame sa première année de médecine pour la troisième fois. Benjamin arrive directement du lycée, mais il réalise rapidement que cette année ne sera pas une promenade de santé. Dans un environnement compétitif violent, avec des journées de cours ardues et des nuits dédiées aux révisions plutôt qu'à la fête, les deux étudiants devront s’acharner et trouver un juste équilibre entre les épreuves d’aujourd’hui et les espérances de demain",
  },
])

const handleAdd=(newmovie)=>{
  setMovie([...movie,newmovie]);
}

  return (
    <div className='tab' className="App">
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} RateFilter={RateFilter}  />
      <AddMovie handleAdd={handleAdd} />
      <MovieList  movie={movie} TitleFilter={TitleFilter} RateFilter={RateFilter}/>

    </div>
  );
}


export default App;
