import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Reactions from 'components/Reactions';
import { State } from 'store';
import styles from 'styles/post.module.css';

const Post: NextPage<{ postId: number }> = ({ postId }) => {
    const router = useRouter();
    const posts = useSelector((state: State) => state.blog.posts);
    const [index] = useState(posts?.findIndex((post) => post.id === postId));

    useEffect(() => { 
        if (index === undefined)
            router.push('/');
    }, []);

    if (index === undefined)
        return null;

    console.log(posts);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.leaveButton + ' clickable'} onClick={() => router.push('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="#0A0A0A"/>
                    </svg>
                    <span className='text-normal'>Вернуться к статьям</span>
                </div>
                <Reactions post={posts![index!]} />
            </header>

            <main>
                <h1 className={styles.title}>{posts![index].title}</h1>
                <img className={styles.image} src={posts![index].imageURL} alt='Sorry, a problem downloading the image...' />
                <p className={styles.body}>{posts![index].body}</p>
            </main>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: { postId: parseInt(context.params!.postId as string) } };
};

export default Post;