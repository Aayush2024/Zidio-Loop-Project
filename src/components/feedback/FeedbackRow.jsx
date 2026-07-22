import { Pencil, Trash2 } from "lucide-react";

export default function FeedbackRow({
  item,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b border-white/5 transition hover:bg-white/5">
      <td className="px-6 py-5 font-medium">
        {item.customer}
      </td>

      <td className="px-6 py-5">
        {item.feedback}
      </td>

      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
            item.sentiment === "Positive"
              ? "bg-green-500/20 text-green-400"
              : item.sentiment === "Negative"
              ? "bg-red-500/20 text-red-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {item.sentiment}
        </span>
      </td>

      <td className="px-6 py-5">
        {item.category}
      </td>

      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
            item.status === "Resolved"
              ? "bg-green-500/20 text-green-400"
              : item.status === "Pending"
              ? "bg-red-500/20 text-red-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => onEdit(item)}
            className="rounded-lg p-2 text-cyan-400 transition hover:bg-cyan-500/10"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(item.id)}
            className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}