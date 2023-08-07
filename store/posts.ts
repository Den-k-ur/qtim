import { postDTO } from 'models/post.dto'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePostsStore = defineStore({
    id: 'posts',
    state: () => ({
        posts: [] as postDTO[],
        l: 10,
        p: 1,
    }),

    getters: {
        getPosts: (state): postDTO[] => state.posts.reduce((posts) => posts, [] as postDTO[])
    },

    actions: {
        setPosts(newPosts: postDTO[]) {
            this.posts = newPosts

        },

        setPage(page: number) {
            this.p = page
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));
}