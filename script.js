var len;
var results = '';

function search() { 
    apiSearch();
    document.getElementById("query").value = " ";
}

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0", 
    "mkt": "en-us"
    };

  $.ajax({
      url: 'https://api.bing.microsoft.com/' + "/v7.0/search?" +$.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "30836d683a4a4e3f84cacb756aa1168b");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
        results = "";
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}


function bkgImage() {
    document.body.style.backgroundImage = "url('https://freight.cargo.site/t/original/i/561b7e4736035c98687372ba6c41ef46377c916705ccecd0498a526089aa8634/_DSF0752-Exposure.jpg')";
}



function Time() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
   

    let time = hh + ":" + mm + "" + session;
    $("#time").css("visibility", "visible");
    $('#time').html(time);
    $('#time').dialog();
}



function feelingLucky() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0", 
    "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/' + "/v7.0/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "30836d683a4a4e3f84cacb756aa1168b");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            results = '';
            for (i = 0; i < 1; i++) {
                window.location.href = data.webPages.value[i].url
                }
            })
    .fail(function () {
      alert("error");
    });
}


function changeImageF() {
    document.body.style.backgroundImage = "url('https://freight.cargo.site/t/original/i/561b7e4736035c98687372ba6c41ef46377c916705ccecd0498a526089aa8634/_DSF0752-Exposure.jpg')";
    return true;
}

let styles = false;
function bkgImage() {

    var bool = '';
    if (!styles) {
        bool = changeImageF();
    }
    if (styles == true) {
        bool = changeImageT();
    }
    console.log(styles);
    styles = bool;

}

function changeImageT() {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80')";
    return false;
}