import React from "react";
import MovieListItem from "./MovieListItem";

export default function LatestUploads() {
  return (
    <div className="bg-white shadow dark:shadow dark:bg-secondary p-5 rounded col-span-2">
      <h1 className="font-semibold text-2xl mb-2 text-primary dark:text-white">
        Recent Uploads
      </h1>

      <MovieListItem
        movie={{
          poster:
            "https://images.unsplash.com/photo-1672825455957-cc5e1ded7d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60",
          title: " Lorem ipsum dolor sit amet.",
          status: "public",
          genres: ["Action", "Comedy"],
        }}
      />
    </div>
  );
}
