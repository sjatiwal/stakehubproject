import React from "react";
import { Rows, TableProps } from "@/helper/types";

function Table({ header, rows }: TableProps) {
  return (
    <>
      <table className="m-2 mt-5">
        <thead>
          <tr className="border-2 border-black">
            {header.map((item) => {
              return (
                <th key={item.name} className="border-2 border-black px-2 py-2">
                  {item.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((data, index: number) => {
            return (
              <tr
                key={(data.text as string) + index}
                className="border-2 border-black"
              >
                {header.map((item: any) => {
                  return (
                    <td
                      key={data[item.data as keyof Rows]}
                      className="border-2 border-black px-2 py-1"
                    >
                      {data[item.data as keyof Rows]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
