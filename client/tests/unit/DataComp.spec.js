import { shallowMount } from '@vue/test-utils'
import DataComp from '@/components/DataComp'

describe('passed props are displayed', () => {
  it('renders props.msg when passed', () => {
    const msg = { agileType: 'value', statement: 'test' }
    const wrapper = shallowMount(DataComp, {
      propsData: { values:msg  }
    })
    expect(wrapper.vm.values).toBe(msg)
  })
})

describe('opens arning dialog when delete is clicked', () => {
  it('renders props.msg when passed', () => {
    const msg = { agileType: 'value', statement: 'test' }
    const wrapper = shallowMount(DataComp, {
      propsData: { values:msg  }
    })
    expect(wrapper.vm.values).toBe(msg)
  })
})
