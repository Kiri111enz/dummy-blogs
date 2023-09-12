import { Post } from './posts';

export const getImage = async (post: Post): Promise<Blob> => {
    return fetch(`https://placehold.co/100/orange/white?text=${post.id}&font=roboto`)
        .then((res) => res.blob());
};