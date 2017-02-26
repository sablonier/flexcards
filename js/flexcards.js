//console.log("Width: " + $(window).innerWidth());
//console.log("Boxes: " + "{{cards|length}}");

var attr;

var cards = document.getElementsByClassName("card");
var ids = getCardIDs();

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
};

// array helper, sorting by subarray
function sortArray(index, arr) {
	arr.sort(function(a,b){return a[index] > b[index]});
}

// get card id, position and sort
function getCardIDs() {
	var ids = [];
	var fixes = getFixedPositions();
	
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].id != "") {
            ids.push(cards[i].id);
        } 
    }
    
    sortArray(1, fixes);
    for (var i = 0; i < fixes.length; i++) {
		if (fixes[i][1] <= ids.length) {
            ids = moveTo(ids, ids.indexOf(fixes[i][0]), fixes[i][1]-1);
	    }
    }
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
        if (cards[i].id != "") {
            document.getElementById(cards[i].id).style.visibility = attr;
        }
    }
    return;
}

// getting the new columns
function getColumns(cols) {
    switch(true) {
    case cols === 4:
        var tempcols = [[],[],[],[]];
        break;
    case cols === 3:
        var tempcols = [[],[],[]];
        break;
    case cols === 2:
        var tempcols = [[],[]];
        break;
    case cols === 1:
        var tempcols = [[]];
        break;
    default:
        var tempcols = [[]];
    } 
    
    //console.log(JSON.stringify(tempcols));
    
    for (i = 0; i < ids.length; i+=1) {
        if (i % cols === 0) {
            for (j = 0; j < cols; j += 1) {
                if (ids[i+j] !== null) {
                    tempcols[j].push(ids[i+j]);
                }
            }
        }
    }
    
    //console.log(JSON.stringify(tempcols));
    return tempcols;
}

// pushing cards to the new columns
function sortLayout(cols) {
    
    var tempcols = getColumns(cols);
    var chicken, egg;
    
    for (i = 0; i < tempcols.length; i+=1) {
        
        var parent = document.getElementById('column-'+i);
        var child = document.getElementById(''+tempcols[i][0]);
        if (child !== null) {
            parent.insertBefore(child, parent.firstChild);
        }

        for (j = 0; j < tempcols[0].length; j+=1) {
            chicken = document.getElementById(''+tempcols[i][j]);
            egg = document.getElementById(''+tempcols[i][j+1]);
            if (egg !== null) {
                chicken.appendChild(egg);
            }
        }
    }
}

var resizeTimer, width;
var mobile = tablet = desksmall = deskwide = desklarge = false;

// on (re)load, no timer needed
window.onload = function(e) { 
    breakpointChange();
    displayCards("visible");
}

// on window resize, could have a delay to 'zen' resize firing
window.onresize = function(e) { 
    clearTimeout(resizeTimer);
    // delay set to 0 for resize stress test
    resizeTimer = setTimeout(breakpointChange(), 0);
}

// check size and give sorting
function breakpointChange() {
    width = window.innerWidth;

    if (!mobile && width < 577) {
        tablet = desksmall = deskwide = desklarge = false;
        mobile = true;
        sortLayout(1);
    }

    if (!tablet && width > 578 && width < 768) {
        mobile = desksmall = deskwide = desklarge = false;
        tablet = true;
        sortLayout(1);
    }

    if (!desksmall && width >= 769 && width < 992) {
        mobile = tablet = deskwide = desklarge = false;
        desksmall = true;
        sortLayout(2);
    }
    
    if (!deskwide && width >= 992 && width < 1200) {
        mobile = tablet = desksmall = desklarge = false;
        deskwide = true;
        sortLayout(3);
    }
    
    if (!desklarge && width >= 1200) {
        mobile = tablet = desksmall = deskwide = false;
        desklarge = true;
        sortLayout(4);
    }
}

// sticky pager 
window.onscroll = function() {
    var sticky = document.getElementById('sticker');
    if (sticky !== null) {
        if( document.body.scrollTop+document.documentElement.scrollTop > 400) {
            sticky.className = "stick";
        }
        else {
            sticky.className = "stickhidden";
        }
    }
};
