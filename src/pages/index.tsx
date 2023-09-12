import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar';
import PostPreview from 'components/PostPreview';
import { State } from 'store';
import styles from 'styles/blogs.module.css';

const Blogs: NextPage = () => {
    const posts = useSelector((state: State) => state.blog.posts);

    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>Блог</h1>
                <p className='text-normal'>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                <SearchBar placeholder='Поиск по названию статьи' />
            </header>

            <main className={styles.posts}>
                <div className={styles.column}>
                    {posts?.map((post, index) => index % 2 == 0 && <PostPreview key={post.id} post={post} />)}
                </div>
                <div className={styles.column}>
                    {posts?.map((post, index) => index % 2 == 1 && <PostPreview key={post.id} post={post} />)}
                </div>
            </main>
        </div>
    );
};

export default Blogs;