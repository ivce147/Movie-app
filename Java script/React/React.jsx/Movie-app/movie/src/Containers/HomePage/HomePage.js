import React,{useState,useEffect} from "react";
import "./HomePage.css";
import TextField from '@mui/material/TextField';
import { MovieData } from "../../data/MovieData";
import MovieCardSection from "../../Components/MovieCardSection/MovieCardSection";
import ImageSlide from "../../Components/Slide/ImageSlide";
import { SlideData } from "../../data/SlideData";
import ClipLoader  from "react-spinners/ClipLoader";

function HomePage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },500)
  },[])

  const [query,setQuery] = useState('');
  const search = (data) => {
    return data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()))
  }
  return (
    <div className="home">
      {
      loading ?
      <ClipLoader
      size={100}
      color={"#c22727"}
      loading={loading}
      />
    :
    <div>
    <div className="img-blog blog-post">
      <ImageSlide slides={SlideData} />
    </div>
    <div className='home-input'>
      <TextField
          className="search-input"
          type="text"
          name="search"
          label='Movie'
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    <div className="text-home">
      <p>
        Nowadays, recording videos with our smartphones has become a very fun
        and useful thing to do. There are many apps that help us out when
        capturing new videos, offering many features, such as the one to add
        text to them, to split them, to apply filters, and many more. There
        are many people who like recording with their phones to make content
        for their own blogs, YouTube channels or simply to post on social
        media platforms. And, since it is not always that we can listen to the
        video we’re watching, adding subtitles to them is extremely useful to
        help their followers! For that reason, we’ve selected all the best
        apps to help you when adding text to your videos. See all of them down
        below!
      </p>
    </div>
    <hr className="line" />
    <div className="media">
    <MovieCardSection movieData={search(MovieData)} />
    </div>
    <footer>© All Rights Reserved by My Footer</footer>
    </div>
  }
    </div>
  );
}

export default HomePage;
