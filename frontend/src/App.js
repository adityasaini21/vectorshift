import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { 
  Controls, 
  Background, 
  BackgroundVariant,
  ReactFlowProvider,
  addEdge
} from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

// CSS Imports - CRITICAL FOR GRID AND STYLING
import 'reactflow/dist/style.css';
import './styles/global.css';

// Component Imports
import { PipelineToolbar } from './toolbar';
import { SubmitButton } from './submit';

// Node Type Imports
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { ImageNode } from './nodes/imageNode';
import { APINode } from './nodes/apiNode';
import { TransformNode } from './nodes/transformNode';
import { NoteNode } from './nodes/noteNode';
import { TimerNode } from './nodes/timerNode';

const nodeTypes = {
  inputNode: InputNode,
  llmNode: LLMNode,
  outputNode: OutputNode,
  textNode: TextNode,
  imageNode: ImageNode,
  apiNode: APINode,
  transformNode: TransformNode,
  noteNode: NoteNode,
  timerNode: TimerNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const Flow = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();

          const type = event.dataTransfer.getData('application/reactflow');
          if (!type || !reactFlowInstance) return;

          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    
          const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
          });

          const nodeID = getNodeID(type);
          const newNode = {
            id: nodeID,
            type,
            position,
            data: { id: nodeID, nodeType: `${type}` },
          };
    
          addNode(newNode);
        },
        [reactFlowInstance, getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div ref={reactFlowWrapper} style={{ width: '100%', height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                snapGrid={[20, 20]}
                connectionLineType='smoothstep'
                fitView
                deleteKeyCode="Delete"
            >
                <Background 
                  variant={BackgroundVariant.Dots} 
                  gap={24} 
                  size={1.5} 
                  color="#4f8ef7" 
                />
                <Controls 
                  style={{ 
                    background: '#1a1a2e', 
                    border: '1px solid #2a2a4a',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }} 
                />
            </ReactFlow>
        </div>
    );
};

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden', 
      background: '#0f0f1a' 
    }}>
      <PipelineToolbar />
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
