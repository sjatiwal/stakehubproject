"use Client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/components/table";
import { Rows, Quotes } from "@/helper/types";

const quotes = () => {
  const [quote, setQuote] = useState<Quotes[]>([]);
  const [allQuotes, setAllQuotes] = useState<boolean>(true);
  const [author, setAuthor] = useState<string[]>([]);
  const [showFilterList, setShowFilterList] = useState<boolean>(false);
  const [allData, setAllData] = useState<Quotes[]>([]);

  const fetchdata = async () => {
    const { data } = await axios.get(
      "https://wordsapi-nkj3.onrender.com/quotes"
    );

    setAllData(data.quotes);
    setAuthor(data.authors);
    setQuote(data.quotes);
  };

  useEffect(() => {
    fetchdata();
  }, [allQuotes]);

  const header = [
    {
      name: "Author",
      data: "author",
    },
    {
      name: "Quotes",
      data: "text",
    },
  ];

  const rows: Rows[] = [];

  quote.forEach((item) => {
    return rows.push({
      author: item["author"],
      text: item["text"],
    });
  });

  const handleFilter = async (author: string) => {
    const filterQuote = allData.filter((item) => item["author"] === author);
    setQuote(filterQuote);
    setShowFilterList(false);
  };

  const getAllQuotes = () => {
    setAllQuotes(!allQuotes);
    setShowFilterList(false);
  };
  return (
    <div onClick={() => setShowFilterList(false)}>
      <div className="p-4">
        <button
          onClick={(e) => [
            setShowFilterList(!showFilterList),
            e.stopPropagation(),
          ]}
          className="bg-blue-400 px-4 py-1 rounded-md text-white"
        >
          Filter
        </button>
        {showFilterList && (
          <div>
            <div
              onClick={getAllQuotes}
              className="bg-yellow-300 mt-1 px-2 py-1 cursor-pointer"
            >
              All
            </div>
            {author &&
              author.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={(e) => [handleFilter(item), e.stopPropagation()]}
                    className="bg-yellow-300 mt-1 px-2 py-1 cursor-pointer"
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        {rows.length > 0 ? (
          <Table header={header} rows={rows} />
        ) : (
          <div className="flex justify-center mt-40 ">
            <div className="text-3xl text-green-600">"Loading"</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default quotes;
