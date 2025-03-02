import './App.css';
import 'prismjs/themes/prism-tomorrow.css';
import prism from 'prismjs';
import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

function App() {
  const [code, setCode] = useState(`
                function sum(){
                  return 1+1;
                }
                `);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  // ye function tab chle ga jab review button pr click hoga. Is function se hum backend pr aik request bheje ge or aus request ke mai hum apna code bheje ge or backend or ai code ko dekhe ga or review krke dega as a reponse.
  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', {
      code,
    });
    setReview(response.data);
    console.log(response.data);
  }

  return (
    <>
      <main>
        {/* left */}
        <div className="left">
          <div className="code">
      
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, 'javascript')
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                border: '1px solid #ddd',
                borderRadius: '5px',
                height: '100%',
                width: '100%',
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>

        {/* right */}
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
