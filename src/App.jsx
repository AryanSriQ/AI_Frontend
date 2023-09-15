import { Route, Routes } from 'react-router'
import { Home, Tools, Text_To_Image, Image_To_Story } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/tools/text_to_image' element={<Text_To_Image />} />
        <Route path='/tools/image_to_story' element={<Image_To_Story />} />
      </Routes>
    </div>
  )
}

export default App
