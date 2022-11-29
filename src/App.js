import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
function App() {
  const [datavalue, setValue] = React.useState("console.log('hello world!');")

  //change value function
  const onChange = React.useCallback((value, viewUpdate) => {
    setValue(value)
  }, []);
  return (
    <CodeMirror
      value={datavalue}
      height='100vh'
      theme={okaidia}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      results={10}

    />
  )
}

export default App