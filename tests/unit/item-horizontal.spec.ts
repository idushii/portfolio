import { shallowMount } from '@vue/test-utils'
import ItemHorizontal from '@/components/item-horizontal.vue'

import { IItem } from "@/components/Item";
import { Link } from "@/components/Link";

let defaultProps: IItem = {
  title: 'my title',
  smallTitle: false,
  desc: 'my desc',
  img: 'my img link',
  link: new Link('http://same-link.ru'),
  links: [new Link('http://same-link1.ru'), new Link('http://same-link2.ru')],
}

describe('item-vertical.vue', () => {
  it ('renders props when passed', () => {

    const propsData = {...defaultProps}
    const wrapper = shallowMount(ItemHorizontal, { propsData })
    expect(wrapper.text()).toMatch(propsData.title)

    if (propsData.link)
      expect(wrapper.text()).toMatch(propsData.link.title)

    if (propsData.links.length)
      expect(wrapper.text()).toMatch(propsData.links[0].title)
  })

  it ('renders props whith no main link when passed', () => {
    const propsData = {...defaultProps}
    propsData.link = false
    const wrapper = shallowMount(ItemHorizontal, { propsData })

    expect(wrapper.find('.default-link').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(true)

  })

})
