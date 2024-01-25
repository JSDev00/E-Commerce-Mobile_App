import { Box } from 'native-base'
import HomeProducts from '../components/HomeProducts'
import HomeSearch from '../components/HomeSearch'
const HomeScreen = () => {
  return (
      <Box flex={1} >
        <HomeSearch/>
        <HomeProducts/>
      </Box>
  )
}

export default HomeScreen
