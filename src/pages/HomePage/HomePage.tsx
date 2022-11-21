import { routes } from "../../routing/routes"
import { Group } from "../../components/Group"

const faculties = [
  {
    title: "Wydział Nauk o Zdrowiu i Kulturze Fizycznej",
    path: routes.department(1),
    image: "./images/faculty1.png"
  },
  {
    title: "Wydział Nauk Technicznych i Ekonomicznych",
    path: routes.department(2),
    image: "./images/faculty2.png"
  },
  {
    title: "Wydział Nauk Społecznych i Humanistycznych",
    path: routes.department(3),
    image: "./images/faculty3.png"
  },
  {
    title: "Wychowanie fizyczne",
    path: routes.department(4),
    image: "./images/faculty4.png"
  },
  {
    title: "Erasmus",
    path: routes.department(5),
    image: "./images/faculty5.png"
  }
]

export const HomePage = () => {
  return <Group title="Wydziały" elements={faculties} />
}
