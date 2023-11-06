import {useState} from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ post }){
  const [comments, setComments] = useState(['Bacana hein']);
  const [newCommentText, setNewCommentText] = useState('');

  const { author, content, publishedAt } = post;

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' H:mm'h'", {
     locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(){
    event.preventDefault();
    setComments(comments => [...comments, newCommentText])

    setNewCommentText('');
  }

  function handleNewCommentChange(event){
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  function handleCommentInvalid(event){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatarUrl={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if(line.type === 'link'){
            return <p><a href={"#"}>{line.text}</a></p>
          }else {
            return <p>{line.text}</p>
          }
        })}
      </div>


      <form className={styles.commentForm} name='comment' onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário' 
          onChange={handleNewCommentChange} 
          value={newCommentText} 
          required 
          onInvalid={handleCommentInvalid}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>



      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />
        })}
      </div>
    </article>
  )
}