import Reaction from './Reaction';
import { Post } from 'services/posts';
import styles from 'styles/reactions.module.css';

const Reactions: React.FC<{ post: Post}> = ({ post }) => (
    <div className={styles.container}>
        <Reaction post={post} type='like' />
        <Reaction post={post} type='dislike' />
    </div>
);

export default Reactions;