import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

import { addFeedback } from "../../services/feedbackService";

const initialForm = {
  customer: "",
  message: "",
  category: "Product",
  sentiment: "Positive",
  status: "Pending",
};

export default function AddFeedbackModal({
  open,
  onClose,
  onSuccess,
}) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.customer.trim() ||
      !form.message.trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      await addFeedback(form);

      toast.success("Feedback added successfully.");

      setForm(initialForm);

      onSuccess?.();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error("Unable to add feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0E1515]">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <h2 className="text-2xl font-bold">
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

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >

          <div>

            <label className="mb-2 block text-sm">
              Customer Name
            </label>

            <input
              name="customer"
              value={form.customer}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#151F1F] p-3 outline-none focus:border-cyan-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm">
              Feedback
            </label>

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#151F1F] p-3 outline-none focus:border-cyan-500"
            />

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div>

              <label className="mb-2 block text-sm">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#151F1F] p-3"
              >
                <option>Product</option>
                <option>Delivery</option>
                <option>Payment</option>
                <option>Support</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm">
                Sentiment
              </label>

              <select
                name="sentiment"
                value={form.sentiment}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#151F1F] p-3"
              >
                <option>Positive</option>
                <option>Neutral</option>
                <option>Negative</option>
              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#151F1F] p-3"
              >
                <option>Pending</option>
                <option>Resolved</option>
                <option>In Review</option>
              </select>

            </div>

          </div>

          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-5 py-2 hover:bg-white/10"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-cyan-500 px-6 py-2 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Feedback"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}