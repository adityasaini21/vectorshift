import { useState } from 'react';
import BaseNode from './BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      data={data}
      title="API Call"
      headerColor="#10b981" // green
      inputs={[{ id: `${id}-prompt` }]}
      outputs={[
        { id: `${id}-response` },
        { id: `${id}-error` }
      ]}
    >
      <label>
        Endpoint URL
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="https://api.example.com"
        />
      </label>
      <label>
        Method
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};
