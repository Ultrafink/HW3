const fs = require('fs').promises;
const path = require('path');

const folderName = path.join(__dirname, 'myFolder');

async function manageFolder() {
  try {
    
    await fs.mkdir(folderName);
    console.log('Каталог myFolder успешно создан.');

    
    await fs.rmdir(folderName);
    console.log('Каталог myFolder успешно удалён.');
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

manageFolder();
