import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'services/posts';
import { triggerReaction, ReactionType } from 'utils/reactions';

export interface BlogState {
    posts: Post[] | null
}

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: null
    } as BlogState,
    reducers: {
        setPosts: (state, { payload: posts }: PayloadAction<Post[] | null>) => { 
            state.posts = posts;
        },
        reaction: (state, { payload: { postId, reaction }}: PayloadAction<{ postId: number, reaction: ReactionType }>) => {
            const post = state.posts?.find((post) => post.id === postId);
            if (post !== undefined)
                triggerReaction(post, reaction);
        }
    }
});

export const blogActions = blogSlice.actions;

export default blogSlice.reducer;