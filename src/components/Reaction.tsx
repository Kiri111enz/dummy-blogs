import { PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import { blogActions } from 'store/reducers/blog';
import { Post, ReactionName } from 'services/posts';
import styles from 'styles/reaction.module.css';

interface ReactionProps {
    post: Post
    reaction: ReactionName
}

const Reaction: React.FC<PropsWithChildren<ReactionProps>> = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className='clickable' onClick={() => dispatch(blogActions[`${props.reaction}Post`](props.post.id))}>
                {props.children}
            </div>
            <span className='text-small'>{props.post[`${props.reaction}s`]}</span>
        </div>
    );
};

export default Reaction;