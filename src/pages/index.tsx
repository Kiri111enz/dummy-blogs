import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from 'components/SearchBar';
import PostPreview from 'components/PostPreview';
import useSelector from 'hooks/useSelector';
import { blogActions } from 'store/reducers/blog';
import { queryPosts } from 'services/posts';
import styles from 'styles/blogs.module.css';

const Blogs: NextPage = () => {
    const dispath = useDispatch();
    const posts = useSelector((state) => state.blog.posts);
    const [mounted, setMounted] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (mounted || posts === null)
            queryPosts(query).then((posts) => dispath(blogActions.setPosts(posts)));
        else
            setMounted(true);
    }, [query]);

    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>Блог</h1>
                <p className='text-normal'>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                <SearchBar placeholder='Поиск по названию статьи' onChange={(value) => setQuery(value)} />
            </header>

            <main>
                {!!posts?.length && 
                    <div className={styles.bigPost}>
                        <PostPreview post={posts[0]} first />
                    </div>
                }
                <div className={styles.posts}>
                    <div className={styles.column}>
                        {posts?.map((post, index) => index % 2 == 1 && 
                        <PostPreview key={post.id} post={post} />)}
                    </div>
                    <div className={styles.column}>
                        {posts?.map((post, index) => (index % 2 == 0 && index > 0) && 
                        <PostPreview key={post.id} post={post} />)}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Blogs;