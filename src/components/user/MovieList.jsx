import React from "react";
import { Link } from "react-router-dom";
import { getPoster } from "../../utils/helper";
import GridContainer from "../GridContainer";
import RatingStar from "../RatingStar";

export default function MovieList({ title, movies = [] }) {
  if (!movies.length) return null;
  return (
    <div>
      {title ? (
        <h1 className="text-2xl dark:text-white text-secondary font-semibold mb-5">
          {title}
        </h1>
      ) : null}
      <GridContainer>
        {movies.map((movie) => {
          return <ListItem key={movie.id} movie={movie} />;
        })}
      </GridContainer>
    </div>
  );
}

const trimTitle = (text = "") => {
  if (text.length <= 20) return text;
  return text.substring(0, 20) + "..";
};

const ListItem = ({ movie }) => {
  const { id, responsivePosters, title, poster, reviews } = movie;

  return (
    <Link to={"/movies/" + id}>
      <img
        className="aspect-video object-cover w-full"
        src={getPoster(responsivePosters) || poster}
        alt={title}
      />
      <h1
        className="text-lg dark:text-white text-secondary font-semibold"
        title={title}
      >
        {trimTitle(title)}
      </h1>
      <RatingStar rating={reviews.ratingAvg} />
    </Link>
  );
};
