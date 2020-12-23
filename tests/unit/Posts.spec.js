import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { mount, createLocalVue } from '@vue/test-utils'

import Posts from '@/components/Posts.vue'
import { createRouter } from '@/createRouter'
import { createStore } from '@/createStore'

const createTestVue = (storeState = {}) => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    localVue.use(Vuex)
    
    const store = createStore(storeState)
    const router = createRouter()

    return { store, router, localVue }
}

const createWrapper = (component, options = {}, storeState = {}) => {
    const { localVue, store, router } = createTestVue(storeState)
    return mount(component, {
        store,
        router,
        localVue,
        ...options
    })
}

describe('Posts.vue', () => {
    it('メッセージが渡された場合、レンダーする', () => {
        const message = 'New content coming soon!'

        const wrapper = createWrapper(Posts, {
            propsData: { message }
        })

        expect(wrapper.find('#message').text()).toBe('New content coming soon!')
    })

    it('postsをレンダーする', async () => {
        const wrapper = createWrapper(Posts, {}, {
            posts: [
                { id: 1, title: 'Post_1' },
                { id: 2, title: 'Post_2' }
            ]
        })

        expect(wrapper.findAll('.post').length).toBe(2)
    })
})
