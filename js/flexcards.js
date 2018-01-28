var attr;
var cards = document.getElementsByClassName("card");
var ids = getCardIDs();
var tempcols = [];

displayCards("hidden");

// array helper, moving by index
function moveTo(array, old_index, new_index) {
    if (new_index >= array.length) {
        var k = new_index - array.length;
        while ((k--) + 1) {
            array.push(undefined);
        }
    }
    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    return array;
}

// array helper, sorting by subarray
function sortArray(index, arr) {
	arr.sort(function(a,b){return a[index] > b[index]});
}

// move cards with fixed position
function moveCards(fixes, ids) {
    for (var j = 0; j < fixes.length; j++) {
        if (fixes[j][1] <= ids.length) {
            ids = moveTo(ids, ids.indexOf(fixes[j][0]), fixes[j][1]-1);
	    }
    } return;
}

// get card id, position and sortorder
function getCardIDs() {
	var ids = [];
	var fixes = getFixedPositions();
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].id !== "") {
            ids.push(cards[i].id);
        } 
    }
    sortArray(1, fixes);
    moveCards(fixes, ids);
    return ids;
}

// get fixed positions
function getFixedPositions() {
	var fixes = [];
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("fixedposition") !== "0" && cards[i].getAttribute("fixedposition") !== null) {
            fixes.push([cards[i].id, cards[i].getAttribute("fixedposition")]);
        } 
    }
    return fixes;
}

// switch visibility
function displayCards(attr) {
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].id !== "") {
            document.getElementById(cards[i].id).style.visibility = attr;
        }
    }
    return;
}

// preparing array for tempcols
function setTempcols(cols) {
    for (i = 0; i < cols; i += 1) {
        tempcols.push([]);
    }
    return;
}

// push new order to tempcols
function pushOrder(cols, tempcols, i) {
    for (j = 0; j < cols; j += 1) {
        tempcols[j].push(ids[i+j]);
    }
    return;
}

// get the ids and doing new sorting
function getColumns(cols) {
    setTempcols(cols);
    for (i = 0; i < ids.length; i += 1) {
        if (i % cols === 0) {
            pushOrder(cols, tempcols, i);
        }
    }
    return tempcols;
}

// append cards with new sorting to columns
function appendCards(i, tempcols) {
    var chicken, egg;
    for (j = 0; j < tempcols[0].length; j+=1) {
        chicken = document.getElementById(''+tempcols[i][j]);
        egg = document.getElementById(''+tempcols[i][j+1]);
        if (egg !== null) {
            chicken.appendChild(egg);
        }
    } return;
}

// main function for building the new and sorted layout
function sortLayout(cols) {
    var tempcols = getColumns(cols);
    for (i = 0; i < tempcols.length; i+=1) {
        var parent = document.getElementById('column-'+i);
        var child = document.getElementById(''+tempcols[i][0]);
        if (child !== null) {
            parent.insertBefore(child, parent.firstChild);
        }
        appendCards(i, tempcols);
    }
}

var width;

// on (re)load
window.onload = function(e) { 
    breakpointChange();
    displayCards("visible");
    // hide spinner
    var spinner = document.getElementById('spinner').style.display = "none";
}

// reload page after resizing, doing sorting again
window.addEventListener('resize', function () { 
    setTimeout(function(){
        window.location.reload(true);
        breakpointChange();
    });
});

// check size and give sorting
function breakpointChange() {
    var width = window.innerWidth;
    if (width < 577) {
        sortLayout(1);
    }
    else if (width >= 577 && width < 768) {
        sortLayout(1);
    }
    else if (width >= 769 && width < 992) {
        sortLayout(2);
    }
    else if (width >= 992 && width < 1200) {
        sortLayout(3);
    }
    else if (width >= 1200) {
        sortLayout(4);
    } else {
        // do nothing
    }
}

// sticky pager, scroll indicator

var doc = document.body.clientHeight;
var h = window.innerHeight;

window.onscroll = function() {
    
    // get indicator
    var y = window.scrollY;
    var max = Math.round(doc/h);
    var step = Math.round(y/h);
    var mobilepager = document.getElementById('mobilepager');
    
    document.getElementById("indicator").innerHTML = "";
    
    for (i = 0; i < max; i++) {
		document.getElementById("indicator").innerHTML += "<div id='ind"+i+"' style='margin: auto; background: #FFF; width: 33px; height: 4px;'></div>";
	}
	
	document.getElementById("ind"+step+"").style.border = "1px solid #000";
		
    
    if (mobilepager.className !== "mobilepager fade-in") {
        mobilepager.className = "mobilepager fade-in";
        setTimeout(function(){ mobilepager.className = "mobilepager fade-out"; }, 4000);
	}
};







    
