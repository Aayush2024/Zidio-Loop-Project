import FeedbackRow from "./FeedbackRow";

const feedback = [
  {
    customer: "John Smith",
    feedback: "Excellent delivery experience.",
    sentiment: "Positive",
    category: "Delivery",
    status: "Resolved",
  },
  {
    customer: "Emma Watson",
    feedback: "Payment failed during checkout.",
    sentiment: "Negative",
    category: "Payment",
    status: "Pending",
  },
  {
    customer: "Rahul Sharma",
    feedback: "Support team answered quickly.",
    sentiment: "Positive",
    category: "Support",
    status: "Resolved",
  },
  {
    customer: "Sophia Lee",
    feedback: "Packaging could be improved.",
    sentiment: "Neutral",
    category: "Product",
    status: "In Review",
  },
];

export default function FeedbackTable({
  searchTerm,
  sentiment,
  category,
}) {
  const filteredFeedback = feedback.filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.customer.toLowerCase().includes(search) ||
      item.feedback.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.sentiment.toLowerCase().includes(search) ||
      item.status.toLowerCase().includes(search);

    const matchesSentiment =
      sentiment === "All Sentiments" ||
      item.sentiment === sentiment;

    const matchesCategory =
      category === "All Categories" ||
      item.category === category;

    return (
      matchesSearch &&
      matchesSentiment &&
      matchesCategory
    );
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1515]">
      <table className="w-full">
        <thead className="border-b border-white/10 text-left">
          <tr>
            <th className="p-5">Customer</th>
            <th className="p-5">Feedback</th>
            <th className="p-5">Sentiment</th>
            <th className="p-5">Category</th>
            <th className="p-5">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredFeedback.length > 0 ? (
            filteredFeedback.map((item) => (
              <FeedbackRow
                key={item.customer}
                item={item}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="p-8 text-center text-gray-400"
              >
                No feedback found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}