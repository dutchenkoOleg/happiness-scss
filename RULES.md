# Rules

:back: [README.md](./README.md)

## List of rules

1. [Attribute Quotes](#attribute-quotes)
1. [BEM Depth](#bem-depth)
1. [Border Zero](#border-zero)
1. [Attribute](#attribute)
1. [Brace Style](#brace-style)
1. [lorem](#lorem)

---

This project working in progress. So there no stable notable changes yet.

### Attribute Quotes

[↑ list-of-rules](#list-of-rules)

Use single quotes in attribute values.  
sass-lint rule - [`attribute-quotes`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/attribute-quotes.md)

```scss
// ✓ ok 
span[lang='pt'] {  
	color: green;
}

// ✗ avoid 
span[lang=pt] {  
	color: green;
}
```

---

### BEM Depth

[↑ list-of-rules](#list-of-rules)

Max depth `1`.  
sass-lint rule - [`bem-depth`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/bem-depth.md)

```scss
// ✓ ok 
.block {
	&__element {
		// one element
	}
}

.sub-block {
	&__sub-element {
		// one element
	}
}

.block__element {
	position: relative;
}

// ✗ avoid 
.block {
	&__element {
		&__subelement {
			// two elements
		}
	}
}

.block__element__subelement__subelement-two {
	// three elements
}
```

---

### Border Zero

[↑ list-of-rules](#list-of-rules)

Use `none` keyword for disable border or `0` for `border-width`.  
sass-lint rule - [`border-zero`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/border-zero.md)

```scss
// ✓ ok 
.foo1 {
	border: none;
}

.foo2 {
	border-width: 0;
}

// ✗ avoid 
.bar1 {
	border: 0;
}

.bar2 {
	border-right: 0;
}
```

---

### Brace Style

[↑ list-of-rules](#list-of-rules)

Use `1tbs` brace style.  
Single line are not allowed
sass-lint rule - [`brace-style`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/brace-style.md)

```scss
// ✓ ok 
.foo {
  content: 'foo';
}

// ✗ avoid 
.foo
{
  content: 'foo';
}

// ✓ ok 
@if ($foo) {
	$bar: 'bar';
} @else {
	$bar: false;
}

// ✗ avoid 
@if ($foo) {
	$bar: 'bar';
}
@else {
	$bar: false;
}

// ✗ avoid single line
.foo { content: 'foo'; }

@if ($foo) { $bar: 'foo'; }
@else { $bar: false; }
```
