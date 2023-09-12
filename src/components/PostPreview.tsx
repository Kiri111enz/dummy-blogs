import { useEffect, useState } from 'react';
import Reactions from './Reactions';
import { Post } from 'services/posts';
import { getImage } from 'services/images';
import styles from 'styles/post-preview.module.css';

const PostPreview: React.FC<{ post: Post }> = ({ post }) => {
    const [imageURL, setImageURL] = useState<string | undefined>(undefined);

    useEffect(() => {
        getImage(post).then((blob) => setImageURL(URL.createObjectURL(blob)));
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={imageURL} alt='Sorry, a problem downloading the image...' />
            <div className={styles.content}>
                <span className={styles.title}>{post.title}</span>
                <div className={styles.buttons}>
                    <Reactions post={post} />
                </div>
            </div>
        </div>
    );
};

export default PostPreview;