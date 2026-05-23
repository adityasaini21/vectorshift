import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://flowforge-backend-owsm.onrender.com/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      alert(
        `Pipeline Analysis Results:\n\n` +
        `📊 Number of Nodes: ${data.num_nodes}\n` +
        `🔗 Number of Edges: ${data.num_edges}\n` +
        `✅ Is Valid DAG: ${data.is_dag ? 'Yes ✓' : 'No ✗'}\n\n` +
        `${data.is_dag ? 
          '✅ Your pipeline is a valid Directed Acyclic Graph!' : 
          '⚠️ Warning: Your pipeline contains cycles and is NOT a DAG.'}`
      );
    } catch (error) {
      alert(`Error connecting to backend: ${error.message}\n\nMake sure the backend server is running on port 8001.`);
    }
  };

  return (
    <div style={{ 
      position: 'absolute', 
      bottom: '30px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 10 
    }}>
      <button 
        onClick={handleSubmit}
        style={{
          background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)',
          color: 'white',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '14px',
          boxShadow: '0 4px 15px rgba(79,142,247,0.3)',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        🚀 Submit Pipeline
      </button>
    </div>
  );
};
