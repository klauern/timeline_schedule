var tl;
function onLoad() {

  var eventSource = new Timeline.DefaultEventSource();
  var bandInfos = [
    Timeline.createBandInfo({
      eventSource:    eventSource,
      width:          "70%",
      intervalUnit:   Timeline.DateTime.MONTH,
      intervalPixels: 100
  }),
    Timeline.createBandInfo({
      eventSource:    eventSource,
      width:          "30%",
      intervalUnit:   Timeline.DateTime.YEAR,
      intervalPixels: 200
  })
  ];

  bandInfos[1].syncWith = 0;
  bandInfos[1].highlight = true;

  tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);
  Timeline.loadXML("/data.xml", function(xml, url) { eventSource.loadXML(xml,url); });
}

var resizeTimerId = null;
function onResize() {
  if (resizeTimerID == null) {
    resizeTimerID = window.setTimeout(function () {
      resizeTimerID = null;
      tl.layout();
    }, 500);
  }
}


