import { Box } from '@mui/material'
import React, { useState } from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import Heading from 'src/@core/components/Heading'
import BannerModal from './components/BannerModal'

const AppBanner = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  return (
    <>
      <Box sx={{ display: 'grid', gap: '18px' }}>
        <Heading headingText={'App Banner'} />
        <Box sx={{ display: 'flex', gap: '18px' }}>
          <img src='/images/banner/banner.png' />
          <img src='/images/banner/banner.png' />
        </Box>
        <CustomContainButton text={'New App Banner'} width={'fit-content'} handleFunction={handleOpenModal} />
      </Box>
      <BannerModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default AppBanner
