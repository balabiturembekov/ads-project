import { Component, createSignal, For } from "solid-js"
import styles from "./Header.module.css"

const Header: Component = () => {
  const [navShow, setNavShow] = createSignal(false)
  const navigations = [
    { text: "Home", urlTo: "#home" },
    { text: "About", urlTo: "#about" },
    { text: "Contact", urlTo: "#contact" },
    { text: "Help", urlTo: "#help" },
  ]

  return (
    <header class={styles.Header}>
      <nav class={styles.Nav}>
        <Logo logoText="Logo" />

        <div
          classList={{
            [styles.NavMenuOpen]: navShow(),
            [styles.NavMenu]: !navShow(),
          }}
        >
          <ul class={styles.NavList}>
            <For each={navigations}>
              {(nav) => (
                <li class={styles.NavItem}>
                  <a href={nav.urlTo} class={styles.NavLink}>
                    {nav.text}
                  </a>
                </li>
              )}
            </For>
          </ul>
          <div class={styles.NavClose} onClick={() => setNavShow(false)}>
            <i class="ri-close-line" />
          </div>
        </div>

        <div class={styles.NavToggle} onClick={() => setNavShow(true)}>
          {" "}
          <i class="ri-menu-line" />
        </div>
      </nav>
    </header>
  )
}

const Logo: Component<{ logoText: string }> = (props) => {
  return (
    <a href="#" class={styles.NavLogo}>
      <i class="ri-bear-smile-fill" />
      {props.logoText}
    </a>
  )
}

export default Header
