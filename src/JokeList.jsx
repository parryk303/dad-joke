import React, { useState } from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";

import { PdfDocument } from "./template";

import JokeCard from './components/JokeCard';

import Data from './jokes.json';

export default function MovieList() {
  const [show, setHide] = useState(true);
  const [jokes, setJokes] = useState(Data.map(joke => JSON.parse(joke)));

  return (
    <div className="container">
      <h2>Best movies of the year</h2>

      {show && (
        <PDFDownloadLink
          document={<PdfDocument data={jokes} />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}
