import React, { useEffect } from "react";

async function fetchDocs() {
  try {
    const response = await fetch(
      "https://www.markdownguide.org/api/v1/basic-syntax.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error; // Re-throw the error to be caught in the calling function
  }
}

export default function Doc() {
  useEffect(() => {
    fetchDocs();
  }, []);
  return (
    <div>
      <p>hello Doc</p>
    </div>
  );
}
