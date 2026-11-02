import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string)=> void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount]= useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/caua3s.png" alt=''/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>caua santos</strong>
                            <time title='11 de maio as 08:13' dateTime="2025-05-11 08:13:30">cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}