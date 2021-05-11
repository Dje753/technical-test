import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';



const Catalog = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    color: #ffffff;
    opacity: 0;
    position: absolute;
`;

const MovieCard = styled.div`
    margin: 0.2rem;
    width: 190px;
    height: 300px;
    filter: brightness(100%);

    &:hover {
        filter: brightness(50%);
    }
    &:hover ${Title} {
        opacity: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

interface IPopularMovie {
    map(arg0: (popularMovie: any) => JSX.Element): React.ReactNode;
    id: number;
    poster_path: string;
    title: string;
  }

const Home = () => {
    useEffect(() => {
        getPopulateMovies();
    }, []); 

    const [ popularMovies, setPopularMovies ] = useState([] as any[]);
    const getPopulateMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5bcd76c471e358e143b8721211e000d4')
        const allPopularMovies: any = await response.json();

        console.log('allPopularMovies :', allPopularMovies);
        setPopularMovies(allPopularMovies.results);
    }

    return (
        <Container>
            <div>search bar</div>
           {popularMovies.length ? <h1>Films populaires</h1> : ''}
            
            <Catalog>
                    {!popularMovies ? '' : popularMovies.map((popularMovie) => {
                        // console.log(popularMovie);

                        return (
                            <MovieCard key={popularMovie.title}>
                                <Link to={`/item-page/${popularMovie.id}`}>
                                    <Title>{popularMovie.title}</Title>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w300/${popularMovie.poster_path}`}
                                        alt={popularMovie.title}>
                                    </Image>                                       
                                </Link>
                            </MovieCard>
                        )})}
            </Catalog>
        </Container>
    )
}

export default Home


  