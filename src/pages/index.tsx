import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar';
import PostPreview from 'components/PostPreview';
import { State } from 'store';
import { blogActions } from 'store/reducers/blog';
import { queryPosts } from 'services/posts';
import styles from 'styles/blogs.module.css';
import Loader from 'components/Loader';

const Blogs: NextPage = () => {
    const dispath = useDispatch();
    const posts = useSelector((state: State) => state.blog.posts);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    useEffect(() => {
        queryPosts().then((posts) => dispath(blogActions.setPosts(posts)));
    }, []);

    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>Блог</h1>
                <p className='text-normal'>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                <SearchBar placeholder='Поиск по названию статьи' />
            </header>

            <main className={styles.posts} style={{ display: imagesLoaded === posts?.length ? '' : 'none' }}>
                <div className={styles.column}>
                    {posts?.map((post, index) => index % 2 == 0 && 
                        <PostPreview key={post.id} post={post} onLoad={() => setImagesLoaded((l) => l + 1)} />)}
                </div>
                <div className={styles.column}>
                    {posts?.map((post, index) => index % 2 == 1 && 
                        <PostPreview key={post.id} post={post} onLoad={() => setImagesLoaded((l) => l + 1)} />)}
                </div>
            </main>

            {imagesLoaded !== posts?.length && <div className={styles.loader}><Loader /></div>}
        </div>
    );
};

export default Blogs;