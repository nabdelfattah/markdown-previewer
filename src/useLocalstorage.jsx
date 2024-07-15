import { useEffect, useState } from "react";

export default function useLocalstorage() {
  const [code, setCode] = useState();
  function save() {
    localStorage.setItem("code", code);
  }
  function load() {
    setCode(localStorage.getItem("code"));
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    save();
  }, [code]);

  return [code, setCode];
}
