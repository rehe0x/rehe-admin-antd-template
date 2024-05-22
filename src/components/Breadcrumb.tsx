import { Breadcrumb } from 'antd';
import { useMatches } from "react-router-dom";

const App = () => {
  const matches = useMatches();
  console.log(matches.at(-1))
  const local = matches.at(-1);
  if (local) {
    const titles = local.data.title;
    const items = []
    titles.forEach(element => {
      items.push({title: element})
    });
    return(
      <Breadcrumb
      style={{
        margin: '16px 0',
      }}
      items={items}
    />
    )
  } else {
    return(
      <Breadcrumb
      style={{
        margin: '16px 0',
      }}
      items={[{title: ''}]}
    />
    )
  }
 
}

export default App;