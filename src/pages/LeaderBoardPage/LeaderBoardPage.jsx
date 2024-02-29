import styles from "./board.module.css";
import { useLeader } from "../../components/hooks/useLeader";
import { Link } from "react-router-dom";
export function LeaderBoard() {
  const { leaderBoard, user } = useLeader();

  return (
    <>
      <p>LeaderBoard</p>
      <Link to={"/"}>Начать игру</Link>
      {leaderBoard.map((time, index) => (
        <li key={index}>
          <p className={styles.h5}>
            Минуты: {time.minutes}, Секунды: {time.seconds}, пользователь: {user}
          </p>
        </li>
      ))}
    </>
  );
}
