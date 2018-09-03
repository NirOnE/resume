// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var cc1 = new ProgressBar.Circle(circlechart1, {
    color: '#6adcfa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#6adcfa', width: 5 },
    to: { color: '#124e8c', width: 10 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  cc1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  cc1.text.style.fontSize = '2rem';
  
  cc1.animate(0.9);  // Number from 0.0 to 1.0


  var cc2 = new ProgressBar.Circle(circlechart2, {
    color: '#6adcfa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#6adcfa', width: 5 },
    to: { color: '#124e8c', width: 10 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  cc2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  cc2.text.style.fontSize = '2rem';
  
  cc2.animate(0.5);  // Number from 0.0 to 1.0


  var cc3 = new ProgressBar.Circle(circlechart3, {
    color: '#2163af',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#2163af', width: 5 },
    to: { color: '#2163af', width: 10 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  cc3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  cc3.text.style.fontSize = '2rem';
  
  cc3.animate(0.75);  // Number from 0.0 to 1.0