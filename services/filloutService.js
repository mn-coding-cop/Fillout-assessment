const axios = require("axios");
const { BASE_URL, API_KEY } = require("../config/config");
const { filterResponses } = require("../utils/utils");
exports.getFilteredResponses = async (req, res) => {
  const { formId } = req.params;
  const { filters, ...queryParameters } = req.query;
  const url = `${BASE_URL}/forms/${formId}/submissions`;
  const headers = { Authorization: `Bearer ${API_KEY}` };

  try {
    const apiResponse = await axios.get(url, {
      headers,
      params: queryParameters,
    });
    let { responses, totalResponses, pageCount } = apiResponse.data;

    if (filters) {
      const filterConditions = JSON.parse(filters);
      responses = filterResponses(responses, filterConditions);
      totalResponses = responses.length;
      pageCount = Math.ceil(
        totalResponses / (parseInt(queryParameters.limit) || totalResponses)
      );
    }

    res.json({ responses, totalResponses, pageCount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
