import { useState } from 'react';
import BaseNode from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 0);
  const [unit, setUnit] = useState(data?.unit || 'seconds');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Timer / Delay"
      headerColor="#ef4444" // red/coral
      inputs={[{ id: `${id}-trigger` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <label>
        Delay
        <input 
          type="number" 
          value={delay} 
          onChange={(e) => setDelay(e.target.value)} 
        />
      </label>
      <label>
        Unit
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
        </select>
      </label>
    </BaseNode>
  );
};
