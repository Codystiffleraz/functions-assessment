///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

let pizza = {
    name: 'Pineapple',
    price: 20,
    category: 'Entree',
    popularity: 100,
    rating: 10,
    tags: ['Epic', 'Sauced up', 'vegan']
}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

// console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

// console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

let price = pizza.price

// console.log(price)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

let category = pizza.category
// console.log(category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

let foodArr = [
      {
        name: 'Pepperoni',
        price: 12,
        category: 'Appetizer',
        popularity: 200,
        rating: 8,
        tags: ['Meat', 'super Sauced up', 'notvegan']
    },
     {
        name: 'cheese',
        price: 10,
        category: 'Entree',
        popularity: 80,
        rating: 9,
        tags: ['kids', 'cheesed up', 'vegaterian']
    },
      {
        name: 'Meat Lovers',
        price: 25,
        category: 'Entree',
        popularity: 150,
        rating: 10,
        tags: ['Grown Men', 'Meat', 'Awesomeness']
    },
      {
        name: 'Ricotta Cheese',
        price: 15,
        category: 'appetizer',
        popularity: 75,
        rating: 7,
        tags: ['Cheese', 'vegaterian', 'Crustlisious']
    },
      {
        name: 'Just the bread',
        price: 8,
        category: 'app',
        popularity: 20,
        rating: 5,
        tags: ['literally just bread', 'breaded up', 'vegan']
    }
                    
]



//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/



//  const filteredFood = foodArr.filter(element => foodArr.tags = element)
// //  console.log(filteredFood)

// const tagCallback = (callback) => callback()

// tagCallback(filteredFood('Meat'))

// or

// const filteredFood = foodArr.filter((food) => {
//     if(food.tags.includes('Meat')){
//         return food
//     }
//  }
// )

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

const filterByProperty = (property, number, type) => {
    const filteredFood = foodArr.filter((food) => {
        if(type === 'above'){
            return food[property] >= number
        }else {
            return food[property] <= number
        }
    })


return filteredFood
}

console.log(filterByProperty('popularity', 9, 'above'))

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE