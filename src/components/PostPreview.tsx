import { useRouter } from 'next/router';
import Reaction from './Reaction';
import { Post } from 'services/posts';
import { ReactionType } from 'utils/reactions';
import styles from 'styles/post-preview.module.css';

interface PostPreviewProps {
    post: Post
    onLoad?: () => void
}

const PostPreview: React.FC<PostPreviewProps> = (props) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.post.imageURL} alt='Sorry, a problem downloading the image...' onLoad={props.onLoad} />
            <div className={styles.content}>
                <span className={styles.title}>{props.post.title}</span>
                <div className={styles.buttons}>
                    <div className={styles.reactions}>
                        <Reaction post={props.post} type={ReactionType.Like} />
                        <Reaction post={props.post} type={ReactionType.Dislike} />
                    </div>
                    <button className={styles.readButton} onClick={() => router.push(`/${props.post.id}`)}>Читать далее</button>
                </div>
            </div>
        </div>
    );
};

export default PostPreview;