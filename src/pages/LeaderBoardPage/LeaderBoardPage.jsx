import styles from "./board.module.css";
import { useLeader } from "../../components/hooks/useLeader";
import { Link } from "react-router-dom";
export function LeaderBoard() {
  const { leaderBoard, user } = useLeader();

  return (
    <>
      <p className={styles.titleLeaderbord}>LeaderBoard</p>
      <Link to={"/"} className={styles.startLink}>
        Начать игру
      </Link>
      {leaderBoard.map((time, index) => (
        <li key={index} className={styles.ul}>
          <p className={styles.h5}>
            Минуты: {time.minutes}, Секунды: {time.seconds}, пользователь: {user}
          </p>
        </li>
      ))}
    </>
  );
}
