import styles from "./Tasks.module.css";
import trash from "../assets/trash.svg";
export function Tasks() {
  return (
    <div>
      <div>
        <p>Tarefas criadas</p>
        <p>0</p>
        <div>
          <p>concluidas</p>
          <p>2 de 5</p>
        </div>
      </div>
      <div>
        <div className={styles.taskBox}>
          <input type="checkbox" name="" id="" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <img src={trash} alt="" />
        </div>
      </div>
    </div>
  );
}
