import React, { useState } from 'react'
import { Button, Box, Typography } from '@mui/material'

const BannerUpload = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image to upload.')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedImage)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        alert('Image uploaded successfully!')
      } else {
        alert('Failed to upload image.')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <Box gap={'15px'} sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Preview Section */}
      <Box>
        {preview ? (
          <img src={preview} alt='Selected' style={{ width: '100%', height: '164px', borderRadius: '8px' }} />
        ) : (
          <div>
            <Box
              component='label'
              sx={{
                width: '100%',
                height: '164px',
                border: '1px dashed #CD929D',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#888',
                cursor: 'pointer'
              }}
            >
              <input type='file' accept='image/*' hidden onChange={handleImageChange} />
              <Box>
                <Typography sx={{ fontSize: '13px', fontWeight: '600', color: '#212529' }}>Upload banner</Typography>
                <Typography>Image Size: 400x164 pixels</Typography>
              </Box>
            </Box>
          </div>
        )}
      </Box>
    </Box>
  )
}

export default BannerUpload
