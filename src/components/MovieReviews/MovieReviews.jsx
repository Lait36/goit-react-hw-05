import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../tmdbAPI";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
  const { moviesId: movieId } = useParams();

  useEffect(() => {
    async function fetchCasts(movieId) {
      const data = await getMovieReviews(movieId);
      setReviews(data.data.results);
    }

    fetchCasts(movieId);
  }, [movieId]);

  console.log(reviews);
  return (
    <div className="reviews">
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <h3 className="review-author">
          Author: {review.author_details.name || review.author}
          </h3>
          {review.content ? (
            <p className="review-content">{review.content}</p>
          ) : (
            <p className="no-content">No review content available</p>
          )}
        </div>
      ))}
    </div>
  );
};

  