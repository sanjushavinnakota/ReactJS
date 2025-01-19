import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Pages/Main/Main'
import Poetryby from './Pages/Poetryby/Poetryby'
import Poetryby1 from './Pages/Poetryby1/Poetryby1'
import Navbar from './components/Navbar/Navbar'
import Who from './Pages/Who/Who'
import Eulogies from './Pages/Eulogies/Eulogies'
import Eulogies1 from './Pages/Eulogies1/Eulogies1'
import Temples from './Pages/Temple/Temples'
import PhotoPasttime from './Pages/PhotoPasttime/PhotoPasttime'
import Disappearence from './Pages/Disappearence/Disappearence';
import PrabhupadaAnalogies from './Pages/Analogy/PrabhupadaAnalogies';
import PrabhupadaStories from './Pages/PrabhupadaStories/PrabhupadaStories'
import Quotes from './Pages/Quotes/Quotes'
import Memories from './Pages/Memories/Memories'
import Biography from './Pages/Biography/Biography'
import QuickFacts from './Pages/Facts/QuickFacts'
import Prophecies from './Pages/Prophecies/Prophecies'
import Poetryfor from './Pages/Poetryfor/Poetryfor'
import DisappearMain from './Pages/DisappearMain/DisappearMain';
import Anxity from './Pages/Anxity/Anxity';
import Anxity1 from './Pages/Anxity/Anxity1';
import Footer from './components/Footer/Footer'
import Searchbar from './components/Searchbar/Searchbar'
import Rarepicturesmain12 from './Pages/Rarepictures12/Rarepicturesmain12'
import Rarepictures from './Pages/Rarepictures/Rarepictures'




function App() {
  return (
    
   <> 


<BrowserRouter>
<Navbar />

<Routes>




<Route index element={<Main />} />
  <Route path ="/main" element={<Main />} />
  
  <Route index element={<Who />} />
  <Route path ="/who" element={<Who />} />

  <Route index element={< Rarepictures />} />
  <Route path ="/Rarepictures" element={< Rarepictures />} />

  <Route index element={<Rarepicturesmain12 />} /> 
  <Route path ="/Rarepicturesmain12" element={<Rarepicturesmain12 />} />
    
  <Route index element={<Anxity />} />
  <Route path ="/Anxity" element={<Anxity />} />

  <Route index element={<Anxity1 />} />
  <Route path ="/Anxity1" element={<Anxity1 />} />

  <Route index element={<Searchbar />} />
  <Route path ="/Searchbar" element={<Searchbar />} />

  <Route index element={<Poetryby1 />} />
  <Route path ="/Poetryby1" element={<Poetryby1 />} />

  <Route index element={<Biography />} />
  <Route path ="/Biography" element={<Biography />} />

  <Route index element={<Poetryfor />} />
  <Route path ="/Poetryfor" element={<Poetryfor />} />

  <Route index element={< Memories/>} />
  <Route path ="/Memories" element={<Memories />} />

  <Route index element={<Temples />} />
  <Route path ="/Temples" element={<Temples />} />

  <Route index element={<Prophecies/>} />
  <Route path ="/Prophecies" element={<Prophecies />} />

  <Route index element={<DisappearMain/>} />
  <Route path ="/DisappearMain" element={<DisappearMain />} />


  <Route index element={< Eulogies />} />
  <Route path ="/Eulogies" element={< Eulogies />} />

  <Route index element={< Eulogies1 />} />
  <Route path ="/Eulogies1" element={< Eulogies1 />} />

  <Route index element={<QuickFacts />} />
  <Route path ="/quickfacts" element={<QuickFacts />} />


  <Route index element={<Quotes />} />
  <Route path ="/Quotes" element={<Quotes />} />


  <Route index element={< Disappearence/>} />
  <Route path ="/Disappearence" element={< Disappearence />} />
  
  <Route index element={<Poetryby />} />
  <Route path ="/poetryby" element={<Poetryby />} />


  <Route index element={< PhotoPasttime/>} />
  <Route path ="/photopasttime" element={<PhotoPasttime />} />

  <Route index element={<PrabhupadaStories/>} />
  <Route path ="/prabhupadastories" element={<PrabhupadaStories />} />


  <Route index element={<PrabhupadaAnalogies />} />
  <Route path ="/PrabhupadaAnalogies" element={<PrabhupadaAnalogies />} />


</Routes>
<Footer />
</BrowserRouter>

</>

    

   

    
    
  

  );
}

export default App;