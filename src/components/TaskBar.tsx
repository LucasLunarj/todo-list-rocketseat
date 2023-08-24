import styles from "./TaskBar.module.css";

//image

import plus from "../assets/plus.svg";

export const TaskBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.buttonBox}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button className={styles.buttonBox}>
            Criar
            <div>
              <img src={plus} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
