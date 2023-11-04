'use client'

import Link from "next/link";

type TProps = {
  id: number,
  link: any,
  label: string,
  event?: (param: boolean) => void,
}

const ItemMenu = ({ id, label, event }: TProps) => {

  return (
    <li id={`menu-item-${id}`} className="menu-item">
      <Link
        className="nav-link-mobile group" href=""
        onClick={() => event!(false)}
      >
        {label}
      </Link>
    </li>
  )
}

export default ItemMenu
