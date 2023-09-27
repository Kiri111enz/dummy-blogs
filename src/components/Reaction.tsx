import { useDispatch } from 'react-redux';
import { blogActions } from 'store/reducers/blog';
import { Post, Reaction } from 'services/posts';
import styles from 'styles/reaction.module.css';

interface ReactionProps {
    post: Post
    type: Reaction
}

const Reaction: React.FC<ReactionProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className='clickable' onClick={() => dispatch(blogActions.reaction({ postId: props.post.id, reaction: props.type }))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    {props.type === 'like' ? 
                        <path d="M2.66669 27.1667H5.33335C6.06669 27.1667 6.66669 26.5667 6.66669 25.8334V13.8334C6.66669 13.1 6.06669 12.5 5.33335 12.5H2.66669V27.1667ZM29.1067 17.6734C29.2534 17.34 29.3334 16.98 29.3334 16.6067V15.1667C29.3334 13.7 28.1334 12.5 26.6667 12.5H19.3334L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4534 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61335 12.22 9.33335 12.9 9.33335 13.6067V24.06C9.33335 25.7667 10.7334 27.1667 12.4534 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z" 
                            fill={props.post.reacted.like ? '#219653' : '#959298'} /> 
                        :
                        <path d="M2.66668 5.83337H5.33334C6.06668 5.83337 6.66668 6.43337 6.66668 7.16671V19.1667C6.66668 19.9 6.06668 20.5 5.33334 20.5H2.66668V5.83337ZM29.1067 15.3267C29.2533 15.66 29.3333 16.02 29.3333 16.3934V17.8334C29.3333 19.3 28.1333 20.5 26.6667 20.5H19.3333L20.56 26.7C20.6267 26.9934 20.5867 27.3134 20.4533 27.58C20.1467 28.18 19.76 28.7267 19.28 29.2067L18.6667 29.8334L10.12 21.2867C9.61334 20.78 9.33334 20.1 9.33334 19.3934V8.95337C9.33334 7.23337 10.7333 5.83337 12.4533 5.83337H23.2533C24.2 5.83337 25.0667 6.32671 25.5467 7.12671L29.1067 15.3267Z" 
                            fill={props.post.reacted.dislike ? '#EB5757' : '#959298'} />
                    }
                </svg>
            </div>
            <span className='text-small'>{props.post.reactionCounts[props.type]}</span>
        </div>
    );
};

export default Reaction;