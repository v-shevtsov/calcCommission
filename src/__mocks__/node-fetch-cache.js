const fetchMock = jest.fn().mockImplementation(() => ({
  json: () => '{"percents":0.03,"max":{"amount":5,"currency":"EUR"}}',
}));

export default fetchMock;
