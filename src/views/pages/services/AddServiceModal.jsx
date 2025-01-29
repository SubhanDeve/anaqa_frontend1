import React from 'react'
import { Box, Dialog, Switch, Typography } from '@mui/material'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'

const AddServiceModal = ({ handleClose, open }) => {
  const Categories = [
    {
      options: 'Spa',
      value: 'spa'
    },
    {
      options: 'Facial',
      value: 'facial'
    },
    {
      options: 'Hair Cut',
      value: 'haircut'
    }
  ]
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
            <FormField label={'Service Name*'} name={'name'} placeholder={'Enter service name'} />
            <FormSelectField label={'Service Category*'} name={'category'} option={Categories} />

            <Box flex>
              <label>Active</label>
              <Switch disableFocusRipple disableRipple disableTouchRipple />
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

export default AddServiceModal
