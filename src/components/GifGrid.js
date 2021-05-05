import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "../components/GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn animate__delay-1s">
        {" "}
        {category}{" "}
      </h3>
      {loading && (
        <p className="animate__animated animate__flash animate__delay-1s">
          Cargando...
        </p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
