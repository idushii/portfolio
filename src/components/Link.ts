interface ILink {
    link: string
    title: string

    url: string
}

class Link implements ILink {
    title: string = ''
    link: string = ''

    constructor(title: string, link?: string) {
        if (link) this.title = title
        this.link = link || title
    }

    get url() {
        return this.link
    }

    set url(link)  {
        this.link = link
    }
}

export { ILink, Link }