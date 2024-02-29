import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";
import { useLeader } from "../hooks/useLeader";
export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, isLeader }) {
  const title = isLeader ? "Вы попали на Лидерборд!" : isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";
  const { getUser } = useLeader();
  function handleInputChange(e) {
    const { value } = e.target;
    getUser(value);
  }
  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      <input placeholder="Пользователь" onChange={handleInputChange}></input>
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link to="/leaderboard">Перейти к лидерборду</Link>
    </div>
  );
}
