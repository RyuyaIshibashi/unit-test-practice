import Vuex from "vuex"
import { mount, createLocalVue} from "@vue/test-utils"
import ComponentWithVuex from "@/components/ComponentWithVuex.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: "alice"
    }
})

describe("ComponentWithVuex", () => {
    it("実際のVuexストアを用いてusernameをレンダーする", () => {
        const wrapper = mount(ComponentWithVuex, {
            store,
            localVue
        })

        expect(wrapper.find(".username").text()).toBe("alice")
    })

    it("モックのVuexストアを用いてusernameをレンダーする", () => {
        const wrapper = mount(ComponentWithVuex, {
            mocks: {
                $store: {
                    state: { username: "alice" }
                }
            }
        })

        expect(wrapper.find(".username").text()).toBe("alice")
    })
})
