import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3rem;
    justify-content: space-around;
`;

const DetailsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Image = styled.img`
    // width: 100%;
    // height: 100%;
`;

interface IMovie {
    map(arg0: (movie: any) => JSX.Element): React.ReactNode;
    title: string;
    poster_path: string;
    overview: string;
  }

const ItemPage = ({ match }: any) => {
    useEffect(() => {
        getMovie();
    }, []); 

    const [ movie, setMovie ] = useState({} as any);

    const getMovie = async () => {
        const idParams: number = match.params.id
        const response = await fetch(`https://api.themoviedb.org/3/movie/${idParams}?api_key=5bcd76c471e358e143b8721211e000d4`)

        const movie: any = await response.json();

        console.log('movie :', movie);
        setMovie(movie);
    }

    return (
        <Container>
            <DetailsContainer>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p>{movie.vote_average}/10</p>
            </DetailsContainer>
            <div>
                <Image
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}>
                </Image>  
            </div>
        </Container>
    )
       
}

export default ItemPage