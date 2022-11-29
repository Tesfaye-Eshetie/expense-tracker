import { useEffect } from "react";
import { setHappyGiphy } from "../data/indexedDB";
import axios from "axios";

export const FetchGiphy = () => {
  useEffect(
    () => async () => {
      try {
        const { data } = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=happy&limit=6&api_key=n9Ckrer7sonqSKbjISSzcG1qxwDAzGPl`
        );
        const gifs = data.data;

        setHappyGiphy("happy", gifs);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
      }
    },
    []
  );

  return null;
};
