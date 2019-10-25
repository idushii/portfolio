import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: 'Профиль github',
        link: 'https://github.com/idushii',
        prev: '1.jpg',
      },
      {
        title: 'Генерация xlsx файла',
        desc: 'Форма генерации xlsx таблицы с помощью vue js по заранее заданной таблице артикулов',
        link: 'http://simle-db.j693917.myjino.ru/',
        prev: '2.jpg',
      },
      {
        title: 'Список задач',
        desc: 'Реализовано с использованием firebase',
        link: 'https://task-list-2013c.web.app/#/',
        prev: '3.jpg',
      },
      {
        title: 'Заготовка Tower Defence',
        desc: 'Изучение three js (3D игра защита башен)',
        link: 'http://tower-game.surge.sh/',
        prev: '4.jpg',
      },
      {
        title: 'Проект "Изучение китайского языка"',
        desc: 'Реализовано с использованием Nuxt JS',
        links: [{ link: 'http://sayana.surge.sh', title: 'Заготовка front' }, { link: 'https://github.com/idushii/Kitai', title: 'Полный репозиторий' }],
        prev: '5.jpg',
      },
      {
        title: 'Проект "Чат"',
        desc: 'Реализовано с использованием websockets',
        links: [{ link: 'http://chat.j693917.myjino.ru/#/', title: 'Демо front' }, 
        { link: 'https://bitbucket.org/Nic34_/chat/', title: 'Репозиторий front' }, 
        { link: 'https://bitbucket.org/Nic34_/chat-server/', title: 'Репозиторий back' }],
        prev: '6.jpg',
      },
      {
        title: 'Генератор иконок окон',
        desc: 'npm пакет генерации иконок окон',
        links: [{ link: 'http://heavenly-effect.surge.sh/', title: 'Вариант 1' }, 
        { link: 'http://window-icon.surge.sh/', title: 'Вариант 2' }, 
        { link: 'https://www.npmjs.com/package/windows-icon-generate', title: 'Сам npm пакет' }],
        prev: '7.jpg',
      },
      {
        title: 'Bootstrap компоненты',
        desc: 'npm пакет "Bootstrap компоненты"',
        link: "https://www.npmjs.com/package/vue-bootstrap-elements",
        prev: '8.jpg',
      },
      {
        title: 'Расширение vs code',
        desc: 'Расширение для упрощения генерации файл-компонентов vue js. Полное название: "generator-vue-components"',
        links: [
          {link:"https://marketplace.visualstudio.com/items?itemName=Nic34.generator-vue-components", title: 'vs code marketplace'},
          {link:"https://github.com/idushii/generator-vue-components", title: 'Репозиторий'}
        ],
        prev: '9.jpg',
      },
      {
        title: 'PDF make JS',
        desc: 'Изучение генерации pdf с использованием фреймворка pdfmake. Пример взят случайный. Все совпадения данных исключительно случайны.',
        links: [
          {link:"http://pdfmake.surge.sh", title: 'Ссылка'}
        ],
        prev: '10.jpg',
      },
      {
        title: 'Video record API',
        desc: 'Измение процесса записи монитора с использованием api google chrome',
        links: [
          {link:"http://nic34-record-screen.surge.sh", title: 'Ссылка'},
          {link:"https://bitbucket.org/Nic34_/record-screen", title: 'Репозиторий'},
        ],
        prev: '11.jpg',
      },
      {
        title: 'API озвучивания текста',
        desc: 'изучение api озвучки текста',
        links: [
          {link:"http://say.surge.sh/", title: 'Ссылка'},
        ],
        prev: '12.jpg',
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
