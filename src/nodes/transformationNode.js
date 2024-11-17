import NodeWrapper from '../components/NodeWrapper';
import { useState } from 'react';
import { useStore } from '../store';

export const TransformNode = ({ id, data }) => {
  const [transformationType, setTransformationType] = useState(data?.transformationType || 'Uppercase');
  const updateNodeField = useStore(state => state.updateNodeField);

  const handleTransformationChange = (e) => {
    setTransformationType(e.target.value);
    updateNodeField(id, 'transformationType', e.target.value);
  };

  return (
    <NodeWrapper id={id} title="Transform" inputs={['input']} outputs={['output']}>
      <div>
        <label>
          Transformation Type:
          <select value={transformationType} onChange={handleTransformationChange}>
            <option value="Uppercase">Uppercase</option>
            <option value="Lowercase">Lowercase</option>
            <option value="Capitalize">Capitalize</option>
          </select>
        </label>
      </div>
    </NodeWrapper>
  )
}
