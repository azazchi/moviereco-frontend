import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function fetchSingleMovie(movie_id) {
    const res = await axios.get(`/api/movie/${movie_id}`);
    return res;
}

export default function MoviePage() {
    const { movie_id } = useParams();

    const [movie, setMovie] = useState({
        isLoading: true,
        data: {},
    });

    useEffect(() => {
        if (movie.isLoading) {
            fetchSingleMovie(movie_id).then((res) => {
                setMovie({
                    isLoading: false,
                    data: res.data.data,
                });
            });
        }
    }, []);

    if (movie.isLoading) {
        return <></>;
    }

    const { data } = movie;

    return (
        <>
            <div className="space-y-2">
                <div>
                    <strong>Tite:</strong> {data.title}
                </div>
                <div>
                    <strong>Overview:</strong> {data.overview}
                </div>
                <div>
                    <strong>Release Date:</strong> {data.release_date}
                </div>
                <div>
                    <strong>Budget:</strong> ${data.budget.toLocaleString()}
                </div>
                <div>
                    <strong>Cast:</strong> {data.cast}
                </div>
                <div>
                    <strong>Director:</strong> {data.director}
                </div>
                <div>
                    <strong>Genre:</strong> {data.genre}    
                </div>
                <div>
                    <strong>Language:</strong> {data.language}
                </div>
                <div>
                    <strong>Keywords:</strong> {data.keywords}
                </div>
                <div>
                    <strong>Rating:</strong> {data.rating}
                </div>
                <div>
                    <strong>Revenue:</strong> ${data.revenue.toLocaleString()}
                </div>
                <div>
                    <strong>Tagline:</strong> {data.tagline}
                </div>
                <div>
                    <strong>Vote Count:</strong> {data.vote_count}
                </div>
                <div>
                    <strong>Votes Up:</strong> {data.vote_up}
                </div>
                <div>
                    <strong>Votes Down:</strong> {data.vote_down}
                </div>
            </div>
        </>
    );
}
