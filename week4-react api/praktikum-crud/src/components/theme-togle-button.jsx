import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Tooltip label={useColorModeValue('Active dark mode', 'Active light mode')} placement='bottom'>
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'blue')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            style={{ color: 'white' }}
          ></IconButton>
        </Tooltip>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton