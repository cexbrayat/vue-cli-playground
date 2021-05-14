import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.user when passed', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        user: { name: 'Cédric' }
      }
    })
    expect(wrapper.text()).toMatch('Cédric')
  })
})
