# Responsive Web Design
  
- Fluid foundation
  - Proportional sizing by using percentage-based grids instead of fix-width, pixel-based grids
  - IE & Rounding percentages
    - Older versions of IE will round up
- Flexible content
- Media queries
  
## Semantic Grid System

<!--- check below code --->
```sass
@col-width: 60;
@gutter-width: 20;
@col-count: 12;
@total-width: 100%:

// full width
header { .column(12); }
article { .column(12); }
aside { .column(12); }

@media (min-width: 38em) {
  article { .column(8); }
  aside { .column(4); }
}
```

## Media Queries
```html
<link media="screen and (max-width:767px)" ...
```
```css
@media screen and (max-width 767px) { ... }
```
#### Media Types
- Braille
- Embossed
- Speech
- Handheld
- Projection
- Screen
- TV
- Print
-----
## Tips

- Set images to `max-width: 100%;` to prevent it from scaling larger than its actual size
