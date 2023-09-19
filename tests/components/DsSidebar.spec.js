import { mount } from '@vue/test-utils'
import DsSidebar from '@/components/DsSidebar.vue'

describe('DsSidebar', () => {
  it('renders slot', () => {
    const wrapper = mount(DsSidebar, { slots: { default: 'Slot Link' } })
    expect(wrapper.text()).toEqual('Slot Link')
  })
})
