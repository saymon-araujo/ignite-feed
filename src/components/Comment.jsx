import { ThumbsUp, Trash } from "@phosphor-icons/react";

import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <Avatar 
        avatarUrl={"https://avatars.githubusercontent.com/u/67705166?v=4"} 
        hasBorder={false} 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Saymon Araújo</strong>
              <time title='24 de Outubro às 08:13h' dateTime='2023-10-24 08:13:30'>Cerca de 1h atrás</time>
            </div>
            
            <button title="Deletar comentário">
              <Trash size={24}/>

            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>

          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
          
        </footer>
      </div>
    </div>
  );
}
