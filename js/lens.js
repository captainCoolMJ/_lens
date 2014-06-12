/*
* Copyright (C) 2014 sd84
*    
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var lens = (function() { 
    'use strict';

    var spy, zoom, diameter, x, y;

    var inspect = (function (el, options){

        spy = document.getElementById(el);

        zoom = (typeof options.zoom != "undefined") ? options.zoom : 3;

        diameter = (typeof options.diameter != "undefined") ? options.diameter : 13;

        (function (){
            
            window.addEventListener('mousemove', watch, false);
            
            function watch (e){
                x = (e.pageX) ? e.pageX : e.clientX;
                y = (e.pageY) ? e.pageY : e.clientY;
                spy.style.width = options.diameter + 'em';
                spy.style.height = options.diameter + 'em';
                spy.style.backgroundSize = (zoom * 100) + '%';
                spy.style.backgroundPosition = (1 - zoom) * x  + 'px ' + (1 - zoom) * y + 'px';
                spy.style.left = x - (spy.offsetWidth / 2);
                spy.style.top = y - (spy.offsetHeight / 2);
                e.preventDefault();
            }

        })();
    });

    return {
        inspect: inspect
    };
})();