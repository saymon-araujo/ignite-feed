import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// É importante evitar em um app React renderizar a página utilizando html vindo do backend, pois caso algum usuário mal intencianado conseguir injetar um script, isso abre espaço para vulnerabilidade.

const posts = [
  {
    id: 1,
    author: {
      name: 'Saymon Araújo',
      role: 'Full-Stack Engineer',
      avatarUrl: 'https://github.com/saymon-araujo.png'
    },
    content: [
      { type:'paragraph', text: 'Fala galeraa 👋' },
      { type:'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type:'link', text: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-1 18:13')
  },
  {
    id: 2,
    author: {
      name: 'Diegola Oliveira',
      role: 'Full-Stack Engineer',
      avatarUrl: 'https://github.com/diego3g.png'
    },
    content: [
      { type:'paragraph', text: 'Fala galeraa 👋' },
      { type:'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type:'link', text: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-3 07:13')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => <Post post={post} key={post.id}/>)}
        </main>
      </div>
    </div>
  )
}

export default App

