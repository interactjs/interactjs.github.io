Restrict
========

```javascript
interact(target)
  .draggable({
    restrict: { /* restrict options */ }
  })
  .resizable({
    restrict: { /* restrict options */ }
  });
  .gesturable({
    restrict: { /* restrict options */ }
  });
```

Restriction
-----------

```javascript
interact(target)
  .draggable({
    restrict: {
      restriction: 'parent',
    }
  })
  .gesturable({
    restrict: {
      restriction: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  })
```

elementRect
-----------

```javascript
interact(target)
  .draggable({
    restrict: {
      restriction: 'parent',
      elementRect: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  })
  .gesturable({
    restrict: {
      restriction: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      endOnly: true
    }
  })
```
