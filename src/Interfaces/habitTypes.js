export const CATEGORIES = {
  PERSONAL: "Personal",
  WORK: "Work",
  HEALTH: "Health",
  LEARNING: "Learning",
  FINANCE: "Finance"
};

export const CATEGORY_COLORS = {
  [CATEGORIES.PERSONAL]: "bg-blue-100 text-blue-800 border-blue-200",
  [CATEGORIES.WORK]: "bg-purple-100 text-purple-800 border-purple-200",
  [CATEGORIES.HEALTH]: "bg-green-100 text-green-800 border-green-200",
  [CATEGORIES.LEARNING]: "bg-yellow-100 text-yellow-800 border-yellow-200",
  [CATEGORIES.FINANCE]: "bg-emerald-100 text-emerald-800 border-emerald-200"
};

// Helper to build a new habit item
export const createHabitObject = (text, category) => ({
  id: Date.now(),
  text: text,
  category: category,
  completed: false,
  createdAt: new Date().toLocaleDateString()
});
