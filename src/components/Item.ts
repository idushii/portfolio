import { ILink, Link } from "./Link";

interface IItem {
  title: string;
  smallTitle: string | false;
  img: string;
  desc: string;
  link: ILink | false;
  links: ILink[];
}

interface IRecord {
  inColumn: boolean;
  img: string;
  title: string;
  smallTitle: string | false;
  desc: string;
  link: Link | false;
  links: ILink[];
}


export { IItem, IRecord }