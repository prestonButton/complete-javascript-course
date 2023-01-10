<hr>
<h1>Data Structures, Modern Operators and Strings</h1>
<hr>

<br>

<h2>Destructuring Arrays</h2>
<p>
Destructuring was introduced in ES6, used to unpack values from objects, including arrays, into seperate variables.

    const arr = [2, 3, 4];
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];

But since ES6, we can do this much simpler:

    const arr = [2, 3, 4];
    const [a, b, c] = arr;

or even simpler: 

    const [a, b, c] = [2, 3, 4];

And we don't even need to assign all values to a variable. For instance, if we only want the first and last variables of an array:

    const arr = [2, 3, 4];
    const [a, , c] = [arr];

this assigns the fist index of <code>arr</arr> to <code>a</code>, skips <code>b</code>, and assigns <code>arr[2]</code> to <code>c</code>;
</p>
