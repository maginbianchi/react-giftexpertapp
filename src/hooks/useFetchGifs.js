import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  //   setTimeout(() => {
  //     setstate({
  //       data: [1, 2, 3, 4, 5, 6],
  //       loading: false,
  //     });
  //   }, 3000);

  return state;
};
