import React from 'react';
import T from 'prop-types';
import Card from '../Card';
import removeEmpty from '../../../../modules/removeEmpty.js';

const createCreateComponent = ({
  empty,
  displayName = 'CreateComponent',
  className,
  title,
  itemType,
}) => Component => {
  class CreateComponent extends React.Component {
    componentWillMount() {
      this.props.setForm(empty());
    }

    render() {
      const {item, error, create, creating} = this.props;

      return (
        <Card className={className || displayName}>
          <h1>{title}</h1>
          <Component 
            merakiDevice={item}
            onSubmit={(body) => create(removeEmpty(body), empty())}
            error={error}
            loading={creating}
          />
        </Card>
      )
    }
  }

  CreateComponent.propTypes = {
    item: T.shape(itemType),
    error: T.object,
    create: T.func,
    creating: T.bool,
    setForm: T.func.isRequired,
  };

  CreateComponent.displayName = displayName;

  return CreateComponent;
};

export default createCreateComponent;
