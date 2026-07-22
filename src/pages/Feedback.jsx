import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import PageContainer from "../components/layout/PageContainer";

import FeedbackHeader from "../components/feedback/FeedbackHeader";
import FeedbackFilters from "../components/feedback/FeedbackFilters";
import FeedbackTable from "../components/feedback/FeedbackTable";
import AddFeedbackModal from "../components/feedback/AddFeedbackModal";
import EditFeedbackModal from "../components/feedback/EditFeedbackModal";
import DeleteConfirmationModal from "../components/common/DeleteConfirmationModal";

import { exportFeedbackCSV } from "../utils/exportCSV";
import { toast } from "sonner";

export default function Feedback() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sentiment, setSentiment] = useState("All Sentiments");
  const [category, setCategory] = useState("All Categories");

  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [feedbackToDelete, setFeedbackToDelete] = useState(null);

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      customer: "John Smith",
      feedback: "Excellent delivery experience.",
      sentiment: "Positive",
      category: "Delivery",
      status: "Resolved",
    },
    {
      id: 2,
      customer: "Emma Watson",
      feedback: "Payment failed during checkout.",
      sentiment: "Negative",
      category: "Payment",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Rahul Sharma",
      feedback: "Support team answered quickly.",
      sentiment: "Positive",
      category: "Support",
      status: "Resolved",
    },
    {
      id: 4,
      customer: "Sophia Lee",
      feedback: "Packaging could be improved.",
      sentiment: "Neutral",
      category: "Product",
      status: "In Review",
    },
  ]);

  // Filtered Feedback
  const filteredFeedback = feedback.filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.customer.toLowerCase().includes(search) ||
      item.feedback.toLowerCase().includes(search);

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

  // Delete
  const handleDelete = (id) => {
    setFeedbackToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setFeedback((prev) =>
      prev.filter((item) => item.id !== feedbackToDelete)
    );

    toast.success("Feedback deleted successfully!");

    setShowDeleteModal(false);
    setFeedbackToDelete(null);
  };

  // Edit
  const handleEdit = (item) => {
    setSelectedFeedback(item);
    setShowEditModal(true);
  };

  const handleUpdateFeedback = (updatedFeedback) => {
    setFeedback((prev) =>
      prev.map((item) =>
        item.id === updatedFeedback.id
          ? updatedFeedback
          : item
      )
    );

    setShowEditModal(false);
    setSelectedFeedback(null);

    toast.success("Feedback updated successfully!");
  };

  return (
    <DashboardLayout>
      <PageContainer
        title="Feedback Management"
        subtitle="Manage and analyze customer feedback."
      >
        <FeedbackHeader
          onAdd={() => setShowAddModal(true)}
          onExport={() => exportFeedbackCSV(filteredFeedback)}
        />

        <FeedbackFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sentiment={sentiment}
          setSentiment={setSentiment}
          category={category}
          setCategory={setCategory}
        />

        <div className="mt-6">
          <FeedbackTable
            feedback={filteredFeedback}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </PageContainer>

      <AddFeedbackModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={(newFeedback) => {
          setFeedback((prev) => [
            ...prev,
            {
              id: Date.now(),
              ...newFeedback,
            },
          ]);

          toast.success("Feedback added successfully!");

          setShowAddModal(false);
        }}
      />

      <EditFeedbackModal
        open={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedFeedback(null);
        }}
        feedback={selectedFeedback}
        onSave={handleUpdateFeedback}
      />

      <DeleteConfirmationModal
        open={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setFeedbackToDelete(null);
        }}
        onConfirm={confirmDelete}
      />
    </DashboardLayout>
  );
}