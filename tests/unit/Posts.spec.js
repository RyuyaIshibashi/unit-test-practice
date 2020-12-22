import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { mount, createLocalVue } from '@vue/test-utils'

import Posts from '@/components/Posts.vue'
import { createRouter } from '@/createRouter'
import { createStore } from '@/createStore'

describe('Posts.vue', () => {
    it('メッセージが渡された場合、レンダーする', () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        localVue.use(Vuex)

        const store = createStore()
        const router = createRouter()
        const message = 'New content coming soon!'
        const wrapper = mount(Posts, {
            propsData: { message },
            store, router,
        })

        expect(wrapper.find('#message').text()).toBe('New content coming soon!')
    })
})