// https://observablehq.com/@shriphani/india-2019-states@68
function _1(md){return(
md`# India 2019 States`
)}

function _train_url(FileAttachment){return(
FileAttachment("india_states.geojson")
)}

function _3(html){return(
html`
<div class="trains">
  <svg>
  </svg>
</div>
`
)}

function _d3(require){return(
require('d3@5')
)}

function _topojson(require){return(
require('topojson')
)}

async function _6(d3,train_url)
{
  d3.select('.trains > svg').remove() // Without this, D3 just keeps appending new svgs each time.

  const width = 1000;
  const height = 1000;
   
  // returns a d3 selection of parent-DOM-element-for-d3 (which continues down the method chain...)
  const d3SelectionOfSVGCanvas = d3.select('.trains') 
    .append('svg')
      .attr('class', 'my-canvas') 
      .attr('width', width)
      .attr('height', height)
      .attr('stroke', 'cyan')
      .attr('stroke-width', '1')
      .style("background-color", 'black');
    
  var g = d3SelectionOfSVGCanvas.append("g");
  
  const json = await train_url.json();
 
 
  // now build the projection
  var projection = d3.geoMercator().rotate([-78.9629,0]).fitSize([width, height], json);
  var path = d3.geoPath().projection(projection);
  
      d3SelectionOfSVGCanvas.selectAll("path")
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('stroke', 'cyan')
    .attr('fill', 'black');



  
  return d3SelectionOfSVGCanvas.node();
  }


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["india_states.geojson", {url: new URL("./files/563272e022ac8362ae39c6dce6795cdc7c10f84f3a342ac2d2a65f9f88126645b69914073ef0dcaac432997cda8f57f0ddba7eadea5c88d6185651e45398f841.geojson", import.meta.url), mimeType: "application/geo+json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("train_url")).define("train_url", ["FileAttachment"], _train_url);
  main.variable(observer()).define(["html"], _3);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer()).define(["d3","train_url"], _6);
  return main;
}
