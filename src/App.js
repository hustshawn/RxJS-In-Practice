import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rx from 'rxjs/Rx';
import $ from 'jquery';

const frequency       = 100,
      maxBarLength    = 87;
let   initialized     = false,
      rawColor        = 0,
      debounceColor   = 0,
      globalColor     = 2;

class App extends Component {

  componentDidMount () {
    const triggerArea = $("#triggerArea");
    const resetArea = $("#reset");
    this.rawEvents = $("#raw-events");
    this.debouncedEvents = $("#debounced-events");
    const triggerAreaStream$ = Rx.Observable.fromEvent(triggerArea, 'mousemove click');
    const resetAreaStream$ = Rx.Observable.fromEvent(resetArea, 'click');

    // the periodic stream to draw the color bars.
    const interval$ = Rx.Observable
      .interval(frequency)
      .startWith(triggerAreaStream$)
      .take(maxBarLength)
      .takeUntil(resetAreaStream$);   
    
    triggerAreaStream$
      .subscribe(event => {
        if(!initialized) {
          initialized = true;
          console.log("INTIAL")
          $(event.target).addClass('active');
          interval$.subscribe((val) => this.drawBar(val));
        }  
        rawColor = globalColor;
      }); //triggerAreaStream$

    const debounceStream$ = triggerAreaStream$
      .debounce(() => Rx.Observable.timer(4 * frequency));

    debounceStream$.subscribe((val) => {
      this.changeDebouncedColor()
    });

    resetAreaStream$.subscribe(val => {
      console.log("RESET");
      triggerArea.removeClass('active');
      this.rawEvents.empty();
      this.debouncedEvents.empty();
      initialized = false;
    }); // resetAreaStream$
  } // componentDidMount

  changeDebouncedColor() {
    console.log("CHANGE COLOR", globalColor)
    debounceColor = globalColor;
    globalColor++;
    if(globalColor > 9) {
      globalColor = 2;
    }
  }

  drawBar(val) {
    this.rawEvents.append(`<span class="color${rawColor}">`);
    this.debouncedEvents.append(`<span class="color${debounceColor}">`);
    rawColor = 0;
    debounceColor = 0;
    console.log("Interval:", val);
  }

  render() {
    console.log("Rendering...")
    return (
      <div className="App">
        <div className="demo">  
          <a id="triggerArea" className="trigger-area" >Trigger area</a>
          <a id="reset" className="reset">Reset</a>
          <div className="visualizations">
          <h2>Raw events over time</h2>
          <div id="raw-events" className="events"></div>
            <h2>Debounced events
              <span className="details"> 400ms, trailing</span></h2>
            <div id="debounced-events" className="events"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
