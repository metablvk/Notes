import { useMdxComponentsContext } from '../../context/mdx.context';

const Prerequisites: React.FC = () => {
  const prerequisites = useMdxComponentsContext().prerequisites;
  return (
    <>
      <h2>Prerequisites</h2>
      <ol>
        {prerequisites.map((prerequisite, index) => (
          <li key={index}>{prerequisite}</li>
        ))}
      </ol>
    </>
  );
};

export default Prerequisites;
