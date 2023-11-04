'use client'

import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

type TProps = {
  id: number,
  link: any,
  label: string,
  dropdown: any,
  event?: (param: boolean) => void,
}

const ItemMenu = ({ id, link, label, dropdown, event }: TProps) => {
  const [dropdownBox, setDropdownBox] = useState<boolean>(false);

  return (
    <li id={`menu-item-${id}`} className="menu-item">
      <Link
        className="nav-link-desktop group" href=""
        onClick={() => setDropdownBox((dropdownBox) => !dropdownBox)}
      >
          {label} <HiChevronDown className="chevron-down group:top-2 group-hover:top-4" />
      </Link>
      <ul
        id={`dropdown-item-${id}`}
        className={dropdownBox ? `dropdown-menu active-dropdown-menu`: 'dropdown-menu'}
        onMouseLeave={() => setDropdownBox((dropdownBox) => !dropdownBox)}
      >
        {dropdown &&
          (
            dropdown.map((item: any, index: number) => (
              <li className="dropdown-item" key={index}>
                <Link className="nav-link-dropdown" href="">
                  {item.label}
                </Link>
              </li>
            ))
          )
        }
      </ul>
    </li>
  )
}

export default ItemMenu
