import { useRouter } from 'next/router';
import Reactions from './Reactions';
import { Post } from 'services/posts';
import styles from 'styles/post-preview.module.css';

interface PostPreviewProps {
    post: Post
    first?: boolean
}

const PostPreview: React.FC<PostPreviewProps> = (props) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <img className={props.first ? styles.bigImage : styles.image} src={props.post.imageURL} 
                alt='Sorry, a problem downloading the image...' />
            <div className={styles.content}>
                {props.first ? 
                    <div className={styles.header}>
                        <span className={styles.title}>{props.post.title}</span>
                        <Reactions post={props.post} />
                    </div> 
                    :
                    <span className={styles.title}>{props.post.title}</span>
                }
                {props.first && <span className={styles.bodyPreview}>{props.post.body}</span>}
                <div className={styles.buttons}>
                    {!props.first && <Reactions post={props.post} />}
                    <button className={styles.readButton} onClick={() => router.push(`/${props.post.id}`)}>Читать далее</button>
                </div>
            </div>
        </div>
    );
};

export default PostPreview;