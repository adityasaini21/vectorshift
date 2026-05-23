import { useState } from 'react';
import BaseNode from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [type, setType] = useState(data?.transformType || 'Merge');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      headerColor="#f59e0b" // orange
      inputs={[
        { id: `${id}-input1` },
        { id: `${id}-input2` }
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <label>
        Transform Type
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Merge">Merge</option>
          <option value="Split">Split</option>
          <option value="Filter">Filter</option>
          <option value="Map">Map</option>
        </select>
      </label>
    </BaseNode>
  );
};
