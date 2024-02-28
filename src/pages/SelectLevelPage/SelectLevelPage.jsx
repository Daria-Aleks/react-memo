import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useCount } from "../../components/hooks/useCount";
export function SelectLevelPage() {
  const { lite, getLite } = useCount();
  console.log(lite);
  function changeInputValue() {
    getLite(!lite);
  }
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div>
          <p>Легкий режим</p>
          <input type="checkbox" checked={lite} onChange={changeInputValue}></input>
        </div>
      </div>
    </div>
  );
}
