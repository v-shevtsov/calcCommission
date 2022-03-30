const fetchMock = jest.fn().mockImplementation(() => ({
  json: () => '[{ "date": "2016-01-05" }]',
}));

export default fetchMock;
