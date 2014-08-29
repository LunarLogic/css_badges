(function(window) {

  var $ = window.$ = function(selector){
    return document.querySelector(selector);
  }

  function plotExamples(debuggerWindow, styles) {
    var definitions = styles.backgroundImage,
      layerDefinition = null,
      rules = definitions.split(/\w+\-gradient/),
      rulesTypes = definitions.match(/(\w+)\-gradient/g);

    rules.forEach(function(layer, i) {
      if (layer !== '') {
        layer = layer.replace(/\, *$/, '')
        layerDefinition = rulesTypes[i - 1] + layer;

        var visualSample = document.createElement('div');
        visualSample.setAttribute('class', 'visual-sample');
        visualSample.style.width = styles.width;
        visualSample.style.height = styles.height;
        visualSample.style.backgroundImage = layerDefinition;

        console.log(layerDefinition);

        debuggerWindow.appendChild(visualSample);
      }
    });
  }

  var classDefinition = function(targetSelector) {
    var debuggerWindow = document.createElement('div');
    debuggerWindow.setAttribute('class', 'background-debugger-container');
    $('body').appendChild(debuggerWindow);

    var element = $(targetSelector),
      styles = window.getComputedStyle(element, false);

      plotExamples(debuggerWindow, styles);
  }

  classDefinition('#butterbeer div');

  window.BackgroundDebugger = classDefinition;
})(window);
