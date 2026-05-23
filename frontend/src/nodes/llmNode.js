import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      headerColor="var(--accent-purple)"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
        This is a Large Language Model.
      </div>
    </BaseNode>
  );
}
