import { mount } from '@vue/test-utils'
import DsLoader from '@/components/DsLoader.vue'

describe('DsLoader', () => {
  it('renders component', () => {
    const wrapper = mount(DsLoader)
    expect(wrapper.exists()).toBeTruthy()
  })
})
