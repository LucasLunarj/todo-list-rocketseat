import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.amountBar}>
          <div>
            <p>Tarefas criadas</p>
            <p>0</p>
          </div>
          <div>
            <p>Concluidas</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
