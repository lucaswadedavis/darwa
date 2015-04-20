#Darwa

is a mutation engine for use in evolutionary algorithms. It's meant to be easy to use, and to that end employ's pretty heavy use of polymorphism in base function.

Example:

- darwa(10) >> 7.2323  
- darwa('rgb(100,20,230)') >> 'rgb(123,43,180)'

It's meant to be the chaotic engine of mutation at the heart of an evolutionary algorithm, so the above outputs will be different every time, but darwa should at least recognise when you're trying to mutate a number or a color or whatever.
