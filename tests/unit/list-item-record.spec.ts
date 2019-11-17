import { shallowMount } from '@vue/test-utils'
import Item from '@/components/list-item-record.vue'

import { IRecord } from "@/components/Item";
import { Link } from "@/components/Link";

let defaultProps: IRecord = {
  inColumn: false,
  title: 'my title',
  smallTitle: false,
  desc: 'my desc',
  img: 'my img link',
  link: new Link('http://same-link.ru'),
  links: [new Link('http://same-link1.ru'), new Link('http://same-link2.ru')],
}

describe('item-vertical.vue', () => {
  it ('проверка подключения вертикальной ячейки', () => {
    const propsData = {...defaultProps} as any
    const wrapper = shallowMount(Item, { propsData })
    
    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find({name: 'ItemVertical'}).exists()).toBe(true)
    expect(wrapper.find({name: 'ItemHorizontal'}).exists()).toBe(false)
  })

  it ('проверка подключения вертикальной ячейки', () => {
    const propsData = {...defaultProps} as any
    propsData.inColumn = true
    const wrapper = shallowMount(Item, { propsData })
    
    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find({name: 'ItemVertical'}).exists()).toBe(false)
    expect(wrapper.find({name: 'ItemHorizontal'}).exists()).toBe(true)
  })


})
