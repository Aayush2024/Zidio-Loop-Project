import {
  dashboardStats,
  feedbackTrend,
  sentimentData,
  topThemes,
  recentFeedback,
} from "../data/dashboardData";

/*
=========================================
Dashboard Service

Only this file will communicate
with the backend.

When backend is ready,
replace these mock functions
with axios API calls.
=========================================
*/

export const getDashboardStats = async () => {
  return dashboardStats;
};

export const getFeedbackTrend = async () => {
  return feedbackTrend;
};

export const getSentimentData = async () => {
  return sentimentData;
};

export const getTopThemes = async () => {
  return topThemes;
};

export const getRecentFeedback = async () => {
  return recentFeedback;
};