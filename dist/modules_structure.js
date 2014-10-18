"use strict";
require('traceur-source-maps').install(require('traceur'));
var http = require('http'),
    fs = require('fs'),
    q = require('q'),
    app = require('./app'),
    port = process.argv[2] || 8000,
    host;
function configureSync(options) {
  var options = options || fs.readFileSync('./configure');
}
fs.readFileSync;
var app = http.createServer(function(req, res) {
  setTimeout(function() {
    res.end('hello world\n');
  }, 1000);
});
app.listen(8000);
console.log('Server started on port 8000');
if (process.env.NODE_ENV !== 'production') {
  return require('safeguards').noSynchronousIO(module);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXNfc3RydWN0dXJlLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7QUFFMUQsQUFBSSxFQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDO0FBQ3RCLEtBQUMsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLElBQUcsQ0FBQztBQUVqQixJQUFBLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxHQUFFLENBQUM7QUFFZixNQUFFLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxPQUFNLENBQUM7QUFFckIsT0FBRyxFQUFJLENBQUEsT0FBTSxLQUFLLENBQUUsQ0FBQSxDQUFDLEdBQUssS0FBRztBQUU3QixPQUFHLENBQUE7QUFFTixPQUFTLGNBQVksQ0FBRSxPQUFNLENBQUc7QUFDL0IsQUFBSSxJQUFBLENBQUEsT0FBTSxFQUFJLENBQUEsT0FBTSxHQUFLLENBQUEsRUFBQyxhQUFhLEFBQUMsQ0FBQyxhQUFZLENBQUMsQ0FBQTtBQUd2RDtBQUFBLEFBQ0EsQ0FBQyxhQUFhLENBQUE7QUFHZCxBQUFJLEVBQUEsQ0FBQSxHQUFFLEVBQUksQ0FBQSxJQUFHLGFBQWEsQUFBQyxDQUFDLFNBQVMsR0FBRSxDQUFHLENBQUEsR0FBRSxDQUFHO0FBQzlDLFdBQVMsQUFBQyxDQUFDLFNBQVEsQUFBQyxDQUFFO0FBQ3JCLE1BQUUsSUFBSSxBQUFDLENBQUMsZUFBYyxDQUFDLENBQUM7RUFDekIsQ0FBRyxLQUFHLENBQUMsQ0FBQztBQUNULENBQUMsQ0FBQztBQUdGLEVBQUUsT0FBTyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFFaEIsTUFBTSxJQUFJLEFBQUMsQ0FBQyw2QkFBNEIsQ0FBQyxDQUFDO0FBRTFDLEdBQUksT0FBTSxJQUFJLFNBQVMsSUFBTSxhQUFXLENBQUc7QUFFMUMsT0FBTyxDQUFBLE9BQU0sQUFBQyxDQUFDLFlBQVcsQ0FBQyxnQkFBZ0IsQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQ3JEO0FBQUEiLCJmaWxlIjoibW9kdWxlc19zdHJ1Y3R1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCd0cmFjZXVyLXNvdXJjZS1tYXBzJykuaW5zdGFsbChyZXF1aXJlKCd0cmFjZXVyJykpOy8vIFJlcXVpcmVcbi8vIENvcmUgbW9kdWxlc1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJylcblx0LCBmcyA9IHJlcXVpcmUoJ2ZzJylcbi8vIFBhY2thZ2VzXG5cdCwgcSA9IHJlcXVpcmUoJ3EnKVxuLy8gTW9kdWxlc1xuXHQsIGFwcCA9IHJlcXVpcmUoJy4vYXBwJylcbi8vIFZhcmlhYmxlc1xuXHQsIHBvcnQgPSBwcm9jZXNzLmFyZ3ZbMl0gfHwgODAwMFxuLy8gVW5kZWZpbmVkXG5cdCwgaG9zdFxuXG5mdW5jdGlvbiBjb25maWd1cmVTeW5jKG9wdGlvbnMpIHtcblx0dmFyIG9wdGlvbnMgPSBvcHRpb25zIHx8IGZzLnJlYWRGaWxlU3luYygnLi9jb25maWd1cmUnKVxuXHQvLyAuLi5cblxufVxuZnMucmVhZEZpbGVTeW5jXG5cbi8vIENvbmZpZ3VyZVxudmFyIGFwcCA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0cmVzLmVuZCgnaGVsbG8gd29ybGRcXG4nKTtcblx0fSwgMTAwMCk7XG59KTtcblxuLy8gSW5pdGlhbGl6YXRpb25cbmFwcC5saXN0ZW4oODAwMCk7XG5cbmNvbnNvbGUubG9nKCdTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0IDgwMDAnKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblx0Ly8gVEhJUyBNVVNUIEJFIFRIRSBMQVNUIExJTkUgRVhFQ1VURUQgSU4gVEhFIE1BSU4gTU9EVUxFXG5cdHJldHVybiByZXF1aXJlKCdzYWZlZ3VhcmRzJykubm9TeW5jaHJvbm91c0lPKG1vZHVsZSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9