interface ILink {
    link: string
    title: string

    url: string
}

class Link implements ILink {
    title: string = ''
    link: string = ''

    constructor(link: string, title: string = 'Ссылка') {
        this.link = link
        this.title = title
    }

    get url() {
        return this.link
    }

    set url(link)  {
        this.link = link
    }
}

export { ILink, Link }