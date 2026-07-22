import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

const initialForm = {
  customer: "",
  feedback: "",
  category: "Delivery",
  sentiment: "Positive",
  status: "Pending",
};

export default function AddFeedbackModal({
  open,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(initialForm);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = () => {
  if (
    !form.customer.trim() ||
    !form.feedback.trim()
  ) {
    toast.error("Please fill all required fields.");
    return;
  }

  onSave(form);

  toast.success("Feedback added successfully!");

  setForm(initialForm);
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0E1515]">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <h2 className="text-2xl font-semibold">
            Add Feedback
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}

        <div className="space-y-5 p-6">

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Customer Name
            </label>

            <input
              name="customer"
              value={form.customer}
              onChange={handleChange}
              placeholder="Enter customer name"
              className="w-full rounded-xl border border-white/10 bg-[#141C1C] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Feedback
            </label>

            <textarea
              rows={4}
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              placeholder="Write customer feedback..."
              className="w-full rounded-xl border border-white/10 bg-[#141C1C] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#141C1C] px-4 py-3"
              >
                <option>Delivery</option>
                <option>Payment</option>
                <option>Support</option>
                <option>Product</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Sentiment
              </label>

              <select
                name="sentiment"
                value={form.sentiment}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#141C1C] px-4 py-3"
              >
                <option>Positive</option>
                <option>Neutral</option>
                <option>Negative</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-300">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#141C1C] px-4 py-3"
              >
                <option>Pending</option>
                <option>Resolved</option>
                <option>In Review</option>
              </select>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-white/10 p-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-5 py-2 hover:bg-white/10"
          >
            Cancel
          </button>

           <button
            onClick={handleSubmit}
            className="rounded-xl bg-cyan-500 px-6 py-2 font-medium text-black hover:bg-cyan-400"
           >
            Save Feedback
           </button>

        </div>

      </div>

    </div>
  );
}