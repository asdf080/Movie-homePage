import TvSeries from "./components/TvSeries";
import SearchPage from "./components/SearchPage";
import SndHeader from "./components/SndHeader";
import Trending from "./components/Trending"
import Layout from "./components/Layout";
import PopMovie from './components/PopMovie';

function App() {
  return (
    <div>
    {/* 네비게이션 */}
    <Layout>
       {/* 검색 영역 */}
      <SearchPage/>
      {/* 두번째 헤더 */}
      <SndHeader/>
      {/* 트렌딩 */}
      <Trending/>
      {/* 티비시리즈 */}
      <TvSeries/>
      {/* 영화 */}
      <PopMovie/>
    </Layout>
    </div>
  );
}

export default App;
