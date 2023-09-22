import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { vi } from 'vitest'
import DsNotification from '@/components/DsNotification.vue'

describe('DsNotification', () => {
  beforeAll(vi.useFakeTimers)
  afterAll(vi.useRealTimers)

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

  it('adds default class to notification', () => {
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
    const notification = wrapper.find('[data-test="notification"]')
    expect(notification.classes()).toEqual(['ds-notification'])
  })

  describe('after 3 seconds', () => {
    it('adds hidden class to notification', async () => {
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

      await vi.advanceTimersByTime(3000)
      await nextTick()

      const notification = wrapper.find('[data-test="notification"]')
      expect(notification.classes()).toEqual(['ds-notification--hidden', 'ds-notification'])
    })
  })
})
