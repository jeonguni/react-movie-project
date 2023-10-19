import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); //url의 상세정보를 알려줌
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>{loading ? <span>Loading...</span> : <span>show detail</span>}</h1>;
}

export default Detail;
