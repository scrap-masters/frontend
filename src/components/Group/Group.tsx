import { routes } from "../../routing/routes"
import { Card } from "../Card"

type FacultyProps = {
  title: string
  path: string
  image: string
}

const faculties: Array<FacultyProps> = [
  {
    title: "Kultura Fizyczna",
    path: routes.department(1),
    image: "./images/faculty1.png"
  },
  {
    title: "Techniczne",
    path: routes.department(2),
    image: "./images/faculty2.png"
  },
  {
    title: "Społeczne",
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

export const Group = () => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-center text-[45px] font-semibold">Wydziały</h2>
      <div className="mt-8 grid grid-cols-4">
        {faculties.map((faculty) => (
          <Card
            key={faculty.title}
            title={faculty.title}
            path={faculty.path}
            image={faculty.image}
          />
        ))}
      </div>
    </div>
  )
}
