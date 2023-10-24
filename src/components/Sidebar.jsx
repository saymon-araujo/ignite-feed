import { PencilLine } from "@phosphor-icons/react";
import styles from './Sidebar.module.css';

export function Sidebar() {

  const coverImage = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImage} />

      <div className={styles.profile}>

        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/67705166?v=4" />

        <strong>Saymon Araújo</strong>

        <span>
        Software Engineer
        </span>
      </div>


      <footer>
        <a href="#">
          <PencilLine size={20}/>

          Editar seu perfil
        </a>
      </footer>

    </aside>
  );
}