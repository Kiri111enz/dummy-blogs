export interface Post {
    id: number
    title: string
    text: string
    likes: number
    dislikes: number
}

export const queryPosts = async (name: string=''): Promise<Post[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${name}`)
        .then((res) => res.json() as Promise<Post[]>)
        .then((posts) => posts.map((post) => ({
            ...post, 
            likes: randomInt(50),
            dislikes: randomInt(50)
        })));
};

const randomInt = (max: number): number => Math.floor(Math.random() * max);