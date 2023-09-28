import { mount } from '@vue/test-utils'
import DsTimeline from '@/components/DsTimeline.vue'

describe('DsTimeline', () => {
  it('renders items', () => {
    const wrapper = mount(DsTimeline, {
      props: {
        items: [{
          id: 'javascript',
          title: 'Javascript',
          content: 'Content to render about Javascript'
        }, {
          id: 'elixir',
          title: 'Elixir',
          content: 'Content to render about Elixir'
        }]
      }
    })
    expect(wrapper.text()).toContain('Javascript')
    expect(wrapper.text()).toContain('Elixir')
  })

  it('renders dynamic slots', () => {
    const wrapper = mount(DsTimeline, {
      props: {
        items: [{
          id: 'javascript',
          title: 'Javascript',
          content: 'Content to render about Javascript'
        }, {
          id: 'elixir',
          title: 'Elixir',
          content: 'Content to render about Elixir'
        }]
      },
      slots: {
        javascript: '<button data-test="button-javascript">Learn more about Javascript</button>',
        elixir: '<button data-test="button-elixir">Learn more about Elixir</button>'
      }
    })
    expect(wrapper.find('[data-test="button-javascript"]').text()).toEqual('Learn more about Javascript')
    expect(wrapper.find('[data-test="button-elixir"]').text()).toEqual('Learn more about Elixir')
  })

  describe('when slots are not given', () => {
    it('renders item.content', () => {
      const wrapper = mount(DsTimeline, {
        props: {
          items: [{
            id: 'javascript',
            title: 'Javascript',
            content: 'Content to render about Javascript'
          }, {
            id: 'elixir',
            title: 'Elixir',
            content: 'Content to render about Elixir'
          }]
        }
      })
      expect(wrapper.text()).toContain('Content to render about Javascript')
      expect(wrapper.text()).toContain('Content to render about Elixir')
    })
  })
})
