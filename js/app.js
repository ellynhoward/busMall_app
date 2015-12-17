

var allProducts = [];
var productNames = ['Boots','Chair','Scissors', 'water_can', 'wine_glass', 'Bag', 'Banana', 'Cthulhu', 'Dragon', 'Pen', 'Shark', 'Sweep', 'Unicorn', 'Usb'];
var produceChart = document.getElementById('productChart')

// CHART HERE

var data = {
    labels: [],
    datasets: [
        {
            label: "My dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []

        },
    ]
};

// original stuff
function Product (name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  allProducts.push(this);
  data.labels.push(name);
  // this.render();
};


//functions job is to create object--- this is replacing 14 var lines
(function buildAlbum() {
  //for loop will take every element in array and build object
  for (var i = 0; i < productNames.length; i++){
    //feeding into contructor, replacing 14 var lines
    new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
  }
})();

//object literal
var productRank = {
  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,
  barChart: null,

  resultsEl: document.getElementById('results'), //results is in html button id
  //we need to grab into html
  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * productNames.length);
  },
  //console --type in productRank.getRandomIndex and make sure it is producing correctly
  displayImages: function () {
    productRank.leftObj = allProducts[productRank.getRandomIndex()];//we need to get objects from all products, get randomIndex choses a random number, returns an object and assigns it to left obj
    productRank.midObj = allProducts[productRank.getRandomIndex()];
    productRank.rightObj = allProducts[productRank.getRandomIndex()];

    //to validate
    if(productRank.leftObj === productRank.midObj || productRank.leftObj === productRank.rightObj || productRank.midObj == productRank.rightObj)
    {
    productRank.displayImages();
    }

    productRank.leftEl.src = productRank.leftObj.path;
    productRank.leftEl.id = productRank.leftObj.name;

    productRank.midEl.src = productRank.midObj.path;
    productRank.midEl.id = productRank.midObj.name;

    productRank.rightEl.src = productRank.rightObj.path;
    productRank.rightEl.id = productRank.rightObj.name;
  },


  // tallyClicks: function(elId) {
  //   for(var i in allProducts){
  //     if (allProducts[i].name === elId) {
  //       allProducts[i].tally += 1;
  //       this.totalClicks += 1;
  //       // data.labels.push(name);
  //       data.datasets[0].data.push(allProducts[i].tally)
  //
  //     }
  //   }
  // },


  //voting
  showResults: function(){
    if (this.totalClicks % 15 === 0){//total clicks mod 15.. mod does division and gived remainder
      this.resultsEl.hidden = false;
      produceChart.hidden = false;
    }
  }
};


productRank.leftEl.addEventListener('click', function(){
  productRank.leftObj.tally += 1;
  productRank.totalClicks += 1;
  console.log(productRank.leftObj.name + ' has ' + productRank.leftObj.tally);
  productRank.showResults();//calling function above
  productRank.displayImages();

});

productRank.midEl.addEventListener('click', function(){
  productRank.midObj.tally += 1;
  productRank.totalClicks += 1;

  console.log(productRank.midObj.name + ' has ' + productRank.midObj.tally);
  productRank.showResults();//calling function above
  productRank.displayImages();


});

productRank.rightEl.addEventListener('click', function(){
  // productRank.tallyVotes();
  productRank.rightObj.tally += 1;
  productRank.totalClicks += 1;

  console.log(productRank.rightObj.name + ' has ' + productRank.rightObj.tally);
  productRank.showResults();//calling function above
  productRank.displayImages();


});

productRank.displayImages();


results.addEventListener('click',function(){
 // renderTotals();
 createChart();
});



  var context = document.getElementById('productChart').getContext('2d');
  var myBarChart = new Chart(context).Bar(data);

function createChart(){
    produceChart.hidden = false;
    for (var i = 0; i < allProducts.length; i++) {
    data.datasets[0].data[i] = allProducts[i].tally;

  };
  new Chart(context).Bar(data);
  }


// function renderTotals(){
//
// }


// var tblEl = document.getElementById('table');

//if using table put back in function
  // for (var i = 0; i < productNames.length; i++){
//   var trEl = document.createElement('tr');
//   tblEl.appendChild(trEl);
//
//   var tdEl = document.createElement('td');
//   tdEl.textContent = productNames[i];
//   trEl.appendChild(tdEl);
//
//   var txEl = document.createElement('td');
//   txEl.textContent = allProducts[i].tally;
//   trEl.appendChild(txEl);
// }
//   tblEl.appendChild(trEl);
//}
