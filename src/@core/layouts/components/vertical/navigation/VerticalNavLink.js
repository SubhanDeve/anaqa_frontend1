// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'

// ** Configs Import
import themeConfig from 'src/configs/themeConfig'

// ** Custom Icons Import
import MenuIcon from 'src/icons'

import Translations from 'src/layouts/components/Translations'
import CanViewNavLink from 'src/layouts/components/acl/CanViewNavLink'

// ** Util Import
import { handleURLQueries } from 'src/@core/layouts/utils'

// ** Styled Components
const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  borderRadius: 8,
  transition: 'padding-left .25s ease-in-out',
  '&.active': {
    '&, &:hover': {
      // backgroundColor: theme.palette.primary.light,
      backgroundColor: '#FAF5F6',
      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.primary.main
      }
    },
    '& .MuiTypography-root': {
      fontWeight: 700,
      // color: `${theme.palette.common.white} !important`
      color: `#CD929D !important`
    },
    '& .MuiListItemIcon-root': {
      // color: `${theme.palette.common.white} !important`
      color: `#101212 !important`
    }
  }
}))

const MenuItemTextMetaWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const VerticalNavLink = ({
  item,
  parent,
  navHover,
  settings,
  navVisible,
  isSubToSub,
  collapsedNavWidth,
  toggleNavVisibility,
  navigationBorderWidth
}) => {
  // ** Hooks
  const theme = useTheme()
  const router = useRouter()

  // ** Vars
  const { mode, navCollapsed } = settings
  const icon = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon

  const conditionalIconColor = () => {
    if (mode === 'semi-dark') {
      return {
        color: `rgba(${theme.palette.customColors.dark}, ${parent ? 0.6 : 0.87})`
      }
    } else
      return {
        color: parent ? 'text.secondary' : 'text.primary'
      }
  }

  const conditionalBgColor = () => {
    if (mode === 'semi-dark') {
      return {
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.05)`
        }
      }
    } else return {}
  }

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  return (
    <CanViewNavLink navLink={item}>
      <ListItem
        disablePadding
        className='nav-link'
        disabled={item.disabled || false}
        sx={{
          mt: 1.5,
          transition: 'padding .25s ease-in-out',
          px: parent ? '0 !important' : `${theme.spacing(navCollapsed && !navHover ? 2 : 3)} !important`
        }}
      >
        <MenuNavLink
          component={Link}
          {...(item.disabled && { tabIndex: -1 })}
          className={isNavLinkActive() ? 'active' : ''}
          href={item.path === undefined ? '/' : `${item.path}`}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            py: 2.25,
            ...conditionalBgColor(),
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
            pr: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 3,
            pl: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24 - 16) / 8 : 4
          }}
        >
          {isSubToSub ? null : (
            <ListItemIcon
              sx={{
                ...conditionalIconColor(),
                transition: 'margin .25s ease-in-out',
                ...(navCollapsed && !navHover ? { mr: 0 } : { mr: 2 }),
                ...(parent ? { ml: 2, mr: 4 } : {}),
                '& svg': {
                  ...(!parent ? { fontSize: '1.5rem' } : { fontSize: '0.5rem' }),
                  ...(parent && item.icon ? { fontSize: '0.875rem' } : {})
                }
              }}
            >
              {/* <UserIcon icon={icon} /> */}
              <MenuIcon path={icon} color={isNavLinkActive() ? '#CD929D' : ''} isSelected={isNavLinkActive()} />
            </ListItemIcon>
          )}

          <MenuItemTextMetaWrapper
            sx={{
              ...(isSubToSub ? { ml: 8 } : {}),
              ...(navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 })
            }}
          >
            <Typography
              {...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                noWrap: true
              })}
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '22px',
                color: isNavLinkActive() ? '#CD929D' : theme.palette.text.primary, // Dynamic color
              }}
            >
              <Translations text={item.title} />
            </Typography>
            {item.badgeContent ? (
              <Chip
                size='small'
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{ ml: 1.5, '& .MuiChip-label': { px: 2.5, lineHeight: 1.385, textTransform: 'capitalize' } }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </ListItem>
    </CanViewNavLink >
  )
}

export default VerticalNavLink
