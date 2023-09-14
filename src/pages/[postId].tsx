import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'store';

const Post: NextPage<{ postId: number }> = ({ postId }) => {
    const posts = useSelector((state: State) => state.blog.posts);
    const [post] = useState(posts?.find((post) => post.id === postId));

    return (
        <>{post?.id}</>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: { postId: parseInt(context.params!.postId as string) } };
};

export default Post;