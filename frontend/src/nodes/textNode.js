import { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 200, height: 100 });
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    // Dynamic Variables Logic
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...newText.matchAll(regex)];
    const uniqueVars = [...new Set(matches.map(match => match[1]))];
    setVariables(uniqueVars);
  };

  // Auto-resize Logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.max(100, textareaRef.current.scrollHeight + 20);
      
      // Calculate width based on content
      const lines = currText.split('\n');
      const longestLine = Math.max(...lines.map(line => line.length), 20);
      const newWidth = Math.min(500, Math.max(200, longestLine * 8 + 40));
      
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  const varInputs = variables.map((varName, index) => ({
    id: `${id}-var-${varName}`,
    style: {
      background: '#10b981', // green for variables
      top: `${((index + 1) / (variables.length + 1)) * 100}%`
    },
    label: varName
  }));

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      headerColor="var(--accent-blue)"
      inputs={varInputs}
      outputs={[{ id: `${id}-output` }]}
      style={{ width: dimensions.width }}
    >
      <label>
        Text
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange}
          style={{ 
            height: dimensions.height - 60, // approximate adjustment for header/padding
            resize: 'none'
          }}
        />
      </label>
      {variables.length > 0 && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Variables:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {variables.map(v => (
              <span key={v} style={{ fontSize: '10px', background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      )}
    </BaseNode>
  );
}
