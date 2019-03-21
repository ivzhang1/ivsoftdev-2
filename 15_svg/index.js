cereals = {'Apple_Cinnamon_Cheerios': {'calories': '110', 'sodium': '180'}, 'Rice_Chex': {'calories': '110', 'sodium': '240'}, 'Just_Right_Fruit_&_Nut': {'calories': '140', 'sodium': '170'}, 'Shredded_Wheat_spoon_size': {'calories': '90', 'sodium': '0'}, 'Bran_Flakes': {'calories': '90', 'sodium': '210'}, 'Raisin_Squares': {'calories': '90', 'sodium': '0'}, 'Apple_Jacks': {'calories': '110', 'sodium': '125'}, 'Honey_Graham_Ohs': {'calories': '120', 'sodium': '220'}, 'Rice_Krispies': {'calories': '110', 'sodium': '290'}, 'Strawberry_Fruit_Wheats': {'calories': '90', 'sodium': '15'}, 'Cream_of_Wheat_(Quick)': {'calories': '100', 'sodium': '80'}, 'Nutri-Grain_Almond-Raisin': {'calories': '140', 'sodium': '220'}, 'Just_Right_Crunchy__Nuggets': {'calories': '110', 'sodium': '170'}, "Cap'n'Crunch": {'calories': '120', 'sodium': '220'}, 'Count_Chocula': {'calories': '110', 'sodium': '180'}, 'Clusters': {'calories': '110', 'sodium': '140'}, 'Multi-Grain_Cheerios': {'calories': '100', 'sodium': '220'}, 'Fruity_Pebbles': {'calories': '110', 'sodium': '135'}, 'Oatmeal_Raisin_Crisp': {'calories': '130', 'sodium': '170'}, 'Puffed_Wheat': {'calories': '50', 'sodium': '0'}, 'Honey-comb': {'calories': '110', 'sodium': '180'}, 'Almond_Delight': {'calories': '110', 'sodium': '200'}, 'Corn_Chex': {'calories': '110', 'sodium': '280'}, 'Crispy_Wheat_&_Raisins': {'calories': '100', 'sodium': '140'}, 'Grape-Nuts': {'calories': '110', 'sodium': '170'}, 'Golden_Grahams': {'calories': '110', 'sodium': '280'}, 'Smacks': {'calories': '110', 'sodium': '70'}, 'Raisin_Nut_Bran': {'calories': '100', 'sodium': '140'}, 'Mueslix_Crispy_Blend': {'calories': '160', 'sodium': '150'}, 'Special_K': {'calories': '110', 'sodium': '230'}, 'Wheaties_Honey_Gold': {'calories': '110', 'sodium': '200'}, 'Maypo': {'calories': '100', 'sodium': '0'}, 'Total_Whole_Grain': {'calories': '100', 'sodium': '200'}, 'Kix': {'calories': '110', 'sodium': '260'}, 'Golden_Crisp': {'calories': '100', 'sodium': '45'}, 'Crispix': {'calories': '110', 'sodium': '220'}, 'Shredded_Wheat': {'calories': '80', 'sodium': '0'}, 'Basic_4': {'calories': '130', 'sodium': '210'}, 'Honey_Nut_Cheerios': {'calories': '110', 'sodium': '250'}, 'Cinnamon_Toast_Crunch': {'calories': '120', 'sodium': '210'}, 'Trix': {'calories': '110', 'sodium': '140'}, 'Grape_Nuts_Flakes': {'calories': '100', 'sodium': '140'}, 'Life': {'calories': '100', 'sodium': '150'}, 'Post_Nat._Raisin_Bran': {'calories': '120', 'sodium': '200'}, 'Corn_Flakes': {'calories': '100', 'sodium': '290'}, 'Wheaties': {'calories': '100', 'sodium': '200'}, 'Double_Chex': {'calories': '100', 'sodium': '190'}, 'Great_Grains_Pecan': {'calories': '120', 'sodium': '75'}, 'Triples': {'calories': '110', 'sodium': '250'}, 'Fruitful_Bran': {'calories': '120', 'sodium': '240'}, 'All-Bran': {'calories': '70', 'sodium': '260'}, 'Lucky_Charms': {'calories': '110', 'sodium': '180'}, 'All-Bran_with_Extra_Fiber': {'calories': '50', 'sodium': '140'}, 'Quaker_Oatmeal': {'calories': '100', 'sodium': '0'}, 'Product_19': {'calories': '100', 'sodium': '320'}, "Shredded_Wheat_'n'Bran": {'calories': '90', 'sodium': '0'}, 'Puffed_Rice': {'calories': '50', 'sodium': '0'}, 'Total_Corn_Flakes': {'calories': '110', 'sodium': '200'}, 'Total_Raisin_Bran': {'calories': '140', 'sodium': '190'}, 'Quaker_Oat_Squares': {'calories': '100', 'sodium': '135'}, '100%_Bran': {'calories': '70', 'sodium': '130'}, 'Cocoa_Puffs': {'calories': '110', 'sodium': '180'}, 'Frosted_Flakes': {'calories': '110', 'sodium': '200'}, 'Froot_Loops': {'calories': '110', 'sodium': '125'}, 'Raisin_Bran': {'calories': '120', 'sodium': '210'}, 'Wheat_Chex': {'calories': '100', 'sodium': '230'}, 'Frosted_Mini-Wheats': {'calories': '100', 'sodium': '0'}, 'Corn_Pops': {'calories': '110', 'sodium': '90'}, 'Nutri-grain_Wheat': {'calories': '90', 'sodium': '170'}, 'Cheerios': {'calories': '110', 'sodium': '290'}, '100%_Natural_Bran': {'calories': '120', 'sodium': '15'}, "Cracklin'_Oat_Bran": {'calories': '110', 'sodium': '140'}, 'Nut&Honey_Crunch': {'calories': '120', 'sodium': '190'}, 'Bran_Chex': {'calories': '90', 'sodium': '200'}};

var margin = {top: 20, right: 15, bottom: 60, left: 60}
  , width = 960 - margin.left - margin.right
  , height = 500 - margin.top - margin.bottom;

var calorieFinder = function(d){
  return parseInt(d["calories"]);
}

var sodiumFinder = function(d){
  return parseInt(d["sodium"]);
}

var x_range = d3.scaleLinear()
                .domain([0,d3.max(cereals, calorieFinder)])
                .range([0, width]);

var y_range = d3.scaleLinear()
                .domain([0,d3.max(cereals, sodiumFinder)])
                .range([height, 0]);

var svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
            .attr('class', 'chart');

var graph = svg.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .attr('width', width)
                .attr('height', height)
                .attr('class', 'main')

var x_axis = d3.axisBottom(x_range).tickFormat(function(d){ return d.x;});

graph.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'main axis date')
    .call(x_axis);

var y_axis = d3.axisLeft(y_range);

graph.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(y_axis);

var g = graph.append("svg:g");

g.selectAll("scatter-dots")
  .data(Object.keys(cereals))  // using the values in the ydata array
  .enter().append("svg:circle")  // create a new circle for each value
      .attr("cy", function (d) { return y_range(parseInt(cereals["sodium"])); } ) // translate y value to a pixel
      .attr("cx", function (d) { return x_range(parseInt(cereals["calories"])); } ) // translate x value
      .attr("r", 10) // radius of circle
      .style("opacity", 0.6); // opacity of circle
