import { Box, Dialog, Switch, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'
import RichTextEditor from 'src/@core/components/react-quill'

const ContractModal = ({ handleClose, open }) => {
  const options = [
    {
      option: 'Spa',
      value: 'spa'
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
            <FormField label={'Name'} name={'name'} placeholder={'Enter template name'} />
            <FormSelectField label={'Category'} name={'category'} option={options} />
            <RichTextEditor />
          </Box>
          <hr style={{ margin: '20px 0px' }}></hr>
          <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
            <CustomOutlineButton text={'Cancel'} handleFunction={handleClose} width={'25%'} />
            <CustomContainButton text={'Save Template'} type={'submit'} width={'28%'} />
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default ContractModal
