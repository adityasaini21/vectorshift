import { useState } from 'react';
import BaseNode from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Note"
      headerColor="#fbbf24" // yellow
      style={{ background: '#fef3c7' }} // light yellow background
      inputs={[]}
      outputs={[]}
    >
      <textarea 
        value={note} 
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your notes here..."
        style={{ 
          background: 'transparent', 
          border: '1px solid #f59e0b',
          color: '#92400e',
          minHeight: '80px'
        }}
      />
    </BaseNode>
  );
};
