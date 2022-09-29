const fs = require('fs').promises;

const readAllCharaps = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const convert = JSON.parse(fileContent)
  convert.forEach((element) => console.log(`${element.id} - ${element.name}`));
};

readAllCharaps()

const ischaraps = () => {
  
};