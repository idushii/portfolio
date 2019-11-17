import { ILink, Link } from "./Link";

interface IItem {
  title: string;
  smallTitle: string | false;
  img: string;
  desc: string;
  link: ILink | false;
  links: ILink[];
}

export { IItem }