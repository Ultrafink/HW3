const fs = require('fs').promises;
const path = require('path');

const fileName = path.join(__dirname, 'info.txt');
const content = 'Node.js is awesome!';

async function manageFile() {
  try {
    
    await fs.writeFile(fileName, content);
    console.log('Файл info.txt успешно создан и записан.');

    
    const data = await fs.readFile(fileName, 'utf8');
    console.log('Содержимое файла info.txt:', data);
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

manageFile();
