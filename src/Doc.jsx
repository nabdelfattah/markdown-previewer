import React from "react";
import doc from "./data.json";

export default function Doc() {
  const data = doc.basic_syntax;

  return (
    <div className="doc">
      <ul className="tokensList">
        {data.map((obj) => {
          return (
            <li>
              <article className="token">
                <h3 className="name">{obj.name}</h3>
                <p className="description">{obj.description}</p>
                <p className="example">Example:</p>
                <table className="table">
                  <tr>
                    <th>Markdown</th>
                    <th>html</th>
                  </tr>
                  <tr>
                    <td>{obj.examples[0].markdown}</td>
                    <td>{obj.examples[0].html}</td>
                  </tr>
                </table>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
