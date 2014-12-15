Snap
====

```javascript
interact(target)
  .draggable({
    snap: { /* snap options */ }
  })
  .resizable({
    snap: { /* snap options */ }
  });
```

Drag and resize coordinates can be snapped to specific points defined by
objects and functions in the snap `targets` array. The elements of this array
can be any combination of *points* and *functions which return points* to snap to.
If there are multiple snap targets, then the nearest snap target that is in
range is used.

Point targets
-------------

```javascript
interact(element).resizable({
  snap: {
    targets: [
      // snap to the point (0, 450)
      { x: 0, y: 450, range: 50 },

      // snap only the y coord to 100
      // i.e. move horizontally at y=100
      { y: 100, range: Infinity }
    ]
  }
});
```

A snap target can be an object with x, y and range properties.

Function targets
----------------

```javascript
interact(element).draggable({
  snap: { targets: [
    // give this function the x and y page coords
    // and snap to the object returned
    function (x, y) {
      return { x: x,
               y: (75 + 50 * Math.sin(x * 0.04)),
               range: 40 };  
    }
  ]}
})
```

If a snap target is a function, then it is passed the pageX and pageY
coordinates or the event. If the function returns an object it is used like a
point target.

Snap grids
----------

```javascript
var gridTarget = interact.createSnapGrid({
  x: 50, 
  y: 50, 
  range: 10,
  offset: { x: 5, y: 10 } // optional
});
```

Use the `interact.createSnapGrid` method to create a target that snaps to a
grid. The method takes an object describing a grid and returns a function
that snaps to the corners of that grid.

Range
-----

```javascript
interact(element).draggable({
  snap: {
    targets: [
      { x: 20, y: 450, range: 50 }
      { x: 10, y: 0 /* use default range below */},
    ],
    range: 300 // for targets that don't specify a range
  }
});
```

The `range` of a snap target is the distance the pointer must be from the
target's coordinates for a snap to be possible.

i.e. `inRange = distance <= range`.

If a snap target doesn't have it's own range, the default range is used.

endOnly
-------

```javascript
interact(element).draggable({
  snap: {
    targets: [/* ... */],
    endOnly: true
  }
});
```

The `endOnly` option is used to snap just before the end of a drag or resize.
Before the end event is fired, an extra `<action>move` event is snapped and
fired.

If [inertia](#inertia) is enabled and `endOnly` is set to `true` then the
pointer will follow a curve to the snap target.

