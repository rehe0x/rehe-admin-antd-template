import { Breadcrumb } from 'antd';
import { useMatches } from "react-router-dom";

const App: React.FC = () => {
  const matches = useMatches();
  const local = matches.at(-1) as any;
  const titles: string[] = local?.data?.title ?? [];
  const items = titles
    .filter(title => title !== '/')
    .map(title => ({ title }));
  return (
    <Breadcrumb
      items={items.length > 0 ? items : [{ title: '' }]}
    />
  );
}

export default App;