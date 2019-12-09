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
        img: '1.jpg',
      },
      {
        title: 'Профиль stackoverflow',
        desc: 'Мой профиль stackoverflow',
        link: new Link('https://ru.stackoverflow.com/users/208471/%d0%9d%d0%b8%d0%ba%d0%be%d0%bb%d0%b0%d0%b9'),
        img: '14.jpg',
      },
      {
        title: 'Канал VueJS Jobs',
        desc: 'Учебный проект. Представление данных канала в удобном визуальном виде.  Изучение VueJS + ts. Тесты компонентов.',
        links: [
          new Link('https://idushii.github.io/tg-vue-jobs/'),
          new Link('https://github.com/idushii/tg-vue-jobs',  'Репозиторий'),
        ],
        img: '15.jpg'
      },
      {
        title: 'API hh ru',
        desc: 'Изучение api hh ru. Изучение VueJS + ts. Тесты компонентов.',
        links: [
          new Link('https://idushii.github.io/hhru/'),
          new Link('https://github.com/idushii/hhru',  'Репозиторий'),
        ],
        img: '13.jpg'
      },
      {
        title: 'Список задач',
        desc: 'Реализовано с использованием firebase',
        link: new Link('https://task-list-2013c.web.app/#/'),
        img: '3.jpg',
      },
      {
        title: 'Заготовка Tower Defence',
        desc: 'Изучение three js (3D игра защита башен)',
        link: new Link('http://tower-game.surge.sh/'),
        img: '4.jpg',
      },
      {
        smallTitle: '"Изучение китайского языка"',
        title: 'Проект "Изучение китайского языка"',
        desc: 'Реализовано с использованием Nuxt JS',
        links: [
          new Link( 'http://sayana.surge.sh', 'Заготовка front'),
          new Link( 'https://github.com/idushii/Kitai', 'Полный репозиторий')
        ],
        img: '5.jpg',
      },
      {
        title: 'Проект "Чат"',
        desc: 'Реализовано с использованием websockets',
        links: [
          new Link('http://chat.j693917.myjino.ru/#/', 'Демо front',),
          new Link('https://bitbucket.org/Nic34_/chat/', 'Репозиторий front',),
          new Link('https://bitbucket.org/Nic34_/chat-server/', 'Репозиторий back',),
        ],
        img: '6.jpg',
      },
      {
        title: 'Генератор иконок окон',
        desc: 'npm пакет генерации иконок окон',
        links: [
          new Link('http://heavenly-effect.surge.sh/', 'Вариант 1'),
          new Link('http://window-icon.surge.sh/', 'Вариант 2'),
          new Link('https://www.npmjs.com/package/windows-icon-generate', 'Сам npm пакет'),
        ],
        img: '7.jpg',
      },
      {
        title: 'Bootstrap компоненты',
        desc: 'npm пакет "Bootstrap компоненты"',
        link: new Link("https://www.npmjs.com/package/vue-bootstrap-elements"),
        img: '8.jpg',
      },
      {
        title: 'Расширение vs code',
        desc: 'Расширение для упрощения генерации файл-компонентов vue js. Полное название: "generator-vue-components"',
        links: [
          new Link("https://marketplace.visualstudio.com/items?itemName=Nic34.generator-vue-components", 'vs code marketplace'),
          new Link("https://github.com/idushii/generator-vue-components", 'Репозиторий'),
        ],
        img: '9.jpg',
      },
      {
        title: 'PDF make JS',
        desc: 'Изучение генерации pdf с использованием фреймворка pdfmake. Пример взят случайный. Все совпадения данных исключительно случайны.',
        link: new Link("http://pdfmake.surge.sh"),
        img: '10.jpg',
      },
      {
        title: 'Video record API',
        desc: 'Измение процесса записи монитора с использованием api google chrome',
        links: [
          new Link("http://nic34-record-screen.surge.sh"),
          new Link("https://bitbucket.org/Nic34_/record-screen", 'Репозиторий'),
        ],
        img: '11.jpg',
      },
      {
        title: 'API озвучивания текста',
        desc: 'изучение api озвучки текста',
        links: [
          new Link("http://say.surge.sh/"),
        ],
        img: '12.jpg',
      },
      {
        title: 'Генерация xlsx файла',
        desc: 'Форма генерации xlsx таблицы с помощью vue js по заранее заданной таблице артикулов',
        link: new Link('http://simle-db.j693917.myjino.ru/'),
        img: '2.jpg',
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
