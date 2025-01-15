import { Box, Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import ContractModal from './contractModal'
import ReactQuill from 'src/@core/components/react-quill'
import RichTextEditor from 'src/@core/components/react-quill'

const ContractPage = () => {
  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'color', 'background', 'align']

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <CustomPageHeading text={'Contract'} addButton={'Add Template'} openModal={handleModalOpen} />
      </Box>
      <Box>
        <Grid container gap={'20px'}>
          <Grid item xs={5.8} md={2}>
            <Card sx={{ width: 'fit-content' }} elevation={0}>
              <Typography
                sx={{
                  backgroundColor: '#CD929D',
                  color: 'white',
                  padding: '12px 10px',
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: '14px',
                  fontWeight: '500',
                  textAlign: 'center'
                }}
              >
                Template 1
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '5px 10px 0px 10px', gap: '18px' }}>
                <Typography sx={{ fontSize: { xs: '8px', md: '12px' }, fontWeight: '400', lineHeight: '14px' }}>
                  Lorem ipsum dolor sit amet consectetur. Egestas dui in tellus morbi. Enim nisl lectus mattis laoreet
                  id arcu. Luctus lectus diam iaculis aliquam mus morbi dui pharetra. Condimentum pretium at{' '}
                  <span style={{ fontWeight: '700', color: '#B76271' }}>20% Commission</span>. Egestas eu ullamcorper
                  eget viverra in risus. Amet non tincidunt feugiat posuere magna maecenas. Dui sed urna tempus
                  ullamcorper nisl. Sapien tincidunt viverra viverra nisi velit.
                </Typography>
                <hr></hr>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px 10px' }}>
                <img src='/icons/contract/view.svg' width={'36px'} />
                <img src='/icons/contract/edit.svg' width={'36px'} />
                <img src='/icons/contract/download.svg' width={'36px'} />
                <img src='/icons/contract/delete.svg' width={'36px'} />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={5.6} md={2}>
            <Card sx={{ width: 'fit-content' }} elevation={0}>
              <Typography
                sx={{
                  backgroundColor: '#CD929D',
                  color: 'white',
                  padding: '12px 10px',
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: '14px',
                  fontWeight: '500',
                  textAlign: 'center'
                }}
              >
                Template 1
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: '5px 10px 0px 10px', gap: '18px' }}>
                <Typography sx={{ fontSize: { xs: '8px', md: '12px' }, fontWeight: '400', lineHeight: '14px' }}>
                  Lorem ipsum dolor sit amet consectetur. Egestas dui in tellus morbi. Enim nisl lectus mattis laoreet
                  id arcu. Luctus lectus diam iaculis aliquam mus morbi dui pharetra. Condimentum pretium at{' '}
                  <span style={{ fontWeight: '700', color: '#B76271' }}>15% Commission</span>. Egestas eu ullamcorper
                  eget viverra in risus. Amet non tincidunt feugiat posuere magna maecenas. Dui sed urna tempus
                  ullamcorper nisl. Sapien tincidunt viverra viverra nisi velit.
                </Typography>

                <hr></hr>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px 10px' }}>
                <img src='/icons/contract/view.svg' width={'36px'} />
                <img src='/icons/contract/edit.svg' width={'36px'} />
                <img src='/icons/contract/download.svg' width={'36px'} />
                <img src='/icons/contract/delete.svg' width={'36px'} />
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Box>
          <ContractModal open={open} handleClose={handleClose} />
        </Box>
      </Box>
    </Box>
  )
}

export default ContractPage
