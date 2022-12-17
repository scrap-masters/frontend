import { LegendProps } from "../../types/types"

interface LegendTableProps {
  legendData: Array<LegendProps>
}

export const LegendTable = (props: LegendTableProps) => {
  const { legendData } = props
  return (
    <table className="mt-10 table-auto border-collapse border border-slate-300">
      <thead>
        <tr>
          <th className="border border-slate-300 py-2">Skrót</th>
          <th className="border border-slate-300 py-2">Pełna nazwa</th>
        </tr>
      </thead>
      <tbody>
        {legendData?.map((legend) => (
          <tr key={legend.id}>
            <td className="border border-slate-300 px-7 py-2">{legend.slug}</td>
            <td className="border border-slate-300 px-7 py-2">
              {legend.fullName}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
