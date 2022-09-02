import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const useStore = () => {
  const { store, actions } = useContext(AppContext);

  return { store, actions };
};

export default useStore;
