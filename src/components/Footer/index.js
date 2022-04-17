import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer>
                  <nav className="d-flex flex-row justify-content-center">
        <a
          className="text-decoration-none icon py-2 px-4"
          href="https://github.com/chris-backes"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />{" "}
        </a>
        <a
          className="text-decoration-none icon py-2 px-4"
          href="https://www.linkedin.com/in/tamara-wilhite/"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />{" "}
        </a>
        <a
          className="text-decoration-none icon py-2 px-4"
          href="https://stackoverflow.com/users/17314835/tamara-wilhite"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-stack-overflow" size="2x" />{" "}
        </a>
      </nav>
        </footer>
    )
}

export default Footer