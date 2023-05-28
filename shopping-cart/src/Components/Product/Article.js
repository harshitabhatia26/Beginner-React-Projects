import React from "react";

class Foods extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        foods: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/food/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              foods: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, foods } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {foods.map(food => (
              <li key={food.food_id}>
                {food.food_name} {food.food_price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default Foods ;