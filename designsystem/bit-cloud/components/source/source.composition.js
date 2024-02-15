import React from "react";
import { Source } from './source.js';

export const BasicSource = () => {
  return (
    <Source
      baseUrl={"Gå till konsumentverket.se"}
      sourcesCollection={{
        items: [
          {
            linkUrl: "/",
            linkText: "Konsumentverket",
            occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
          }
        ]
      }}
      markdownText={"Lorem ipsum"}
      reviewedDate={new Date()}
      style=""
      english={false}
      bottomContent={"Granskad"}
    />
  );
}
