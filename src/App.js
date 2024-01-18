import TvSeries from "./components/TvSeries";
import SearchPage from "./components/SearchPage";
import SndHeader from "./components/SndHeader";
import Trending from "./components/Trending"
import Layout from "./components/Layout";

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
      {/* 최신 예고편 */}
      <TvSeries/>
    </Layout>
    </div>
  );
}

export default App;
