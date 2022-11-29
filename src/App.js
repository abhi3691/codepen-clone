import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { okaidia } from '@uiw/codemirror-theme-okaidia';
function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    // console.log('value:', value);
  }, []);
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height='100vh'
      theme={okaidia}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}

    />
  )
}

export default App