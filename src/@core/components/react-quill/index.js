import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill to ensure SSR compatibility
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = () => {
  const [value, setValue] = useState('');
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
      <Box
        sx={{
          height: '220px', // Adjust height here
          '& .ql-container': {
            height: 'calc(100% - 20%)', // Subtract toolbar height
          },
        }}
      >
        <ReactQuill
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          theme="snow"
          style={{ height: '100%' }} // Ensure editor takes full height of its container
        />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
