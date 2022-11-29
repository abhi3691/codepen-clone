import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import useLocalStorage from './hooks/useLocalSotrage';
function App() {
  const [value, setValue] = useLocalStorage("console.log('hello world!');")

  //change value function
  const onChange = React.useCallback((values, viewUpdate) => {
    setValue(values)
  }, []);
  return (
    <CodeMirror
      value={value}
      height='100vh'
      theme={okaidia}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      results={10}

    />
  )
}

export default App