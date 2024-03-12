function filterResponses(responses, filterConditions) {
  return responses.filter((response) =>
    filterConditions.every((filter) => {
      const question = response.questions.find((q) => q.id === filter.id);
      if (!question || question.value === null) return false;
      return evaluateFilter(question, filter);
    })
  );
}

function evaluateFilter(question, filter) {
  switch (filter.condition) {
    case "equals":
      return question.value == filter.value;
    case "does_not_equal":
      return question.value != filter.value;
    case "greater_than":
      return question.type === "DatePicker"
        ? new Date(question.value) > new Date(filter.value)
        : Number(question.value) > Number(filter.value);
    case "less_than":
      return question.type === "DatePicker"
        ? new Date(question.value) < new Date(filter.value)
        : Number(question.value) < Number(filter.value);
    default:
      return true;
  }
}

module.exports = {
  filterResponses,
};
