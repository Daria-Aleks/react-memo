import { createContext, useState } from "react";
export const LeaderContext = createContext();

export const LeaderProvider = ({ children }) => {
  const lead = localStorage.getItem("leaderBoard");
  // localStorage.removeItem("leaderBoard");
  const initialValue = JSON.parse(lead);
  const [leaderBoard, setleaderBoard] = useState(initialValue || []);
  const [user, setUser] = useState("");

  const getLeaders = leaders => {
    setleaderBoard(leaders);
  };

  const getUser = user => {
    setUser(user);
  };
  return <LeaderContext.Provider value={{ getLeaders, leaderBoard, user, getUser }}>{children}</LeaderContext.Provider>;
};
