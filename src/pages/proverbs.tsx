"use Client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/components/table";
import { Rows, Proverbs } from "@/helper/types";

const proverbs = () => {
  const [proverb, setProverbs] = useState<Proverbs[]>([]);
  const fetchdata = async () => {
    const { data } = await axios.get(
      "https://wordsapi-nkj3.onrender.com/proverbs"
    );

    setProverbs(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const header = [
    {
      name: "Origin",
      data: "origin",
    },
    {
      name: "Proverb",
      data: "text",
    },
  ];

  const rows: Rows[] = [];
  proverb.forEach((item) => {
    return rows.push({
      origin: item["origin"],
      text: item["text"],
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

export default proverbs;
