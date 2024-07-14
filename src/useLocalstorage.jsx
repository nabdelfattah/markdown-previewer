import { useEffect, useState } from "react";

export default function useLocalstorage() {
  const [code, setCode] = useState();

  function save() {
    console.log("save", code);
    localStorage.setItem("code", code);
  }
  function load() {
    console.log("loaded code:", code);
    setCode(localStorage.getItem("code"));
  }

  useEffect(() => {
    console.log("loading...");
    load();
  }, []);

  useEffect(() => {
    console.log("saving...");
    save();
  }, [code]);

  return [code, setCode];
}
