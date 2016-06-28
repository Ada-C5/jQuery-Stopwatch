function StopWatch(callback) {
  this._time = 0
  this._interval = null
  this._delay = 10
  this._callback = callback

  this.start = function () { // starts the watch
    // only start an interval if we don't already have one running
    if (this._interval) { return }
    this._interval = setInterval(this.addTime.bind(this), this._delay)
  }

  this.stop = function () { // stops the watch
    // reset the _interval variable so we know to start a new one later
    clearInterval(this._interval)
    this._interval = null
  }

  this.addTime = function () {  // adds time to the counter
    this._time += this._delay
    this._callback(this._time)
  }
}


// add code here
$(document).ready(function () {
  console.log("Yay! Hi!")

  var container = $('#stopWatch')
  var display = container.children('.display')
  var buttons = container.children('button.stopWatch')
  var stopWatch = new StopWatch(function (newTime) {
    // update the display
    display.text(newTime)    
  })

  buttons.on('click', function (event) {
    event.preventDefault()
    console.log('you clicked me!')

    // which button did I click?
    var button = $(this)
    // and what should I do in response?
    if (button.hasClass('start')) { // start the stopwatch!
      console.log('start the watch!')
      stopWatch.start()
    } else { // stop the stopwatch!
      console.log('stop the watch!')
      stopWatch.stop()
    }
  })
})
