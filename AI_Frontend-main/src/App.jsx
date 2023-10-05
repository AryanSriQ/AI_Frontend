import { Route, Routes } from "react-router";
import {
  Home,
  Tools,
  Pdf_Chat,
  Image_To_Story,
  Text_To_Music,
  Translate,
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/pdf_chat" element={<Pdf_Chat />} />
        <Route path="/tools/image_to_story" element={<Image_To_Story />} />
        <Route path="/tools/text_to_music" element={<Text_To_Music />} />
        <Route path="/tools/translate" element={<Translate />} />
      </Routes>
    </div>
  );
}

export default App;
