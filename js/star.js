document.addEventListener('DOMContentLoaded', function () {
  'use strict'

  // get the interact variable from the parent window
  var interact = window.parent.interact

  var sns = 'http://www.w3.org/2000/svg'
  var xns = 'http://www.w3.org/1999/xlink'
  var root = document.getElementById('star-demo')
  var star = document.getElementById('star')
  var rootMatrix
  var originalPoints = []
  var transformedPoints = []

  for (var i = 0, len = star.points.numberOfItems; i < len; i++) {
    var handle = document.createElementNS(sns, 'use')
    var point = star.points.getItem(i)
    var newPoint = root.createSVGPoint()

    handle.setAttributeNS(xns, 'href', '#point-handle')
    handle.setAttribute('class', 'point-handle')

    handle.x.baseVal.value = newPoint.x = point.x
    handle.y.baseVal.value = newPoint.y = point.y

    handle.setAttribute('data-index', i)

    originalPoints.push(newPoint)

    root.appendChild(handle)
  }

  function applyTransforms (event) {
    rootMatrix = root.getScreenCTM()

    transformedPoints = originalPoints.map(function (point) {
      return point.matrixTransform(rootMatrix)
    })

    interact('.point-handle', { context: document }).draggable({
      snap: {
        targets: transformedPoints,
        range: 20 * Math.max(rootMatrix.a, rootMatrix.d)
      }
    })
  }

  interact(root, { context: document }).on('down', applyTransforms)

  interact('.point-handle', { context: document })
    .draggable({
      onstart: function (event) {
        root.setAttribute('class', 'dragging')
      },
      onmove: function (event) {
        var i = event.target.getAttribute('data-index') | 0
        var point = star.points.getItem(i)

        point.x += event.dx / rootMatrix.a
        point.y += event.dy / rootMatrix.d

        event.target.x.baseVal.value = point.x
        event.target.y.baseVal.value = point.y
      },
      onend: function (event) {
        root.setAttribute('class', '')
      },
      snap: {
        targets: originalPoints,
        range: 10,
        relativePoints: [ { x: 0.5, y: 0.5 } ]
      },
      restrict: { restriction: document.rootElement }
    })
    .styleCursor(false)

  document.addEventListener('dragstart', function (event) {
    event.preventDefault()
  })
})
