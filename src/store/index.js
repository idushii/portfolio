import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { Link } from "@/components/Link";

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: 'Профиль github',
        desc: 'Мой профиль github',
        link: new Link('https://github.com/idushii'),
        prev: '1.jpg',
      },
      {
        title: 'Генерация xlsx файла',
        desc: 'Форма генерации xlsx таблицы с помощью vue js по заранее заданной таблице артикулов',
        link: new Link('http://simle-db.j693917.myjino.ru/'),
        prev: '2.jpg',
      },
      {
        title: 'Список задач',
        desc: 'Реализовано с использованием firebase',
        link: new Link('https://task-list-2013c.web.app/#/'),
        prev: '3.jpg',
      },
      {
        title: 'Заготовка Tower Defence',
        desc: 'Изучение three js (3D игра защита башен)',
        link: new Link('http://tower-game.surge.sh/'),
        prev: '4.jpg',
      },
      {
        smallTitle: '"Изучение китайского языка"',
        title: 'Проект "Изучение китайского языка"',
        desc: 'Реализовано с использованием Nuxt JS',
        links: [
          new Link( 'http://sayana.surge.sh', 'Заготовка front'),
          new Link( 'https://github.com/idushii/Kitai', 'Полный репозиторий')
        ],
        prev: '5.jpg',
      },
      {
        title: 'Проект "Чат"',
        desc: 'Реализовано с использованием websockets',
        links: [
          new Link('http://chat.j693917.myjino.ru/#/', 'Демо front',),
          new Link('https://bitbucket.org/Nic34_/chat/', 'Репозиторий front',),
          new Link('https://bitbucket.org/Nic34_/chat-server/', 'Репозиторий back',),
        ],
        prev: '6.jpg',
      },
      {
        title: 'Генератор иконок окон',
        desc: 'npm пакет генерации иконок окон',
        links: [
          new Link('http://heavenly-effect.surge.sh/', 'Вариант 1'),
          new Link('http://window-icon.surge.sh/', 'Вариант 2'),
          new Link('https://www.npmjs.com/package/windows-icon-generate', 'Сам npm пакет'),
        ],
        prev: '7.jpg',
      },
      {
        title: 'Bootstrap компоненты',
        desc: 'npm пакет "Bootstrap компоненты"',
        link: new Link("https://www.npmjs.com/package/vue-bootstrap-elements"),
        prev: '8.jpg',
      },
      {
        title: 'Расширение vs code',
        desc: 'Расширение для упрощения генерации файл-компонентов vue js. Полное название: "generator-vue-components"',
        links: [
          new Link("https://marketplace.visualstudio.com/items?itemName=Nic34.generator-vue-components", 'vs code marketplace'),
          new Link("https://github.com/idushii/generator-vue-components", 'Репозиторий'),
        ],
        prev: '9.jpg',
      },
      {
        title: 'PDF make JS',
        desc: 'Изучение генерации pdf с использованием фреймворка pdfmake. Пример взят случайный. Все совпадения данных исключительно случайны.',
        link: new Link("http://pdfmake.surge.sh"),
        prev: '10.jpg',
      },
      {
        title: 'Video record API',
        desc: 'Измение процесса записи монитора с использованием api google chrome',
        links: [
          new Link("http://nic34-record-screen.surge.sh"),
          new Link("https://bitbucket.org/Nic34_/record-screen", 'Репозиторий'),
        ],
        prev: '11.jpg',
      },
      {
        title: 'API озвучивания текста',
        desc: 'изучение api озвучки текста',
        links: [
          new Link("http://say.surge.sh/"),
        ],
        prev: '12.jpg',
      },
      {
        title: 'API hh ru',
        desc: 'Изучение api hh ru',
        links: [
          new Link('https://idushii.github.io/hhru/'),
          new Link('https://github.com/idushii/hhru',  'Репозиторий'),
        ],
        prev: '13.jpg'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
