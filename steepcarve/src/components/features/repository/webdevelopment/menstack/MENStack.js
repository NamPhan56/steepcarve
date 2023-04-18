
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// const menstack = () => {
    
//   const content = (
//       <></>
//     )

//     return content

// }

const menstack = ({ url }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [url]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default menstack







