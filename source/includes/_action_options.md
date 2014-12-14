Action options
==============

The Interactable methods draggable, resizable and gesturable take either `true`
or `false` to simply allow/dissallow the action or an object with properties to
change certain settings.

draggable, resizable, gesturable options
----------------------------------------

```javascript
interact(target)
  .draggable({
    max: 3,
    snap: {/* ... */},
    autoScroll: {/* ... */},
  });
  .resizable({
    inertia: { /* ... */ }
  })
  .gesturable({
    restrict: { /* ... */ }
  });
```

 - **enabled** - Should this action be allowed. Default: `true`.
 - **max** - Limit the number of concurrent interactions that can target the
   *Interactable*. Default: `1`.
 - **maxPerElement** - Limit the number of concurrent interactions that can
   target the *same element*. Default: `1`.
 - **restrict** - See [Restrict](#restrict)

draggable, resizable options
----------------------------

 - **snap** - See [Snap](#snap)
 - **inertia** - See [Inertia](#inertia)
 - **autoScroll** - See [AutoScroll](#autoscroll)

draggable options
-----------------

 - **axis** - the axis in which the first movement must be in for the drag
   sequence to start

resizable options
-----------------

 - **axis** - the axis to resize in. `'x'`, `'y'` or `'xy'` (default).
 - **squareResize** - increase x and y by the same amount.
