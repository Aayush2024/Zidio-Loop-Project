import axios from "axios";

/*
=========================================
 LOOP AI SERVICE
=========================================

Only this file should communicate with
the backend.

When backend is ready, only update:

1. BASE_URL
2. API endpoints

No UI component needs to change.
*/

const api = axios.create({
  baseURL: "http://localhost:8000/api", // <-- change later
  timeout: 30000,
});

export const askLoop = async (question) => {
  try {
    /*
      Expected Backend Request

      POST /ask-loop

      {
         question: "..."
      }
    */

    // ---------- MOCK RESPONSE ----------
    // Remove this block when backend is ready.

    await new Promise((resolve) => setTimeout(resolve, 1200));

    return {
      success: true,
      answer: `## Analysis Complete

Question:

${question}

This is a frontend mock response.

Once your backend is connected, this response
will come from Claude AI.

Expected output:

• Feedback Summary

• Sentiment Analysis

• Complaint Detection

• AI Recommendations

• Business Insights`,
    };

    // ---------- REAL API ----------

    /*
    const { data } = await api.post("/ask-loop", {
      question,
    });

    return data;
    */

  } catch (error) {
    console.error(error);

    return {
      success: false,
      answer:
        "Something went wrong while contacting LOOP AI.",
    };
  }
};

export const getChatHistory = async () => {
  /*
      Future Endpoint

      GET /chat-history
  */

  return [];
};

export const clearChatHistory = async () => {
  /*
      Future Endpoint

      DELETE /chat-history
  */

  return true;
};