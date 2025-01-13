import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import CustomContainButton from '../custom-button/CustomContainButton';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully!');
      } else {
        alert('Failed to upload image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      {/* Preview Section */}
      <Box>
        {preview ? (
          <img
            src={preview}
            alt="Selected"
            style={{ width: '100px', height: '100px', borderRadius: '8px' }}
          />
        ) : (
          <Box
            sx={{
              width: 100,
              height: 100,
              border: '1px solid #ECD5D9',
              borderRadius: '10px',
              backgroundColor: '#FAF5F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
            }}
          >

          </Box>
        )}
      </Box>

      {/* Upload Section */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#212529', lineHeight: '14px' }}>Salon&apos;s Profile</Typography>
        <Button
          variant="contained"
          component="label"
          sx={{ textTransform: 'none', boxShadow: 'none', ':hover': { boxShadow: 'none' } }}
        >
          Upload Picture
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default ImageUpload;
