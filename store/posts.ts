import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePostsStore = defineStore({
    id: 'posts',
    state: () => ({
        posts: [] as Record<string, string>[],
        l: 10,
        p: 1,
    })
})