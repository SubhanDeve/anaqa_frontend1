import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill to ensure SSR compatibility
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = () => {
  const [value, setValue] = useState('');
  console.log(value);
  const modules = {
    toolbar: [
      [{ font: [] }], // Font family
      [{ header: [1, 2, 3, false] }], // Header levels
      ['bold', 'italic', 'underline', 'strike'], // Formatting
      [{ color: [] }, { background: [] }], // Text color & background color
      [{ align: [] }], // Alignments
      ['clean'], // Remove formatting
    ],
  };

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'align',
  ];

  return (
    <Box>
      <Typography sx={{ mb: 2, fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>
        Body Text
      </Typography>
      <Box>
        <ReactQuill
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          theme="snow"
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1">Editor Output:</Typography>
        <Box
          sx={{
            p: 2,
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9',
          }}
          dangerouslySetInnerHTML={{ __html: value }}

        />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
