const app = require('./app');
const activities = require('./myActivities');

// console.log(activities);

app.listen(3001, () => console.log('server running on port 3001'));

app.get('/', (_req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/myActivities/', (req, res) => {
  // const atv = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activities);
});

app.get('/myActivities/:id', (req, res) => {
  const atv = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(atv);
});