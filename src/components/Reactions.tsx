import Reaction from './Reaction';
import { Post } from 'services/posts';
import { ReactionType } from 'utils/reactions';
import styles from 'styles/reactions.module.css';

const Reactions: React.FC<{ post: Post}> = ({ post }) => (
    <div className={styles.container}>
        <Reaction post={post} type={ReactionType.Like} />
        <Reaction post={post} type={ReactionType.Dislike} />
    </div>
);

export default Reactions;