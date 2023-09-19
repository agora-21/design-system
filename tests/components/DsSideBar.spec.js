import { mount } from '@vue/test-utils'
import DsSideBar from '@/components/DsSideBar.vue'

describe('DsSideBar', () => {
  it('renders slot', () => {
    const wrapper = mount(DsSideBar, { slots: { default: 'Slot Link' } })
    expect(wrapper.text()).toEqual('Slot Link')
  })
})
