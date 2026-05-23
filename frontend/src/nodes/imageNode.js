import { useState } from 'react';
import BaseNode from './BaseNode';

export const ImageNode = ({ id, data }) => {
  const [format, setFormat] = useState(data?.format || 'PNG');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Image"
      headerColor="#8b5cf6" // purple
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-image` }]}
    >
      <label>
        Format
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="PNG">PNG</option>
          <option value="JPEG">JPEG</option>
          <option value="SVG">SVG</option>
        </select>
      </label>
    </BaseNode>
  );
};
