import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <aside style={{ 
            width: '220px', 
            height: '100vh', 
            background: 'var(--bg-secondary)', 
            borderRight: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0',
            boxSizing: 'border-box',
            flexShrink: 0,
            zIndex: 20
        }}>
            <h2 style={{ 
                color: 'var(--text-primary)', 
                fontSize: '16px', 
                padding: '0 20px', 
                marginBottom: '20px',
                fontWeight: '600'
            }}>
                Nodes
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
                <DraggableNode type='inputNode' label='Input' icon='📥' />
                <DraggableNode type='outputNode' label='Output' icon='📤' />
                <DraggableNode type='llmNode' label='LLM' icon='🤖' />
                <DraggableNode type='textNode' label='Text' icon='📝' />
                <DraggableNode type='imageNode' label='Image' icon='🖼️' />
                <DraggableNode type='apiNode' label='API Call' icon='🌐' />
                <DraggableNode type='transformNode' label='Transform' icon='⚙️' />
                <DraggableNode type='noteNode' label='Note' icon='📌' />
                <DraggableNode type='timerNode' label='Timer' icon='⏱️' />
            </div>
        </aside>
    );
};
