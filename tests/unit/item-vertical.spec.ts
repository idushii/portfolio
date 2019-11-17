import { shallowMount } from '@vue/test-utils'
import ItemVertical from '@/components/item-vertical.vue'

import { IItem } from "@/components/Item";
import { Link } from "@/components/Link";

let defaultProps: IItem = {
  title: 'my title',
  smallTitle: 'my small desc',
  desc: 'my desc',
  img: 'my img link',
  link: new Link('http://same-link.ru'),
  links: [new Link('http://same-link1.ru'), new Link('http://same-link2.ru')],
}

describe('item-vertical.vue', () => {
  it ('renders props when passed', () => {

    const propsData = {...defaultProps}
    const wrapper = shallowMount(ItemVertical, { propsData })
    expect(wrapper.text()).toMatch(propsData.title)

    if (propsData.smallTitle)
      expect(wrapper.text()).toMatch(propsData.smallTitle)
    if (propsData.link)
      expect(wrapper.text()).toMatch(propsData.link.title)

    if (propsData.links.length)
      expect(wrapper.text()).toMatch(propsData.links[0].title)
  })

  it ('renders props whith no main link when passed', () => {
    const propsData = {...defaultProps}
    propsData.link = false
    const wrapper = shallowMount(ItemVertical, { propsData })

    expect(wrapper.find('.default-link').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(true)

  })

  it ('renders props whith no has smallTitle when passed', () => {
    const propsData = {...defaultProps}
    propsData.smallTitle = false
    propsData.link = false
    const wrapper = shallowMount(ItemVertical, { propsData })

    expect(wrapper.find('.card-title.activator').text()).toMatch(propsData.title)
  })
})
