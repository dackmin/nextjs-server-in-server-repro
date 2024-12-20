import Server from './Server';

const AnotherServer = ({ result }) => (
  <Server name={result.properties.name} />
);

export default AnotherServer;
