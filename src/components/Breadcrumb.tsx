import { Breadcrumb } from 'antd';
import { useMatches } from "react-router-dom";

const App = () => {
  const matches = useMatches();
  const local = matches.at(-1);
  if (local?.data?.title) {
    const titles = local.data.title;
    const items = []
    titles.forEach((element,index) => {
      if (element !== '/') {
        items.push({title: element})
      }
    });
    return(
      <Breadcrumb
      items={items}
    />
    )
  } else {
    return(
      <Breadcrumb
      items={[{title: ''}]}
    />
    )
  }
 
}

export default App;