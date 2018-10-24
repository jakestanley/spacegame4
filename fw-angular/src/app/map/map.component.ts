import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    canvas = null;
    shipX = 0;
    shipY = 0;

    constructor() { }

    ngOnInit() {
    }

    ngAfterContentInit() {

        console.log("logging d3");
        console.log(d3);

        this.canvas = d3.select(".canvas");
        console.log("logging this.canvas");
        console.log(this.canvas);

        this.drawShip();
    }

    drawShip() {
        console.log("drawing ship")

        var triangle = [
            5,30
          , 15,10
          , 25,30
        ];

        var shipTriLeft = [
            20,0
          , 0,30
          , 10,40
        ];

        var shipTriMid = [
            20,0
          , 10,40
          , 30,40
        ];

        var shipTriRight = [
            20,0
          , 40,30
          , 30,40
        ];

        var shipTriangles = [shipTriLeft, shipTriMid, shipTriRight];

        function translate(triangle, x, y) {
            let transformed = [];
            for (var i = 0; i < triangle.length; ++i) {
                if (i % 2 === 0) {
                    transformed.push(triangle[i] + x);
                } else {
                    transformed.push(triangle[i] + y);
                }
            }
            return transformed;
        }

        d3.select(".canvas").style("background-color", "black")

        var darkRed = '#cc0000';
        var lightRed = '#ff0000';
        let rot = 25;
        let rotate = "rotate(25 50 100)";

        // var rotate = d3.svg.transform().rotate(-45);

        // draw ship left
        d3.select(".canvas")
            .append('polygon')
            .attr('points', translate(shipTriangles[0], 40, 40).toString())
            .attr('fill', lightRed)
            .attr('class', 'ship')
            .attr('transform', rotate)

        // draw ship mid
        d3.select(".canvas")
            .append('polygon')
            .attr('points', translate(shipTriangles[1], 40, 40).toString())
            .attr('fill', darkRed)
            .attr('class', 'ship')
            .attr('transform', rotate)

        //  draw ship right
        d3.select(".canvas")
            .append('polygon')
            .attr('points', translate(shipTriangles[2], 40, 40).toString())
            .attr('fill', lightRed)
            .attr('class', 'ship')
            .attr('transform', rotate)

        var spin = setInterval(function() {
            d3.selectAll(".ship").attr('transform', 'rotate(' + ++rot + ' 50 100)');
        }, 20);

    }

    drawPlanet() {

    }

    clicked(event: any) {
        console.log("user clicked on canvas at (relative) " + event.offsetX + "," + event.offsetY);
        console.log(event);
        // <polygon fill="yellow" stroke="blue" stroke-width="2"
        // points="05,30
        //         15,10
        //         25,30" /> -->





        // d3.select(event.target).append('circle')
        // .attr('cx', event.x)
        // .attr('cy', event.y)
        // .attr('r', () => {
            //     return 50;
            // })
            // .attr('fill', 'red');
        }

    }
