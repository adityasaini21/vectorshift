import { Handle, Position } from 'reactflow';

const BaseNode = ({ 
  id, 
  data, 
  title, 
  inputs = [], 
  outputs = [], 
  children, 
  headerColor = '#4f8ef7', 
  icon,
  style = {}
}) => {
  return (
    <div 
      style={{
        background: 'var(--bg-node)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        boxShadow: 'var(--shadow)',
        minWidth: '200px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        ...style
      }}
      className="custom-node"
    >
      {/* Header */}
      <div 
        style={{
          background: headerColor,
          padding: '10px 14px',
          borderRadius: '12px 12px 0 0',
          color: 'white',
          fontWeight: '600',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        className="node-header"
      >
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </div>

      {/* Body */}
      <div 
        style={{
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
        className="node-body"
      >
        {children}
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id || `${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id || `${id}-input-${index}`}
          style={{
            top: `${((index + 1) / (inputs.length + 1)) * 100}%`,
            ...input.style
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id || `${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id || `${id}-output-${index}`}
          style={{
            top: `${((index + 1) / (outputs.length + 1)) * 100}%`,
            ...output.style
          }}
        />
      ))}

    </div>
  );
};

export default BaseNode;
