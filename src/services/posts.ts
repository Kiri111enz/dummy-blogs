export interface Post {
    id: number
    title: string
    text: string
    likes: number
    dislikes: number
    liked: boolean
    disliked: boolean
    imageURL: string
}

export const queryPosts = async (name: string=''): Promise<Post[]> => {
    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${name}`)).json() as Post[];
    for (const post of posts) {
        const blob = await getImage(post);
        post.likes = randomInt(50);
        post.dislikes = randomInt(50);
        post.liked = false;
        post.disliked = false;
        post.imageURL = URL.createObjectURL(blob);
    }
    return posts;
};

const getImage = async (post: Post): Promise<Blob> => {
    return fetch(`https://placehold.co/100/orange/white?text=${post.id}&font=roboto`)
        .then((res) => res.blob());
};

const randomInt = (max: number): number => Math.floor(Math.random() * max);