import express from 'express';
import galleryRouter from './src/routes/gallery'; // Import your gallery.ts
import cors from 'cors';
const app = express();
app.use(cors()); // Enable CORS to allow requests from frontend

// Use the paginated gallery route
app.use('/api/images', galleryRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import fs from 'fs';

// const app = express();
// app.use(cors()); // Enable CORS to allow requests from frontend

// // Define the API route to serve JSON data
// app.get('/api/images', (req, res) => {
//   const jsonPath = path.join(__dirname, '../data/image_data.json');
  
//   fs.readFile(jsonPath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading JSON file:', err);
//       res.status(500).json({ message: 'Failed to load data' });
//       return;
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // Set up the server to listen on port 5001
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });