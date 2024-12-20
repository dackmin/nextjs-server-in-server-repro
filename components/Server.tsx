import { Tooltip } from './junipero';

const Server = ({ name }) => (
  <div>
    <Tooltip text={name}>
      <div>Hover me</div>
    </Tooltip>
  </div>
);

export default Server;
