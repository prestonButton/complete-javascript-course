<hr>
<h1>Data Structures, Modern Operators and Strings</h1>
<hr>

<br>

<hr>
<h2>Destructuring Arrays</h2>
<hr>

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

this assigns ```arr[0]``` to ```a```, skips ```b```, and assigns ```arr[2]``` to ```c```.

Note: this returns a shallow copy of the array so any nested arrays will be destructured as an array: 

    const arr = [2, 3, [4, 5]];
    const [a, b, c] = arr;

In this example, ```c``` = ```[4, 5]``` which is the third index of ```arr```.

But we can destructure deeper:

    const arr = [2, 3, [4, 5]];
    const [a, b, [c, d]] = arr;

In this example, ```c``` = ```4``` which is the first elemnt of the nested array. You can destructure as deep as you want, but it can get confusing the deeper you go.
</p>

<hr>
<h2>Destructuring Objects</h2>
<hr>

<p>
We can also use destructuring on objects. It uses the same ideas as destructuring for arrays, but there are a few differences.

For this section, I will refer to this object here which has regular key-value pairs, a nested object, and a method:

    const obj = {
        key1: 'value1',
        key2: 'value2',
        key3: {
            a: 1,
            b: 2,
            c: 3
        }

        add: function({x, y}){
            return x + y;
        }
    }

To destructure objects, use ```{}``` instead of ```[]``` like we used for arrays. We must also provide the variable names that exactly match the key names in our objects. This is because objects are unordered, so relying on orderlike we did with arrays won't work.

    const {key2, key1, key3} = obj;

As you may notice, order does not matter.

Sometimes, we want the variable names to be different from the property names:

    const {key2: var1, key1: var2, key3: var3} = obj;

we could then use these new variable names to reference the values in the object. For instance, ```console.log(var1)``` would return ```'value1'```, and ```console.log(var3)``` would return the object ```{a: 1, b:2, c: 3}```.

If, for instance, we are trying to read a property that may not exist on an object, we can set a default value for that call rather than an ```undefined``` return. 

    const {key4 = 0, key3: var3 = {}} = obj;

In this example, since our the key ```key4``` does not exist in our object, the code would return our default value of ```0```. As you see in the second part of that code block, we can pair setting a default value with assigning a new name to a variable where we set ```key3``` to the name ```var3``` and return the empty object ```{}``` if we call and ```key3``` does not exist.

If we want to mutate variables, we run into an error. say we have some variables:

    let a = 10;
    let b = 20;
    const obj = {a: 15, b: 25};

Now say we want to change ```a``` and ```b``` to the variables declared in the object. We cannot redeclare ```a``` and ```b``` in the same scope, but if we write:

    {a, b} = obj;

we get an error. This is because we cannot start a line with ```{```. In order to bypass this, we must encase the whole statement with parentheses: 

    ({a, b} = obj);

Like arrays, destructuring objects only creates a shallow copy of the object, and for nested objects, we must destructure within the nested one. Going back to our original object (the one at the beginning of this section), if I want to access keys ```a``` and ```b```, I would have to destructure something like: 

    const { key3: {a, b: varY = 0}} = obj;

Destructuring can be used right in function calls.

    obj.add({a, b})

</p>

<hr>
<h2>The Spread Operator</h2>
<hr>

<p>
In order to get all the elements of an array, we used to have to loop over the array and seperate all the variables one by one.  An example of this is copying all elements of an array into a new array.But now we have a special operator to do this for us.

    const arr = [7, 8, 9];
    const newArr = [1, 2, ...arr];

In this code block, the ```...arr``` copies the elements of the array into the new array. ```console.log(newArr)``` would return ```[1, 2, 7, 8, 9]```. We could not just do 
    
    const newArr = [1, 2, arr];

because, ```console.log(newArr)``` would return ```[1, 2, [7, 8, 9]]```. The spread operator (```...```) copies the elements of an array (not just a copy of the array which points back to the original array).

We can also use the spread operator to combine two arrays:

    const firstFive = [0, 1, 2, 3, 4];
    const secondFive = [5, 6, 7, 8, 9];

    const firstTen = [...firstFive, ...secondFive];

The spread operator can only be used in places we would otherwise write values separated by commas.

The spread oprator creates a shallow copy of an array. For instance:

    const letters = [a, b, [c, d]];
    const newLetters = [...letters];

```newLetters``` would be its own array, but would still equal ```[a, b, [c, d]]```. ```c``` and ```d``` would still be in their own nested array.

We can use the spread operator in our function inputs:

    const arr = [1, 2];

    const add = (a, b) => {
        return a + b;
    }

    add(...arr); //This is the same as calling add(1, 2);

In this example, we use the spread operator to separate the two values and input them into our function.

The spread object works on objects as well. 

    const obj = {
        key1: 'value1',
        key2: 'value2',
        key3: {
            a: 1,
            b: 2,
            c: 3
        }

        add: function({x, y}){
            return x + y;
        }
    }

    const obj2 = {
        name: 'Me',
        age: '100'
    }

    const newObj = {
        ...obj,
        //and we can even add more key value pairs
        keyX: 'Y',
        //and even another object if we want
        ...obj2,
    }
</p>

<hr>
<h2>The Rest Pattern and Parameters</h2>
<hr>

<p>

The rest operator looks identical to the spread Operator (```...```), but it does the opposite thing. While the spread operator expands an array into individual objects, the rest operator takes individual objects and condences them into an array. A rule of thumb is that the spread operator is used on the right side of the assignent (```=```) operator and the rest operator is used on the left.

The rest operator works together with destructuring.

    const arr = [1, 2, 3, 4];
    const [a, b, ...others] = arr;

This destructures the array into three variables: ```a``` = ```1```, ```b``` = ```2```, and ```others``` = ```[3, 4]```, or the 'rest' of the array. 

We can use the rest and spread operator in the same statement: 

    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8];

    //say we are looking for the first and third elements

    const [first, , third, ...othernumbers] = [...arr1, ...arr2];

the rest pattern must always be the last item in a destructuring assignment, and there cannot be more than one rest pattern in an destructuring assignment.


</p>