/*import { feedbackList } from "../data/feedbackData";

let feedback = [...feedbackList];

export async function getFeedback() {
  return [...feedback];
}

export async function addFeedback(data) {
  const newFeedback = {
    id: Date.now(),
    ...data,
    date: new Date().toISOString().slice(0, 10),
  };

  feedback.unshift(newFeedback);

  return newFeedback;
}

export async function updateFeedback(id, updatedData) {
  feedback = feedback.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updatedData,
        }
      : item
  );
}

export async function deleteFeedback(id) {
  feedback = feedback.filter(
    (item) => item.id !== id
  );
}

export async function uploadFeedbackCSV(file) {
  console.log(file);

  return {
    success: true,
  };
}*/