"use Client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/components/table";
import { Rows, Dialogues } from "@/helper/types";

const dialogues = () => {
  const [dialogue, setDialogue] = useState<Dialogues[]>([]);
  const fetchdata = async () => {
    const { data } = await axios.get(
      "https://wordsapi-nkj3.onrender.com/dialogues"
    );

    setDialogue(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const header = [
    {
      name: "Character",
      data: "character",
    },
    {
      name: "Dialogue",
      data: "text",
    },
    {
      name: "Series",
      data: "series",
    },
  ];
  const rows: Rows[] = [];

  dialogue.forEach((item) => {
    return rows.push({
      character: item["character"],
      text: item["text"],
      series: item["series"],
    });
  });
  return (
    <div className="flex justify-center">
      {rows.length > 0 ? (
        <Table header={header} rows={rows} />
      ) : (
        <div className="flex justify-center mt-40 ">
          <div className="text-3xl text-green-600">"Loading"</div>
        </div>
      )}
    </div>
  );
};

export default dialogues;
