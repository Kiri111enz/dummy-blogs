import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, Reaction, reactions } from 'services/posts';

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
        reaction: (state, { payload: { postId, reaction }}: PayloadAction<{ postId: number, reaction: Reaction }>) => {
            const post = state.posts?.find((post) => post.id === postId);
            if (post == undefined)
                return;

            reactions.forEach((r) => {
                if (r === reaction) {
                    post.reacted[r] = !post.reacted[r];
                    post.reactionCounts[r] += post.reacted[r] ? 1 : -1;
                }
                else if (post.reacted[r]) {
                    post.reacted[r] = false;
                    post.reactionCounts[r]--;
                }
            });
        }
    }
});

export const blogActions = blogSlice.actions;

export default blogSlice.reducer;