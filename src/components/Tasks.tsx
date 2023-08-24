// import { EmptyTasks } from "./EmptyTasks";
import styles from "./Tasks.module.css";
import { TasksCreated } from "./TasksCreated";

export function Tasks() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.amountBar}>
          <div className={styles.tasksCreatedAmount}>
            <p>Tarefas criadas</p>
            <div>0</div>
          </div>
          <div className={styles.tasksFinishedAmount}>
            <p>Concluidas</p>
            <div>0</div>
          </div>
        </div>
      </div>

      <div>
        {<TasksCreated />}
        {/* <EmptyTasks /> */}
      </div>
    </div>
  );
}
