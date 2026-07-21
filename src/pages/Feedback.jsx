import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import PageContainer from "../components/layout/PageContainer";

import FeedbackFilters from "../components/feedback/FeedbackFilters";
import FeedbackTable from "../components/feedback/FeedbackTable";

export default function Feedback() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sentiment, setSentiment] = useState("All Sentiments");
  const [category, setCategory] = useState("All Categories");

  return (
    <DashboardLayout>
      <PageContainer
        title="Feedback Management"
        subtitle="Manage and analyze customer feedback."
      >
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
            searchTerm={searchTerm}
            sentiment={sentiment}
            category={category}
          />
        </div>
      </PageContainer>
    </DashboardLayout>
  );
}