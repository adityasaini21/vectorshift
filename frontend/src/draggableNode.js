export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      event.dataTransfer.setData('application/reactflow', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        style={{ 
          cursor: 'grab', 
          margin: '6px 16px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: 'var(--bg-node)',
          border: '1px solid var(--border-color)',
          padding: '10px 14px',
          transition: 'all 0.2s ease',
          color: 'var(--text-primary)',
          fontSize: '13px',
          fontWeight: '500',
          gap: '10px'
        }} 
        draggable
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-blue)';
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = 'var(--shadow)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-color)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
          <span style={{ fontSize: '16px' }}>{icon}</span>
          <span>{label}</span>
      </div>
    );
  };
  