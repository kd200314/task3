import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColorList: false,
      selectedColor: null,
    };
  }

  handleButtonClick = () => {
    this.setState({ showColorList: !this.state.showColorList });
  };

  handleColorClick = (color) => {
    this.setState({
      showColorList: false,
      selectedColor: color,
    });
    document.body.style.backgroundColor = color; // Change the background color
  };

  render() {
    const colors = [
      '#FF5733',
      '#33FF57',
      '#5733FF',
      '#9400D3',
      '#FF33B2',
      '#008080',
      '#808000',
      '#C0C0C0',
      '#33B2FF',
      '#6A5ACD',
      '#7FFFD4',
      '#1E90FF',
      '#000080',
      '#FF33B2',
      '#000080',
      '#2F4F4F',
      '#A52A2A',
      '#CD5C5C',
      '#800000',
      '#FF0000'
    ];

    const { showColorList, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.handleButtonClick} style={{ backgroundColor: '#33FF57' }}>
          {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
        </button>
        {showColorList && (
          <ul className="color-list">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ColorPicker;
