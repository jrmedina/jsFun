const { kitties } = require("./datasets/kitties");
const { puppers } = require("./datasets/puppers");
const { mods } = require("./datasets/mods");
const { cakes } = require("./datasets/cakes");
const { classrooms } = require("./datasets/classrooms");
const { breweries } = require("./datasets/breweries");
const { nationalParks } = require("./datasets/nationalParks");
const { weather } = require("./datasets/weather");
const { instructors, cohorts } = require("./datasets/turing");
const { bosses, sidekicks } = require("./datasets/bosses");
const { constellations, stars } = require("./datasets/astronomy");
const { weapons, characters } = require("./datasets/ultima");
const { dinosaurs, humans, movies } = require("./datasets/dinosaurs");

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  // Return an array of just the names of kitties who are orange e.g.
  // ['Tiger', 'Snickers']

  /* CODE GOES HERE */
  orangePetNames(pets) {
    const orangePets = pets.filter((pet) => {
      return pet.color === "orange";
    });
    const orangePetNames = orangePets.map((pet) => {
      return pet.name;
    });
    return orangePetNames;
  },
  // Annotation:
  // Write your annotation here as a comment

  sortByAge(pets) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
    pets.sort((young, old) => {
      return old.age - young.age;
    });
    return pets;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(pets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /* CODE GOES HERE */
    futureAge = pets.map((pet) => {
      pet.age += 2;
      return pet;
    });
    return futureAge;
  },
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    /* CODE GOES HERE */
    // let byName = clubs.reduce((key, obj) =>{
    //   let name = obj['members']
    //   key[name] = []
    //   key[name].push(obj)
    //   return key
    // })
    // console.log(111111, byName)
    // data.reduce((acc, d) => {
    //   if (Object.keys(acc).includes(d.group)) return acc;
    //   acc[d.group] = data.filter((g) => g.group === d.group);
    //   return acc;
    // }, {});
    // function viewSupplies() {
    //   let craftKeys = Object.keys(craftSupplies);
    //   return craftKeys.reduce((acc, key) => {
    //     craftSupplies[key].forEach((item) => {
    //       if (!acc[item.name]) acc[item.name] = [];
    //       acc[item.name].push(key);
    //     });
    //     return acc;
    //   }, {});
    // }
    // let allMembers = [];
    // clubs.forEach((club) => allMembers.push(club.members));
    // let flat = allMembers.flat();
    // let set = [new Set(flat)]
    // let set1 = set.forEach((person) => {
    //   obj = {}
    //   obj[person] = clubs.club
    //   return obj
    // })
    // console.log(set1)
    // clubs.reduce((acc, club) => {
    //   if()
    // }, {})
    // set.forEach((person) => console.log(person))
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    //]

    rearranged = mods.map((mod) => {
      return {
        ["mod"]: mod.mod,
        ["studentsPerInstructor"]: mod.students / mod.instructors,
      };
    });
    return rearranged;

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    let rearranged = cakes.map((cake) => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock,
      };
    });
    return rearranged;
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment

    let inStock = cakes.filter((cake) => {
      if (cake.inStock > 0) {
        return cake;
      }
    });
    return inStock;
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    let total = cakes.reduce((acc, cake) => {
      return (acc += cake.inStock);
    }, 0);
    return total;
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    let toppings = cakes.map((cake) => {
      return cake.toppings;
    });

    let flattened = toppings.flat();
    let toppingSet = [...new Set(flattened)];
    console.log(toppingSet);
    return toppingSet;
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    let feClassrooms = classrooms.filter(
      (classroom) => classroom.program === "FE"
    );
    return feClassrooms;
    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    // let capacity = classrooms.reduce((acc, cur) => {
    //   let beCap;
    //   let feCap;
    //    if(cur.program === 'FE') {
    //     acc += cur.capacity;
    //     feCap = acc
    //   } else if (cur.program === 'BE') {
    //     acc += cur.capacity
    //     beCap = acc
    //   }
    //   console.log(feCap)
    //   return feCap
    // }, {
    //   feCapacity: feCap,
    //   beCapacity: beCap
    // })
    // console.log(capacity)
    //return capacity

    let feTotal = classrooms.reduce((acc, cur) => {
      if (cur.program === "FE") {
        acc += cur.capacity;
      }
      return acc;
    }, 0);
    let beTotal = classrooms.reduce((acc, cur) => {
      if (cur.program === "BE") {
        acc += cur.capacity;
      }
      return acc;
    }, 0);
    return {
      feCapacity: feTotal,
      beCapacity: beTotal,
    };
    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    let sortedClass = classrooms.sort((a, b) => {
      b.capacity - a.capacity;
    });
    return sortedClass;
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:
    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    // let filtered = []
    // books.forEach((book) => {
    //      if (book.genre !== "Horror") {
    //        filtered.push(book);
    //      }
    //      //console.log(filtered)
    // })
    // filtered.forEach((book) => {
    //   if(book.genre === "True Crime") {
    //     filtered.splice(book, 1)
    //   }
    //   console.log(filtered.name);
    // return filtered
    // })

    let reduced = books.reduce((acc, book) => {
      if (book.genre !== "Horror" && book.genre !== "True Crime") {
        acc.push(book.title);
      }
      return acc;
    }, []);
    return reduced;
  },

  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:
    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    //  let older = []
    //   books.forEach((book) => {
    //     if(book.published > 1990) {
    //       older.push(book.title)
    //     }
    //   })
    //   console.log(older);
    //    return older;
    let older = books.reduce((acc, book) => {
      if (book.published > 1990) {
        acc.push({
          title: book.title,
          year: book.published,
        });
      }
      return acc;
    }, []);
    return older;
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    avgTemps = weather.map((data) => {
      return (data.temperature["high"] + data.temperature["low"]) / 2;
    });
    return avgTemps;
    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    let sentences = [];
    weather.forEach((data) => {
      if (data.type === "sunny") {
        sentences.push(`${data.location} is ${data.type}.`);
      } else if (data.type === "mostly sunny") {
        sentences.push(`${data.location} is ${data.type}.`);
      }
    });
    return sentences;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    let sorted = weather.sort((a, b) => {
      return b.humidity - a.humidity;
    });
    return sorted[0];

    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    let haveBeen = [];
    let wantTo = [];
    nationalParks.forEach((park) => {
      if (park.visited === true) {
        haveBeen.push(park.name);
      } else if (park.visited === false) {
        wantTo.push(park.name);
      }
    });
    return {
      parksToVisit: wantTo,
      parksVisited: haveBeen,
    };
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    /* CODE GOES HERE */
    let flipped = nationalParks.reduce((current, park) => {
      let flippedObj = {};
      flippedObj[park.location] = park.name;
      current.push(flippedObj);
      return current;
    }, []);
    return flipped;
    //current.push({ [park.location]: park.name });

    // console.log(flipped)
    // return flipped
    // newobj = [
    // ]
    // nationalParks.forEach((park) => {
    //   newobj.push({park[location]: park.name})
    // })

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]
    /* CODE GOES HERE */

    let activities = nationalParks.map((park) => {
      return park.activities;
    });
    let flatActivities = activities.flat();
    let activitySet = [...new Set(flatActivities)];
    return activitySet;

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    beerCounts = [];
    breweries.forEach((brewery) => {
      beerCounts.push(brewery.beers.length);
    });
    totalCount = beerCounts.reduce((acc, beer) => {
      return acc + beer;
    }, 0);
    return totalCount;
  },
  //  const beers = breweries.reduce((beer, total) => {
  //       beer += total.beers.length
  //       return beer
  //     }, 0)
  //     return beers

  getBreweryBeerCount() {
    let breweryCount = breweries.map((brewery) => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length,
      };
    });
    return breweryCount;
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    let beers = [];
    breweries.forEach((brewery) => beers.push(brewery.beers));
    let flattened = beers.flat().sort((a, b) => b.abv - a.abv);
    return flattened[0];

    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    /* CODE GOES HERE */

    const newSet = instructors.reduce((acc, cur) => {
      cohorts.forEach((cohort) => {
        cur.module === cohort.module &&
          acc.push({
            name: cur.name,
            studentCount: cohort.studentCount,
          });
      });

      return acc;
    }, []);

    return newSet;
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    /* CODE GOES HERE */

    const perInstructor = cohorts.reduce((acc, cur) => {
      let instructorCount = 0;
      instructors.forEach((i) => cur.module === i.module && instructorCount++);
      acc[`cohort${cur.cohort}`] = cur.studentCount / instructorCount;

      return acc;
    }, {});

    return perInstructor;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    /* CODE GOES HERE */

    const modsPerTeacher = instructors.reduce((acc, cur) => {
      cur.teaches.forEach((skill) => {
        if (cohorts.forEach.curriculm.includes(skill)) {
          console.log(true);
        }
      });

      return acc;
    });

    return modsPerTeacher;
    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// -------------------------------------------------------------------------
// --------------------------------------------------------------------------
// ------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
    //     let constKeys = Object.keys(constellations);
    //     [ 'orion', 'ursaMajor', 'ursaMinor' ]
    //     console.log(constKeys);
    // let starKeys = Object.keys(stars);
    // stars.filter((star) => {
    //   let constKeys = Object.keys(constellations)
    //   constKeys.forEach(constellation => {
    //     constellations[constellation].orangePetNames
    //     return
    //   })
    // })
    // })
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {
    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    /* CODE GOES HERE */
    // Annotation:
    // Write your annotation here as a comment
  },
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
};
