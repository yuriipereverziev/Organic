import React, { Component } from 'react';
import Spinner from '../components/Spinner/Spinner';

const withData = (View, getData) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      getData()
        .then(this.onProductLoaded);
    }

    onProductLoaded = (data) => {
      this.setState(() => {
        const result = data.map((item, index) => ({
          ...item,
          order: index + 1
        }));

        return {
          data: result,
        };
      });
    };

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
