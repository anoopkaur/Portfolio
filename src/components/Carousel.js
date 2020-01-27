import React from "react";
import Card from "../components/Card";

import Blank from "../assets/images/blank.png";
import BlankSecond from "../assets/images/blank2.jpg";
import BlankThird from "../assets/images/placeholder.";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Recipe Finder App",
          subTitle: "Hundreds of recipes at your fingertips!",
          imgSrc: Blank,
          link: "https://github.com/",
          selected: false
        },
        {
          id: 1,
          title: "Fruit Machine",
          subTitle: "Fruit machine game!",
          imgSrc: BlankSecond,
          link: "https://github.com/",
          selected: false
        },
        {
          id: 2,
          title: "Marriage Website",
          subTitle: "Bespoke wedding website",
          imgSrc: BlankThird,
          link: "https://github.com/",
          selected: false
        }
      ]
    };
  }

  // this is in charge of the caroursel
  // if the item is selected then set it to false, if not then select to true
  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    // above - retrieves all items.
    //       - goes to the one with the same id as has been selected.
    //       - toggles the selected property.

    // below - loops thru each item
    //       - item which isn't selected - sets to false.
    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    // sets all the above into action.
    this.setState({
      items
    });
  };

  // creates the card component for each of the items
  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          onClick={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {/* <Container fluid={true}>
          <Row className="justify-content-around">
            {this.makeItems(this.state.items)}
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default Carousel;
