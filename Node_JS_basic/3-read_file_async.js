const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((line) => {
        const parts = line.split(',');
        const field = parts[3];
        const firstname = parts[0];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve(); // Résolu après traitement
    });
  });
}

module.exports = countStudents;
