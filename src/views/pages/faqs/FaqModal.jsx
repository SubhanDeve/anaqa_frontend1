import { Box, Dialog, Switch, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'

const FaqModal = ({ handleClose, open }) => {
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: event => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            const email = formJson.email
            console.log(email)
            handleClose()
          }
        }}
        fullWidth
      >
        <Box
          sx={{
            borderRadius: '8px',
            padding: '20px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Add Question</Typography>
              <img src='/icons/Close.svg' onClick={handleClose} style={{ cursor: 'pointer' }} />
            </Box>
            <hr></hr>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mt: '30px' }}>
            <Box>
              <FormField label={'Type'} />
            </Box>
            <Box>
              <FormField label={'Question'} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', color: '#6C757D' }}>Body Text</label>
              <textarea
                style={{ border: '1px solid #E3E3E3', borderRadius: '5px', padding: '8px' }}
                placeholder=''
                rows={5}
              ></textarea>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <label>Active</label>
              <Switch />
            </Box>
          </Box>
          <hr style={{ margin: '20px 0px' }}></hr>
          <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
            <CustomOutlineButton text={'Cancel'} handleFunction={handleClose} width={'25%'} />
            <CustomContainButton text={'Save'} type={'submit'} width={'25%'} />
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default FaqModal
