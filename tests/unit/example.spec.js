import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ContextMenu from '@/components/ContextMenu.vue';

describe('ContextMenu.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ContextMenu, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
