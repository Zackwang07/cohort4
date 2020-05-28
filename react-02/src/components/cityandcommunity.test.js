import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import CityAndCommunity from './cityandcommunity';



test('test the city', () => {
  // console.log('Does this work');
  render(<CityAndCommunity></CityAndCommunity>)


  click(/Add a City/i)
  click(/Add a City/i)
  click(/Add a City/i)

  
  function click(txt) {
    fireEvent.click(
      screen.getByText(txt)
    )
  }

});