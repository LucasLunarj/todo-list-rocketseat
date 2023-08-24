import styles from "./EmptyTasks.module.css";
import clipboard from "../assets/Clipboard.png";
export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
