import { mount } from '@vue/test-utils'
import DsButton from '@/components/DsButton.vue'

describe('DsButton', () => {
  describe('color', () => {
    describe('when color is plum', () => {
      it('renders button with plum color', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'plum',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--plum')
      })
    })

    describe('when color is indigo', () => {
      it('renders button with indigo color', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'indigo',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--indigo')
      })
    })

    describe('when color is blue', () => {
      it('renders button with blue color', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'blue',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--blue')
      })
    })

    describe('when color is chocolate', () => {
      it('renders button with chocolate color', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'chocolate',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--chocolate')
      })
    })

    describe('when color is green', () => {
      it('renders button with green color', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'green',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--green')
      })
    })

    describe('when color is neutral', () => {
      it('renders button with neutral color', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--neutral')
      })
    })
  })

  describe('size', () => {
    describe('when size is missing', () => {
      it('renders button with medium size', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--medium')
      })
    })

    describe('when size is small', () => {
      it('renders button with size small', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            size: 'small',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--small')
      })
    })

    describe('when size is medium', () => {
      it('renders button with size medium', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            size: 'medium',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--medium')
      })
    })

    describe('when size is large', () => {
      it('renders button with size large', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            size: 'large',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--large')
      })
    })
  })

  describe('variant', () => {
    describe('when variant is filled', () => {
      it('renders button with filled variant', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            variant: 'filled'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--filled')
      })
    })

    describe('when variant is outline', () => {
      it('renders button with outline variant', () => {
        const wrapper = mount(DsButton, {
          props: {
            color: 'neutral',
            variant: 'outline'
          }
        })
        const button = wrapper.find('[data-test="button"]')
        expect(button.classes()).toContain('ds-button--outline')
      })
    })
  })
})
