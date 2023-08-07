import { postDTO } from 'models/post.dto'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePostsStore = defineStore({
    id: 'posts',
    state: () => {return {
        allPosts: [] as postDTO[],
        posts: [] as postDTO[],
        l: 10,
        p: 1,
        maxPages: 0,
    }},

    getters: {
        getPosts: (state): postDTO[] => state.posts.reduce((posts) => posts, [] as postDTO[])
    },

    actions: {
        setPosts(newPosts: postDTO[]) {
            console.log(newPosts)
            this.posts = newPosts
        },


        calculateMaxPages(allPosts: postDTO[], limit: number) {
            this.maxPages = Math.floor(allPosts.length / limit)
        },

        setAllPosts(newPosts: postDTO[]) {
            this.allPosts = newPosts
        },

        setPage(page: number) {
            this.p = page
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));
  }