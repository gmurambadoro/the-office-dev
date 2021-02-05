import React, {useEffect, useState} from "react";
import NProgress from "nprogress";
import {getRandomQuote} from "../theoffice-api";
import {Button} from "react-bootstrap";
import Error from "./Error";

const RandomQuote = () => {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState('');

    const generateRandomQuote = () => {
        NProgress.start();

        getRandomQuote()
            .then(data => {
                setQuote(data);
                setError(error);
            })
            .catch(err => {
                setQuote('');
                setError(String(err).toString());
                console.log(err);
            })
            .finally(() => NProgress.done());
    };

    useEffect(() => generateRandomQuote());

    let display = <p>{quote}</p>;

    if (error) {
        display = <Error message={error} />
    }

    return (
        <div className="mt-2">
            {display}

            <Button variant="success" onClick={() => generateRandomQuote()}>Random Quote</Button>
        </div>
    );
};

export default RandomQuote;