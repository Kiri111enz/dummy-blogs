export const reactions = ['like', 'dislike'] as const;
export type Reaction = typeof reactions[number];

export interface Post {
    id: number
    title: string
    body: string
    reactionCounts: Record<Reaction, number>
    reacted: Record<Reaction, boolean>
    imageURL: string
}

export const queryPosts = async (title: string=''): Promise<Post[] | null> => {
    return await fetch(encodeURI('https://jsonplaceholder.typicode.com/posts/' + (title ? `?title=${title}` : '')))
        .then((res) => res.json())
        .then((posts: { id: number, title: string, body: string }[]) => posts.map((post) => ({
            ...post,
            reactionCounts: reactions.reduce((obj, k) => ({ ...obj, [k]: randomInt(50) }), {}) as Record<Reaction, number>,
            reacted: reactions.reduce((obj, k) => ({ ...obj, [k]: false }), {}) as Record<Reaction, boolean>,
            imageURL: `https://placehold.co/100/orange/white?text=${post.id}&font=roboto`
        })));
};

const randomInt = (max: number): number => Math.floor(Math.random() * max);