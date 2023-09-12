import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { Post, ReactionName } from 'services/posts';

export interface BlogState {
    posts: Post[] | null
}

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: null
    } as BlogState,
    reducers: {
        setPosts: (state, { payload: posts }: PayloadAction<Post[]>) => { state.posts = posts; },
        likePost: (state, { payload: id }: PayloadAction<number>) => triggerReaction(state, id, 'like'),
        dislikePost: (state, { payload: id}: PayloadAction<number>) =>  triggerReaction(state, id, 'dislike')
    }
});

export const blogActions = blogSlice.actions;

export default blogSlice.reducer;

const triggerReaction = (state: Draft<BlogState>, postId: number, reaction: ReactionName): void => {
    const index = state.posts?.findIndex((post) => post.id === postId);
    if (index === undefined)
        return;
    
    const post = state.posts![index];
    if (!post[`${reaction}d`]) {
        react(post, reaction);
        const opposite = oppositeReaction(reaction);
        post[`${opposite}d`] && unreact(post, opposite);
    }
    else unreact(post, reaction);
};

const oppositeReaction = (reaction: ReactionName): ReactionName => reaction === 'like' ? 'dislike' : 'like';

const react = (post: Post, reaction: ReactionName): void => {
    post[`${reaction}d`] = true;
    post[`${reaction}s`]++;
};

const unreact = (post: Post, reaction: ReactionName): void => {
    post[`${reaction}d`] = false;
    post[`${reaction}s`]--;
};