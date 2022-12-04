import { useEffect, useState } from "react";
import { database, setQuote } from "../data/indexedDB";
import axios from "axios";

export default function FetchQuote() {
  const [randomQoute, setRandomQuote] = useState(
    "Your smile could make someone's day, don't forget to wear it."
  );

  const fetchRandomQuote = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.adviceslip.com/advice/${id}`
      );
      console.log(data);
      setQuote(id, data.slip.advice);
    } catch (err) {
      if (err) {
        console.log("Error fetching and parsing data", err);
      }
    }
  };

  const fetchQuotes = async () => {
    (await database).getAll("quoteStore").then((data) => {
      console.log(data.length);
      if (!data.length) {
        fetchRandomQuote(9);
        fetchRandomQuote(61);
        fetchRandomQuote(79);
        fetchRandomQuote(184);
        fetchRandomQuote(186);
        fetchRandomQuote(143);
        fetchRandomQuote(100);
        fetchRandomQuote(194);
        fetchRandomQuote(123);
        fetchRandomQuote(96);
      }
    });
  };

  const getRandomQuote = async () => {
    (await database).getAll("quoteStore").then((data) => {
      const quote = data[Math.floor(Math.random() * data.length)];
      console.log(quote);
      setRandomQuote(quote);
    });
  };

  const pushNotification = async () => {
    // create and show the notification
    const showNotification = () => {
      // create a new notification

      const notification = new Notification("ƎxpenseIt", {
        title: "Enjoy these motivational quotes",
        body: randomQoute,
        icon: "/images/favicon.ico",
      });

      // close the notification after 10 seconds
      setTimeout(() => {
        notification.close();
      }, 10 * 1000);

      // navigate to a URL when clicked
      notification.addEventListener("click", () => {
        window.open(
          "https://github.com/Tesfaye-Eshetie/expense-tracker",
          "_blank"
        );
      });
    };

    // show an error message
    const showError = () => {
      console.log("You blocked the notifications");
    };

    // check notification permission
    let granted = false;

    if (Notification.permission === "granted") {
      granted = true;
    } else if (Notification.permission !== "denied") {
      let permission = await Notification.requestPermission();
      granted = permission === "granted" ? true : false;
    }

    // show notification or error
    granted ? showNotification() : showError();
  };

  useEffect(() => {
    fetchQuotes();
    const interval = setInterval(() => {
      getRandomQuote();
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    pushNotification();
  }, [randomQoute]);
  return null;
}
