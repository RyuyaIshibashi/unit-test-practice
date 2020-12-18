import Vuex from "vuex"
import { mount, createLocalVue} from "@vue/test-utils"
import ComponentWithGetters from "@/components/ComponentWithGetters.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        firstName: "Alice",
        lastName: "Doe"
    },

    getters: {
        fullname: (state) => state.firstName + " " + state.lastName
    }
})

describe("ComponentWithGetters", () => {
    it("実際のVuexゲッターを用いてfullnameをレンダーする", () => {
        const wrapper = mount(ComponentWithGetters, { store, localVue })
    
        expect(wrapper.find(".fullname").text()).toBe("Alice Doe")
    })

    it("モックを用いてfullnameをレンダーする", () => {
        const wrapper = mount(ComponentWithGetters, {
            mocks: {
                $store: {
                    getters: {
                        fullname: "Alice Doe"
                    }
                }
            }
        })

        expect(wrapper.find(".fullname").text()).toBe("Alice Doe")
    })
})
