import { Post } from 'services/posts';

export enum ReactionType {
    Like = 'like', 
    Dislike = 'dislike'
}

export const triggerReaction = (post: Post, reaction: ReactionType): void => {
    if (!post[`${reaction}d`]) {
        react(post, reaction);
        const opposite = oppositeReaction(reaction);
        post[`${opposite}d`] && unreact(post, opposite);
    }
    else unreact(post, reaction);
};

const oppositeReaction = (reaction: ReactionType): ReactionType => 
    reaction === ReactionType.Like ? ReactionType.Dislike : ReactionType.Like;

const react = (post: Post, reaction: ReactionType): void => {
    post[`${reaction}d`] = true;
    post[`${reaction}s`]++;
};

const unreact = (post: Post, reaction: ReactionType): void => {
    post[`${reaction}d`] = false;
    post[`${reaction}s`]--;
};