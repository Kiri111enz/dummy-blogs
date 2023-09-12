import SearchBar from 'components/SearchBar';
import { NextPage } from 'next';
import styles from 'styles/blogs.module.css';

const Blogs: NextPage = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>Блог</h1>
                <p className='text-normal'>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                <SearchBar placeholder='Поиск по названию статьи' />
            </header>
        </div>
    );
};

export default Blogs;