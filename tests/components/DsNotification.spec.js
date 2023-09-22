import { mount } from '@vue/test-utils'
import DsNotification from '@/components/DsNotification.vue'

describe('DsNotification', () => {
  it('renders label', () => {
    const wrapper = mount(DsNotification, {
      props: { label: 'Label notifying something' },
      global: {
        stubs: {
          teleport: {
            template: '<div><slot /></div>'
          }
        }
      }
    })
    expect(wrapper.text()).toEqual('Label notifying something')
  })
})
