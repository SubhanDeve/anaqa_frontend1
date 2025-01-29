import { Box, Card, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Odometer from 'src/@core/components/Odometer/Odometer'

const PageHeaderCard = ({ title, number, percent, onClick }) => {
  useEffect(() => {
    const titleElements = document.getElementsByClassName('title')
    const percentElements = document.getElementsByClassName('percent')

    function animateToLeft(e) {
      const target = e.target
      if (target.classList.contains('percent')) {
        target.style.transform = 'translateX(-10px)'
        target.style.transition = '200ms'
      }
    }

    function animateToRight(e) {
      const target = e.target
      if (target.classList.contains('title')) {
        target.style.transform = 'translateX(10px)'
        target.style.transition = '200ms'
      }
    }

    function resetAnimation(e) {
      const target = e.target
      target.style.transform = 'translateX(0)'
    }

    // Add event listeners for animations
    ;[...titleElements].forEach(element => {
      element.addEventListener('mouseover', animateToRight)
      element.addEventListener('mouseout', resetAnimation)
    })
    ;[...percentElements].forEach(element => {
      element.addEventListener('mouseover', animateToLeft)
      element.addEventListener('mouseout', resetAnimation)
    })

    // Cleanup event listeners on unmount
    return () => {
      ;[...titleElements].forEach(element => {
        element.removeEventListener('mouseover', animateToRight)
        element.removeEventListener('mouseout', resetAnimation)
      })
      ;[...percentElements].forEach(element => {
        element.removeEventListener('mouseover', animateToLeft)
        element.removeEventListener('mouseout', resetAnimation)
      })
    }
  }, [])

  return (
    <Card elevation={0} sx={{ padding: '24px', cursor: 'pointer' }}>
      <Box sx={{ display: 'grid', gap: '8px' }} onClick={onClick}>
        <Typography sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '18px' }} className='title'>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
          <Odometer number={number} />
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Typography
              sx={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px', color: '#212529' }}
              className='percent'
            >
              +{percent}%
            </Typography>
            <img src='/icons/booking/trade-up.svg' alt='Trade Up' />
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default PageHeaderCard
