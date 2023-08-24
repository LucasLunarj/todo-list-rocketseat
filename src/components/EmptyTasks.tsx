import styles from "./EmptyTasks.module.css";
export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="" alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
