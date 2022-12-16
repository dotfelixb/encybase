import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components';
import { Dashboard, ListSales, NoMatch } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/sales">
          <Route index element={<ListSales />}/>
        </Route>
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;